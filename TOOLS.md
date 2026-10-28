# Free Speech & Audio Tools

A freebies directory of no-cost speech-to-text, text-to-speech, recording, and editing tools.

Published by **Asdale Dynamics, LLC**.

Every tool here is free to use — no affiliate links, no paywalls, and no account required unless noted. Each listing shows cost, platform, beginner-friendly steps, and an official link.

## How to use

Open `index.html` in any web browser. The full tool list is embedded in the page and search and category filters run entirely in your browser — no build step, no internet needed after the page loads.

Or serve it locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

This Markdown file mirrors the same directory for easy reading and copying.

## Speech-to-text

### Whisper
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux
- **Steps:** Install ffmpeg and Python. Run `pip install openai-whisper`, then transcribe a file: `whisper interview.mp3 --model base`. The transcript appears as a .txt file next to your audio.
- **Official link:** https://github.com/openai/whisper

### Whisper.cpp
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download the source from GitHub and run `make` in the folder. Download a model such as `ggml-base.en.bin` into `models/`, then run `./main -m models/ggml-base.en.bin -f recording.wav`.
- **Official link:** https://github.com/ggerganov/whisper.cpp

### macOS Dictation
- **Cost:** Free (built into macOS)
- **Platform:** Mac
- **Steps:** Open System Settings > Keyboard > Dictation and turn it on. Click in any text field, press the dictation shortcut (default: press the Fn key twice), and speak. Your words appear as text.
- **Official link:** https://support.apple.com

### Windows Voice Access
- **Cost:** Free (built into Windows)
- **Platform:** Windows
- **Steps:** Open Settings > Accessibility > Speech and turn on Voice Access. Follow the setup to choose your microphone, then speak into any text field or say commands like "open Settings".
- **Official link:** https://support.microsoft.com

### oTranscribe
- **Cost:** Free (open source)
- **Platform:** Web (Chrome)
- **Steps:** Go to otranscribe.com in Chrome, import your audio file, and play it back while you type in the built-in editor. Your work saves in the browser, so you can pause and return later.
- **Official link:** https://otranscribe.com

## Text-to-speech

### Piper TTS
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download the Piper release and a voice model (for example `en_US-lessac-medium.onnx`) from GitHub. Run `echo "Hello, world" | ./piper --model en_US-lessac-medium.onnx --output_file hello.wav` to create a WAV file.
- **Official link:** https://github.com/rhasspy/piper

### eSpeak NG
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux, Android
- **Steps:** Install eSpeak NG. In Terminal or Command Prompt run `espeak-ng "Hello, world" -w hello.wav` to save speech as a WAV file, or open the GUI to speak text aloud.
- **Official link:** https://github.com/espeak-ng/espeak-ng

### macOS Spoken Content (say)
- **Cost:** Free (built into macOS)
- **Platform:** Mac
- **Steps:** Open System Settings > Accessibility > Spoken Content and turn on "Speak selection". In Terminal, run `say "Hello, world"` to hear the system voice, or highlight text in any app and press the speak shortcut.
- **Official link:** https://support.apple.com

### Microsoft Edge Read Aloud
- **Cost:** Free (with Microsoft Edge)
- **Platform:** Windows, Mac
- **Steps:** Open a webpage or PDF in Microsoft Edge, then click the "Read Aloud" button in the address bar (or highlight text, right-click, and choose "Read aloud selection"). Pick a voice and speed, then press play.
- **Official link:** https://www.microsoft.com/edge

### Balabolka
- **Cost:** Free (freeware)
- **Platform:** Windows
- **Steps:** Download and install Balabolka for Windows. Paste your text into the window, pick a voice from the dropdown, and use File > Save Audio to export WAV, MP3, or other formats.
- **Official link:** https://balabolka.site

## Recording

### Audacity
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download and install Audacity. Click the red Record button to record from your microphone, press Space to stop, then use File > Export to save as MP3 or WAV.
- **Official link:** https://github.com/audacity/audacity

### OBS Studio
- **Cost:** Free (open source)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download and install OBS Studio. In the Sources panel, add "Audio Output Capture" (system sound) or "Audio Input Capture" (microphone), then click "Start Recording" to save the audio to disk.
- **Official link:** https://github.com/obsproject/obs-studio

### QuickTime Player
- **Cost:** Free (built into macOS)
- **Platform:** Mac
- **Steps:** Open QuickTime Player and choose File > New Audio Recording. Click the record button, speak, then click stop and use File > Save to save the recording.
- **Official link:** https://support.apple.com

### Windows Voice Recorder
- **Cost:** Free (built into Windows)
- **Platform:** Windows
- **Steps:** Open Voice Recorder from the Start menu, click the record button, and speak. When finished, click stop and give the file a name to save it to Documents > Sound recordings.
- **Official link:** https://support.microsoft.com

## Editing

### Ocenaudio
- **Cost:** Free (freeware)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download and install Ocenaudio. Open an audio file or record new audio, select a section to edit (cut, copy, paste, effects), and use File > Export to save your changes.
- **Official link:** https://www.ocenaudio.com

### GarageBand
- **Cost:** Free (built into macOS / iOS)
- **Platform:** Mac, iOS
- **Steps:** Open GarageBand on Mac (free from the App Store) and choose "Empty Project" with a microphone or audio input. Record a track, edit regions in the timeline, and use Share > Export Song to Disk to save.
- **Official link:** https://www.apple.com/mac/garageband/

### Cakewalk by BandLab
- **Cost:** Free
- **Platform:** Windows
- **Steps:** Create a free BandLab account, download Cakewalk, and install it. Create a new project, record audio or import a file, edit with cut/copy/paste and effects, then export as WAV or MP3.
- **Official link:** https://www.bandlab.com/cakewalk

### Ardour
- **Cost:** Free (open source; official builds pay-what-you-want)
- **Platform:** Windows, Mac, Linux
- **Steps:** Download Ardour (source is free; official builds are pay-what-you-want, including $0). Start a new session, add audio tracks, record or import audio, edit on the timeline, and export via Session > Export.
- **Official link:** https://ardour.org

## Style & promises

Plain English, step by step, never condescending. Local-first. No affiliate links. No secrets, API keys, or personal data.

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE`.

## About

Asdale Dynamics, LLC (Indiana, formed October 2026) is the company of Dylan Asdale, a registered nurse turned AI author and founder. His book *The Massive AI Manual* and hub site dylanasdale.github.io explain AI "like a friend would": plain English, step by step, never condescending. The LLC focuses on beginner-friendly AI education, books and guides, and practical tools.
