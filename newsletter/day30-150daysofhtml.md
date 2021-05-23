# Day 30 - Embedded content - Images

Welcome to day 30!

Today we start to dig into the embdeded content elements. The elements we cover today are, `picture`, and `source`. The `picture` element and its related `source` element, introduced with HTML5, give us new powerful tools to improve the user experience from both a performance, and visual perspective. So let’s get dig into the details and see how you can use these new elements.

## `picture`

The `picture` element is merely a container element and does not display anything by itself. It is a container for zero or more `source` elements and one `img` element. So what is the difference between using the `picture` element or merely using an `img` element by itself? With the `img` element you specify a single source image that is displayed no matter the user’s environment and support for the specific image format. There are of course ways to manipulate the source image through JavaScript, but what if the browser could do the heavy lifting for us based on its knowledge of the environment and user preferences?

That is then where the `picture` element comes in. Instead of just our single `img` element, we can specify multiple source images along with some hints to the browser about when to use which source.

## `source`

As with `picture` the `source` element by itself does not represent anything. The `source` element can also be used with other elements such as the `video` and `audio` elements. Today we will focus on its use with the `picture` element. As hinted at above, we will use the `source` element to provide additional source options for the `img` element contained within the parent `picture` element. With that said, it is not the exclusive domain of the `source` element to enable multiple sources, this can also be achieved with just the `img` element. There are some differences though that will guide your choice in using just the `img` element or, using the `picture` element with `source` and `img`.

Attributes shared by the `source` element and the `img` element are:

- `srcset`
- `sizes`
- `width`
- `height`

Technically they also share the `src` attribute but it is only valid when `source` is used with either the `video` or `audio` element. the attributes unique to `source` are:

- `type`
- `media`

### `type`

The `type` attribute allows you to specify the type of media asset you are referencing with the `source` element. Why is this useful?

It used to be that we had only essentially two widely supported image formats on the web. Those being [GIF(Graphics Interchange Format)](https://en.wikipedia.org/wiki/GIF) and [JPEG(Joint Photographics Experts Group)](https://en.wikipedia.org/wiki/JPEG). Later on we also got support for the [PNG(Portable Network Graphics)](https://en.wikipedia.org/wiki/Portable_Network_Graphics) image format that is widely used on the web today.

Things have not stood still though and recently(roughly around 2018) [Webp](https://en.wikipedia.org/wiki/WebP) developed by Google was introduced. The latest addition to image formats on the web is [AVIF](<https://en.wikipedia.org/wiki/AV1#AV1_Image_File_Format_(AVIF)>) with [growing support across user agents](https://avif.io/).

With the `type` attribute we can take advantage of these new formats and offer users faster loading pages but, still provide fallbacks for those browsers that do not support the newer image formats.

```html
<picture>
  <source
    srcset="https://150daysofhtml.com/assets/picture-source-type.avif"
    type="image/avif"
  />
  <source
    srcset="https://150daysofhtml.com/assets/picture-source-type.webp"
    type="image/webp"
  />
  <img
    src="https://150daysofhtml.com/assets/picture-source-type.png"
    width="1000"
    height="667"
    alt="A beautiful sunset in the background with two surfers paddling into the surf in the foreground"
  />
</picture>
```

> Photo by [Trevor Gerzen](https://unsplash.com/@tgerz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/surfer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

When loading the below example in Chrome and look in the network panel of the developer tools you will see that Chrome loads the AVIF file format:

![AVIF file format shown to load in Chrome devtools network panel](../assets/day30/chrome-avif.png)

Opening the same example in Firefox demonstrates how it falls back to WebP format:

![WebP file format shown to load in Firefox devtools network panel](../assets/day30/firefox-webp.png)

As you will also see in the example, there is a significant difference in the file size of the various formats. As performance is a large part of the user experience and accessibility, this is a great tool to have in your aresenal.

- AVIF - 69kb
- Webp - 88kb
- PNG - 214kb

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYvZPgL)

### `media`

The other use case where you would choose `picture` over just `img` is when used with the `media` attribute. As with the `link` element, the `media` attribute can be used to specify a [media query](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries). The browser will then load the image whose media query most closely matches the current environment starting from the top and moving on until it reaches the `img` element.

```html
<picture>
  <!-- The below image and dimensions will be used up to a max viewport width of ~320px -->
  <source
    srcset="https://placekitten.com/g/300/300"
    media="screen and (max-width: 20em)"
    width="300"
    height="300"
  />
  <!-- The below image and dimensions will be used up to a max viewport width of ~1024px -->
  <source
    srcset="https://placekitten.com/g/400/500"
    media="screen and (max-width: 64em)"
    width="400"
    height="500"
  />
  <!-- The below image and dimensions will be used for viewports larger than ~1024px -->
  <img
    src="https://placekitten.com/g/1080/720"
    width="1080"
    height="720"
    alt="A random cute kitten"
  />
</picture>
```

When you open the example below also open up your browsers developer tools and switch it to responsive mode([Chrome How-To](https://developer.chrome.com/docs/devtools/device-mode/) - [Firefox How-To](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)). As you switch between small mobile (320px viewport size or smaller), tablet, and desktop, you will notice that differently sized images load. Not only are the images smaller on smaller viewports, but we also specify different aspects ratios. This is what is [commonly known as art direction](https://uxdesign.cc/how-art-direction-will-help-you-create-masterful-web-interfaces-cba8d3dab0d8) and is a common use case for the `picture` element.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/full/ExWKOLg)

To see the above example along with the source code, [use this link](https://codepen.io/schalkneethling/pen/ExWKOLg).

Before we move on to the `img` element, you might be saying, "Hold on, you said the `source` element does not represent anything visually but in the examples above it does?". Looking at the second example, what really happens is something like the following.

1. The browser encounters the `picture` element and looks for its first child element.
2. It finds the `source` element and starts to look at its attributes.
3. When it encounters the `media` attribute, it parses its value. Seeing that what we specified is a valid media query string, it executes it against the current environment.
4. Let’s assume it matched.
5. It now looks for its child `img` element.
6. It then replaces the `src` attribute value with the value from the `source` element that matched the environment. Seeing that we also specified a width and height, it also copies over those values and renders the `img` element. And walla! 🎉 😀

That then covers the majority of the most important aspects of these elements. We will encounter the `source` element again when we look at the `video` and `audio` elements.

### Related reading

- [Media formats - Image types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
- [Webponize - Convert images to Webp - macOS](https://webponize.org/)
- [AVIF](https://avif.io/)
- [WebP](https://developers.google.com/speed/webp)
- [CSS-Tricks' Complete guide to CSS media queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [What Were Server-Side Image Maps?](https://www.rickcarlino.com/2021/03/02/what-were-server-side-image-maps-html.html)

Until tomorrow, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
