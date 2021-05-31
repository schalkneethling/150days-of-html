# Day 33 - Image source and track

Welcome to day 33!

Today we conclude our look at the `video` and `audio` elements with a look at the use of the `source` element as well as the `track` element.

## `source`

As with the `picture` element, the `source` element is used to specify various sources from which the user agent will choose the first it supports. Unlike the `picture` element, the available attributes are more limited. When used with either the `video` or `audio` element, the only valid attributes are:

- `src`
- `type`

Even with this limitation the `source` element is very useful and the most common way the `video` and `audio` elements are used. Let’s look at an example.

```html
<video controls>
  <source src="../assets/villa-pool-vp9.webm" type="video/webm" />
  <source src="../assets/villa-pool.mp4" type="video/mp4" />
</video>
```

> A quick side note about the formats above. You will notice that I only use two formats above but, yesterday I mentioned more "formats" that that. Here we need to distinguish between containers and codecs(see further reading in the related reading section). MP4 and WebM are containers for video and audio but, both the video and audio channels can be encoded using a variety of supported codecs. Which codec is supported, depends on the container. So, while you can use [VP8](http://wiki.webmproject.org/vp8-implementations), [VP9](http://wiki.webmproject.org/vp9), [Theora](https://theora.org/), or [AV1](https://aomedia.org/) to encode you video for example, you will most likely stick with either WebM or MP4 as the container you use to deliver your video files.

```html
<audio controls>
  <source src="../assets/morning-birds-singing.opus" type="audio/ogg" />
  <source src="../assets/morning-birds-singing.mp3" type="audio/mpeg" />
  <source src="../assets/morning-birds-singing.m4a" type="audio/mp4" />
</audio>
```

Above is how you would use `source` with the `audio` element. Again, please see the related reading section for various links to codecs and containers. As mentioned, a user-agent will pick the first version it supports starting from the first entry and moving on. The [Opus](https://opus-codec.org/) format is a great general use format for audio but, there are [support caveats with regards to Safari](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#opus-foot-2) that you should be aware off. But then, that is exactly what the `source` element is for 😀 We start by specifying Opus, follows by MP3 and lastly an `m4a` file. The last one uses the [Advanced Audio Coding](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)(AAC) codec inside an MPEG-4 container which is [widely supported across browsers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#example_music_for_streaming).

In terms of file size though, the above three breaks down as follows:

- Opus: 549kb
- MP3: 1.4MB
- AAC: 2MB

Here again you can see the benefit this will offer users in terms of bandwidth savings.

## `track`

When adding video or audio to your website there is an important point to remember. Without captions, subtitles or a transcript, there is a large audience that is completely excluded from accessing the media. The `track` element is one of the pieces that help solve this. The `track` element has a couple of attributes to take note off.

### `kind`

This attribute has five possible values. Those being, subtitles, captions, descriptions, chapters, and metadata. the default value if omitted is subtitles. It describes the intented purpose of the content of the text track. You can find [additional details on each kind here](https://html.spec.whatwg.org/#attr-track-kind).

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

Often captions or subtitles are not only used to provide a means of access for deaf or hard of hearing persons but, to provide a translation of the language used in the video. In these instances you would specify the language of the text track using the `srclang` attribute.

```html
<video controls src="../assets/villa-pool.mp4" type="video/mp4">
  <track kind="captions" src="../assets/captions.vtt" srclang="en" />
  <track kind="captions" src="../assets/captions-french.vtt" srclang="fr" />
</video>
```

### `label`

The `label` attribute is used to provide a descriptive name for the text track. This should be in a user-readable format as it will be exposed by user agents when listing the available subtitles, captions or audio descriptions.

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

**NOTE:** You cannot have more than one `track` element in the captions, subtitles, description, or chapters metadata state when the `default` attribute is set. In other words, you will not use this to set the default language captions track when there is more than one available.

That covers all of the attributes and their use with the `track` element. To conclude today's post, let’s take a look at an example of putting some of this together.

```html
<video controls src="../assets/television.mp4" type="video/mp4">
  <track
    kind="captions"
    src="../assets/television.vtt"
    srclang="en"
    label="English captions"
  />
</video>
```

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
