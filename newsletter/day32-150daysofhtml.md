# Day 32 - Video killed the radio star

Welcome to day 32!

Today we look at two elements that really caused quite the revolution on the web when they were introduced. Before the introduction of the `video` and `audio` elements, the most common way these media types were delivered over the web was either through [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash), or [Microsoft’s Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight).

> While we will touch on video and audio codecs to some degree, a detailed discussion around these topics is beyond the scope of the 150 days of HTML. If you are curious about all of this, do see the related reading section at the end of the post.

## Common attributes acroos `video` and `audio`

The majority of the attributes used with the two element match in form and function and so it makes sense to discuss those first and then address those that are unique. To be honest, there are only four unique attributes and they all apply to the `video` element.

### `src`

Without this attribute set there really is nothing but a quiet user interface element that is not of much utility to anyone 🙃 so, it makes sense to dig into this one first. As the name suggests, this sets the source of the `video` or `audio` element.

When it comes to video the three most commonly used and most widely supported formats are [MP4](https://en.wikipedia.org/wiki/MPEG-4_Part_14), [WebM - The video form of WebP](https://www.webmproject.org/), and [OGG](https://theora.org/). Let’s look at a very basic example of the `video` element using the most common format, mp4:

```html
<video src="../assets/villa-pool.mp4"></video>
```

For audio the most commonly used formats are [MP3](https://en.wikipedia.org/wiki/MP3), [OGG](https://theora.org/), and [Flac](https://xiph.org/flac/), with MP3 by far being the most common and well supported. The most basic usage of the `audio` element is as follows:

```html
<audio src="../assets/morning-birds-singing.mp3"></audio>
```

### Related reading

- [Video codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs)
- [Audio codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs)
