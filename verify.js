// verify.js - automated verification for the free speech & audio tools directory
'use strict';

var fs = require('fs');
var path = require('path');

var failures = 0;

function fail(msg) {
  failures += 1;
  console.error('FAIL: ' + msg);
}

function pass(msg) {
  console.log('ok: ' + msg);
}

// 1. LICENSE copyright line (must be exact)
var license = fs.readFileSync(path.join(__dirname, 'LICENSE'), 'utf8');
var expectedCopyright = 'Copyright (c) 2026 Asdale Dynamics, LLC';
if (license.indexOf(expectedCopyright) === -1) {
  fail('LICENSE missing exact copyright line: ' + expectedCopyright);
} else {
  pass('LICENSE contains exact copyright line');
}

// 2. README credits Asdale Dynamics, LLC
var readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
if (readme.indexOf('Asdale Dynamics, LLC') === -1) {
  fail('README does not credit Asdale Dynamics, LLC');
} else {
  pass('README credits Asdale Dynamics, LLC');
}

// 3. Extract embedded JSON from index.html
var html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
var startMarker = '<script id="tools-data" type="application/json">';
var endMarker = '</script>';
var start = html.indexOf(startMarker);
if (start === -1) {
  fail('index.html missing tools-data script block');
  process.exit(1);
}
var jsonStart = start + startMarker.length;
var end = html.indexOf(endMarker, jsonStart);
if (end === -1) {
  fail('index.html missing closing script tag for tools-data');
  process.exit(1);
}
var tools;
try {
  tools = JSON.parse(html.slice(jsonStart, end));
  pass('Embedded JSON parses successfully');
} catch (err) {
  fail('Embedded JSON is invalid: ' + err.message);
  process.exit(1);
}

// 4. Validate tool listings
var validCategories = ['speech-to-text', 'text-to-speech', 'recording', 'editing'];
var counts = {};
if (!Array.isArray(tools) || tools.length === 0) {
  fail('Expected a non-empty array of tools');
} else {
  pass('Found ' + tools.length + ' tool listings');
  tools.forEach(function (tool, i) {
    var prefix = 'tool #' + (i + 1) + ' (' + (tool.name || '(unnamed)') + ')';
    var required = ['id', 'name', 'category', 'cost', 'platform', 'steps', 'link'];
    required.forEach(function (field) {
      if (typeof tool[field] !== 'string' || tool[field].trim() === '') {
        fail(prefix + ' missing or empty field: ' + field);
      }
    });
    if (validCategories.indexOf(tool.category) === -1) {
      fail(prefix + ' has invalid category: ' + tool.category);
    } else {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    }
    if (!/^https?:\/\//.test(tool.link)) {
      fail(prefix + ' link is not http(s): ' + tool.link);
    }
    if (/[^a-z](affiliate|ref=|utm_source|tag=)/i.test(tool.link)) {
      fail(prefix + ' link may contain affiliate token: ' + tool.link);
    }
  });
  validCategories.forEach(function (cat) {
    pass(cat + ': ' + (counts[cat] || 0) + ' tools');
  });
}

// 5. No secrets / personal data patterns in tracked text files
var secrets = /(sk-[A-Za-z0-9]{20,}|AKIA[A-Z0-9]{16}|api[_-]?key["'\s]*[:=]|secret["'\s]*[:=]|password["'\s]*[:=]|access[_-]?token["'\s]*[:=])/i;
['index.html', 'README.md', 'LICENSE', 'STATUS.md', 'TOOLS.md'].forEach(function (file) {
  var p = path.join(__dirname, file);
  if (!fs.existsSync(p)) {
    return;
  }
  var content = fs.readFileSync(p, 'utf8');
  if (secrets.test(content)) {
    fail(file + ' may contain secrets or personal data patterns');
  } else {
    pass(file + ' has no secret/personal-data patterns');
  }
});

if (failures > 0) {
  console.error('\n' + failures + ' verification check(s) failed.');
  process.exit(1);
}
console.log('\nAll verification checks passed.');
process.exit(0);
