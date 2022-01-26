---
title: Chapter 33 | Sources and video captioning
keywords: html, html standard, how-to, learn html
description: The elements we cover in this chapter are the source and track elements.
menu:
  book:
    weight: 33
---

# Chapter 33 - Sources and video captioning

In this chapter we conclude our look at the `video` and `audio` elements with a look at the use of the `source` element as well as the `track` element.

## `source`

As with the `picture` element, the `source` element is used to specify various sources from which the user agent will choose the first it supports. Unlike the `picture` element, the available attributes are more limited. When used with either the `video` or `audio` element, the only valid attributes are:

- `src`
- `type`

Even with this limitation, the `source` element is very useful, and the most common way the `video` and `audio` elements are used. Let’s look at an example.

```html
<video controls height="605" width="1080">
  <source src="../assets/villa-pool-vp9.webm" type="video/webm" />
  <source src="../assets/villa-pool.mp4" type="video/mp4" />
  <p>
    Your browser does not support the video element. You can
    <a href="../assets/villa-pool.mp4">download the video file here</a>.
  </p>
</video>
```

### Live Codepen - Using the `source` element with `video`

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/eb089b3b0562550e41469e56cd426f44?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the source element with video live example" >}}

> A quick side note about the formats above. You will notice that I only use two formats above but, yesterday I mentioned more "formats" than that. Here we need to distinguish between containers and codecs(see further reading in the related reading section). MP4 and WebM are containers for video and audio but, both the video and audio channels can be encoded using a variety of supported codecs. Which codec is supported, depends on the container. So, while you can use [VP8](http://wiki.webmproject.org/vp8-implementations), [VP9](http://wiki.webmproject.org/vp9), [Theora](https://theora.org/), or [AV1](https://aomedia.org/) to encode you video for example, you will most likely stick with either WebM or MP4 as the container you use to deliver your video files.

```html
<audio controls>
  <source src="../assets/morning-birds-singing.opus" type="audio/ogg" />
  <source src="../assets/morning-birds-singing.mp3" type="audio/mpeg" />
  <source src="../assets/morning-birds-singing.m4a" type="audio/mp4" />
</audio>
```

### Live Codepen - Using the `source` element with `audio`

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/0fba9e91d17540bd872fca56974aebf1?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the source element with audio live example" >}}

Above is how you would use `source` with the `audio` element. Again, please see the related reading section for various links to codecs and containers. As mentioned, a user agent will pick the first version it supports, starting from the first entry and moving on. The [Opus](https://opus-codec.org/) format is a great general use format for audio but, there are [support caveats with regards to Safari](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#opus-foot-2) that you should be aware off. But then, that is exactly what the `source` element is for 😀 We start by specifying Opus, followed by MP3 and lastly, an `m4a` file. The last one uses the [Advanced Audio Coding](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)(AAC) codec inside a MPEG-4 container which is [widely supported across browsers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#example_music_for_streaming).

In terms of file size, though, the above three breaks down as follows:

- Opus: 549kb
- MP3: 1.4MB
- AAC: 2MB

## `track`

When adding video or audio to your website, there is an important point to remember. Without captions, subtitles, or a transcript, there is a large audience that is completely excluded from accessing the media. The `track` element is one of the pieces that help solve this. The `track` element has a couple of attributes to take note of.

### `kind`

This attribute has five possible values: subtitles, captions, descriptions, chapters, and metadata. the default value, if omitted is subtitles. It describes the intended purpose of the content of the text track. You can find [additional details on each kind here](https://html.spec.whatwg.org/#attr-track-kind).

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track kind="captions" />
</video>
```

### `src`

The `src` attribute as with other elements points to the location of the associated text track. One of the common formats used on the web is the [Web Video Text Tracks(WebVTT) format](https://w3c.github.io/webvtt/). This is a specification all on its own and so, covering the details is beyond the scope of the 150 days of HTML but, we will look at a small example so you can get an idea of one of the ways it can be used.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track kind="captions" src="../assets/captions.vtt" />
</video>
```

### `srclang`

Often captions or subtitles are not only used to provide a means of access for deaf or hard of hearing persons but, to provide a translation of the language used in the video. In these instances, you would specify the language of the text track using the `srclang` attribute.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track kind="captions" src="../assets/captions.vtt" srclang="en" />
  <track kind="captions" src="../assets/captions-french.vtt" srclang="fr" />
</video>
```

### `label`

The `label` attribute is used to provide a descriptive name for the text track. This should be in a user-readable format as it will be exposed by user agents when listing the available subtitles, captions, or audio descriptions.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track
    kind="captions"
    src="../assets/captions.vtt"
    srclang="en"
    label="English captions"
  />
  <track
    kind="captions"
    src="../assets/captions-french.vtt"
    srclang="fr"
    label="Légendes en français"
  />
</video>
```

When the value of the `label` attribute is in a different language from the default language of the page, it is also advisable to set the `lang` attribute to identify the language used.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track
    kind="captions"
    src="../assets/captions.vtt"
    srclang="en"
    label="English captions"
  />
  <track
    kind="captions"
    src="../assets/captions-french.vtt"
    srclang="fr"
    lang="fr"
    label="Légendes en français"
  />
</video>
```

### `default`

The final attribute of the `track` element is the `default` attribute. It is a Boolean attribute and when specified, indicates that the track should be used by default if the user did not specify a preference.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track
    kind="captions"
    src="../assets/captions.vtt"
    srclang="en"
    label="English captions"
    default="true"
  />
  <track
    kind="subtitles"
    src="../assets/subtitles.vtt"
    label="English subtitles"
  />
</video>
```

That covers all of the attributes and their use with the `track` element. To conclude today’s post, let’s take a look at an example of putting all of this together.

```html
<video controls width="320" height="240">
  <source src="../assets/television.webm" type="video/webm" />
  <source src="../assets/television.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="../assets/television.vtt"
    srclang="en"
    label="English captions"
    default
  />
  <track
    kind="captions"
    src="../assets/television-fr.vtt"
    srclang="fr"
    lang="fr"
    label="Légendes en français"
  />
</video>
```

### Live Codesandbox - Using the `video` element with `source` and `track` elements

{{< iframe iframesrc="https://codesandbox.io/embed/lucid-robinson-85114?fontsize=14&hidenavigation=1&theme=dark" width="100%" height="500" scrolling="no" class="code-frame" title="Using the video element with source and track elements live example" >}}

You can also see an example of the English VTT file being used here below.

```text
WEBVTT

0
00:00.000 --> 00:09.000
- [Music plays]

1
00:09.000 --> 00:11.000
- And here it is!

2
00:11.000 --> 00:16.000
- The greatest advance in television since color television itself.

3
00:16.000 --> 00:20.000
- The ultimate in performance and convenience.

4
00:22.000 --> 00:29.000
- Seven function, remote control color television. So beautiful, it enhances any decor.

5
00:30.000 --> 00:32.000
- Clean, modern styling.

6
00:33.000 --> 00:36.000
- No knobs, or gadgets in sight.

7
00:37.000 --> 00:40.000
- Superb cabinetry. Master crafted of the finest woods.

8
00:42.000 --> 00:49.000
- But the outstanding feature, of this great new color set.
- The one big feature that sets it apart.

9
00:49.000 --> 00:54.000
- Is an amazing new wireless wizard electronic remote control.

```

As mentioned before, below is a **BIG** list of tools and related reading on all things video, audio, subtitling, captioning, etc. Enjoy! 😀 🙃

### Related reading

- [Web audio codec guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs)
- [Converting MP4 to WebM](https://corydowdy.com/blog/converting-mp4-to-webm)
- [Container formats](https://handbrake.fr/docs/en/latest/technical/containers.html)
- [HandBrake: The open source video transcoder](https://handbrake.fr/)
- [boram - Cross platform, open source video encoder with support for AV1](https://github.com/Kagami/boram)
- [FFMpeg](https://ffmpeg.org/)
- [Audacity](https://www.audacityteam.org/)
- [Encoding AV1](https://hackernoon.com/encoding-av1-700b6ee4210)
- [What are video encoding formats?](https://www.cloudflare.com/learning/video/video-encoding-formats/)
- [Audio and video types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#audio_and_video_types)
- [Discrete types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#types)
- [Web Video Text Tracks Format](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
