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
  <source src="../assets/villa-pool.webm" type="video/webm" />
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

Above is how you would source with the `audio` element. Again, please see the related reading section for various links to codecs and containers. As mentioned, a user-agent will pick the first version it supports starting from the first entry and moving on. The [Opus](https://opus-codec.org/) format is a great general use format for audio but, there are [support caveats with regards to Safari](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#opus-foot-2) that you should be aware off. But then, that is exactly what the `source` element is for 😀 We start by specifying Opus, follows by MP3 and lastly an `m4a` file. The last one uses the [Advanced Audio Coding](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)(AAC) codec inside an MPEG-4 container which is [widely supported across browsers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#example_music_for_streaming).

In terms of file size though, the above three breaks down as follows:

- Opus: 549kb
- MP3: 1.4MB
- AAC: 2MB

Here again you can see the benefit this will offer users in terms of bandwidth savings.

### Related reading

- [Converting MP4 to WebM](https://corydowdy.com/blog/converting-mp4-to-webm)
- [Container formats](https://handbrake.fr/docs/en/latest/technical/containers.html)
- [HandBrake: The open source video transcoder](https://handbrake.fr/)
- [FFMpeg](https://ffmpeg.org/)
- [Audacity](https://www.audacityteam.org/)
- [What are video encoding formats?](https://www.cloudflare.com/learning/video/video-encoding-formats/)
