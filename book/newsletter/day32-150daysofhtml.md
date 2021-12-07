# Day 32 - Video killed the radio star

Welcome to day 32!

Today we look at two elements that really caused a revolution on the web when these elements were introduced. Before the introduction of the `video` and `audio` elements, the most common way these media types were delivered over the web was either through [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash) or [Microsoft’s Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight).

> While we will touch on video and audio codecs to some degree, a detailed discussion around these topics is beyond the scope of the 150 days of HTML. If you are curious about all of this, do see the related reading section at the end of the post.

## Common attributes across `video` and `audio`

The majority of the attributes used with the two elements match in form and function and so it makes sense to discuss those first and then address those that are unique. To be honest, there are only four unique attributes and, they all apply to the `video` element.

### `src`

Without this attribute set, there really is nothing but a quiet user interface element that is not of much utility to anyone 🙃 so, it makes sense to dig into this one first. As the name suggests, this sets the source of the `video` or `audio` element.

The three most commonly used and most widely supported formats are [MP4](https://en.wikipedia.org/wiki/MPEG-4_Part_14), [WebM - The video form of WebP](https://www.webmproject.org/), and [OGG](https://theora.org/) when it comes to video. Let’s look at an elementary example of the `video` element using the most common format, mp4:

```html
<video src="../assets/villa-pool.mp4"></video>
```

The most commonly used formats for audio are [MP3](https://en.wikipedia.org/wiki/MP3), [OGG](https://theora.org/), and [Flac](https://xiph.org/flac/), with MP3 by far being the most common and well supported. The most basic usage of the `audio` element is as follows:

```html
<audio src="../assets/morning-birds-singing.mp3"></audio>
```

While the above could be a valid use case for these elements, the above will either render nothing or a static first frame of the video without some JavaScript. Not useful at all. We can fix this with the addition of a single attribute.

### `controls`

As mentioned above, the default rendering for the `audio` and `video` elements are minimal and require some JavaScript to play either the video or audio tracks. Unless you build a custom player, you can enable all the basic interaction elements a user will need with a single attribute.

Using the examples from above, we will add the `controls` attribute.

```html
<video src="../assets/villa-pool.mp4" controls></video>

<audio src="../assets/morning-birds-singing.mp3" controls></audio>
```

And as easy as that, you now have user interface elements to control these media streams.

[See the live video example on Codepen.io](https://codepen.io/schalkneethling/pen/mdWWNXW)
[See the live audio example on Codepen.io](https://codepen.io/schalkneethling/pen/ZEeegrP)

### `crossorigin`

We have encountered this attribute a few times already. There is nothing new here, and so, if the media asset you are loading does not require you to specify a cross-origin resource sharing(CORS) strategy, you can omit the attribute. If the media server does require CORS, the attribute accepts either [`anonymous` or `with-credentials` as valid values](https://html.spec.whatwg.org/#cors-settings-attribute). For example, if you load an asset and the server requires CORS with credentials:

```html
<video
  src="https://mediaplex.com/assets/villa-pool.mp4"
  controls
  crossorigin="with-credentials"
></video>
<!-- or for anonymous CORS requests -->
<audio
  src="https://mediaplex.com/assets/morning-birds-singing.mp3"
  controls
  crossorigin="anonymous"
></audio>
```

### `preload`

Again, an attribute we have encountered before, but here, it comes in a different guise. It is still a hint to the browser regarding how it should load the media asset, but the possible values or much more limited.

By default, the browser will do what it deems to be the best for the user considering the current environment. As the author of the content, you know how users are likely to interact with the media. In these cases, you can use this attribute to hint to the browser as to the loading strategy you would recommend. The first option is `none`, which tells the browser that the media is included but, it is either unlikely that the majority of users will want to interact with it or, the author wants to avoid unnecessary traffic to the server.

The second option is `metadata`. If specified, it provides a hint to the user agent that, while you do not see the media asset(s) as critical, it may be worthwhile to prefetch the media metadata(dimensions, tracklist, duration, etc.), and perhaps even the first few frames or bytes of audio.

```html
<video src="../assets/villa-pool.mp4" controls preload="metadata"></video>

<audio
  src="../assets/morning-birds-singing.mp3"
  controls
  preload="none"
></audio>
```

> NOTE: Setting the attribute and specifying an empty string is valid and maps to the `auto` state which is the default behavior for user agents so, there really is no need for this.

[See the live video example on Codepen.io](https://codepen.io/schalkneethling/pen/mdWWNXW)
[See the live audio example on Codepen.io](https://codepen.io/schalkneethling/pen/ZEeegrP)

### `autoplay`

This attribute is a bit problematic. Off the bat, I am going to quote a critical note from the specification docs here:

> Authors are urged to use the autoplay attribute rather than using script to trigger automatic playback, as this allows the user to override the automatic playback when it is not desired, e.g. when using a screen reader. Authors are also encouraged to consider not using the automatic playback behavior at all, and instead to let the user agent wait for the user to start playback explicitly.

[The above in its original context](https://html.spec.whatwg.org/#attr-media-autoplay)

A use case where `autoplay` could be used is for video backgrounds which you might have seen on websites such as PayPal. It would need to be done responsibly by ensuring the video does not cause flickering, does not overly distract the user, and provides a way for users to disable autoplay by default easily. Also, this is a hint to the user agent, and based on user preferences or the browsing environment, the user agent can choose to ignore this hint.

```html
<video
  src="../assets/villa-pool.mp4"
  controls
  preload="metadata"
  autoplay
></video>
```

### `loop`

The name says it all 😀 This is a boolean attribute, and so, if present, it indicates that the user agent should play media content on a loop. In days of old, think [myspace](https://en.wikipedia.org/wiki/Myspace), it was not uncommon to be greeted by some background music automatically playing and looping in the background while you browse the user’s page. This is very uncommon these days and is definitely not a recommended practice.

```html
<video src="../assets/villa-pool.mp4" autoplay loop></video>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwpWgpm)

### `muted`

Another self-explanatory attribute. This is another Boolean attribute that, when present, will set the initial state of the audio track for the media element to muted.

```html
<audio
  src="../assets/morning-birds-singing.mp3"
  controls
  autoplay
  muted
></audio>
```

Note that this only sets the _initial_ state of the audio track and does not have a dynamic effect. In other words, adding this attribute to an `audio` element(using JavaScript as shown below), for example, will not mute the audio.

```javascript
const audio = document.getElementById("birds");
const muteButton = document.getElementById("mute");
muteButton.addEventListener("click", () => {
  audio.setAttribute("muted", "true");
});
```

The above then covers the attributes which are common between the `audio` and `video` elements. Before we move onto those attributes unique to the `video` element, there is one additional topic to address.

While the [`audio`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#browser_compatibility) and [`video`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#browser_compatibility) elements have wide support across browsers; it is still a good idea to provide fallback content for those browsers that do not support these elements. For example:

```html
<video src="../assets/villa-pool.mp4" controls preload="metadata">
  <p>
    Your browser does not support the video element. You can
    <a href="../assets/villa-pool.mp4">download the video file here</a>.
  </p>
</video>
```

[See the live video example on Codepen.io](https://codepen.io/schalkneethling/pen/mdWWNXW)
[See the live audio example on Codepen.io](https://codepen.io/schalkneethling/pen/ZEeegrP)

Onto the unique attributes of the `video` element.

### `poster`

The `poster` attribute provides a means for the author of the content to specify an image to be used as the first frame of the video before it is played. Technically this can be pretty much anything but, you are encouraged to provide something that gives the viewer an idea of what to expect when playing the video. You can essentially think of this as the video thumbnails on Youtube.

```html
<video
  src="../assets/villa-pool.mp4"
  controls
  preload="metadata"
  poster="../assets/poster.png"
>
  <p>
    Your browser does not support the video element. You can
    <a href="../assets/villa-pool.mp4">download the video file here</a>.
  </p>
</video>
```

[See the live video example on Codepen.io](https://codepen.io/schalkneethling/pen/mdWWNXW)

### `width`, and `height`

When you look at the above example, you will notice that, at first, the video loads very small until it has determined the dimensions of the poster. The video is then sized to the image dimensions of the poster. Once you click the play button, though, the video still explodes 💥 in display size 🙃

This is simply because we are not actually providing any dimensions for the `video` element. As expected, that is where the `width` and `height` attributes come into play.

```html
<video
  src="../assets/villa-pool.mp4"
  controls
  preload="metadata"
  poster="../assets/poster.png"
  height="605"
  width="1080"
>
  <p>
    Your browser does not support the video element. You can
    <a href="../assets/villa-pool.mp4">download the video file here</a>.
  </p>
</video>
```

With the dimensions set, the video starts loading at the appropriate size, remains at the same size when the poster loads and when you play the video. 📹 🎉

### `playsinline`

The final attribute we will look at today is `playsinline`. This attribute is a boolean attribute and sends a hint to the browser that the video should be played inline with the rest of the content instead of fullscreen or in an independent resizable window.

As of this writing, the attribute has no real purpose as videos will play inline by default. Users have to choose to view a video in fullscreen explicitly. [Support for this attribute is also limited](https://caniuse.com/?search=playsinline).

This covers almost all there is to adding video or audio to your web pages. Tomorrow we will look at the remaining pieces. An old friend, the `source` element, and the `track` element.

### Related reading

- [Video codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs)
- [Audio codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs)

Until then though, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
