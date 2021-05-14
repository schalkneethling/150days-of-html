# Day 30 - Embedded content - Images

Welcome to day 30!

Today we start to dig into the embdeded content elements. The elements we cover today are, `picture`, `source`, and `img`. Together these three elements provides a way to display visual content to our users. Though you only _need_ the `img` element, the `picture` element, introduced with HTML5, and its related `source` element give us additional control over which image is shown to our users.

## `picture`

The `picture` element is merely a container element and does not display anything by itself. It is a container for zero or more `source` elements and one `img` element. So what is the difference between using the `picture` element or merely using an `img` element by itself? With the `img` element you specify a single source image that is displayed no matter the user’s environment and support for the specific image format. There are of course ways to manipulate the source image through JavaScript, but what if the browser could do the heavy lifting for us based on its knowledge of the environment and user preferences?

That is then where the `picture` element comes in. Instead of just our single `img` element, we can specify multiple source images along with some hints to the browser about when to use which source.

## `source`

As with `picture` the `source` element by itself does not represent anything. The `source` element can also be used with other elements such as the `video` and `audio` elements. Today we will focus on its use with the `picture` element. As hinted at above, we will use the `source` element to provide additional source options for the `img` element contained within the parent `picture` element. With that said, it is not the exclusive domain of the `source` element to enable multiple sources, this can also be achieved with just the `img` element. There are some differences though that will guide your choice in using just the `img` element or, using the `picture` element with `source` and `img`.

Attributes shared by the `source` element and the `img` element are:

- srcset
- sizes
- width
- height

Technically they also share the `src` attribute but it is only valid when `source` is used with either the `video` or `audio` element. the attributes unique to `source` are:

- type
- media

### `type`

The `type` attribute allows you to specify the type of media asset you are referencing with the `source` element. Why is this useful?

It used to be that we had only essentially two widely supported image formats on the web. Those being [GIF(Graphics Interchange Format)](https://en.wikipedia.org/wiki/GIF) and [JPEG(Joint Photographics Experts Group)](https://en.wikipedia.org/wiki/JPEG). Later on we also got support for the [PNG(Portable Network Graphics)](https://en.wikipedia.org/wiki/Portable_Network_Graphics) image format that is widely used on the web today.

Things have not stood still though and recently(roughly around 2018) [Webp](https://en.wikipedia.org/wiki/WebP) developed by Google was introduced. The latest addition to image formats on the web is [AVIF](<https://en.wikipedia.org/wiki/AV1#AV1_Image_File_Format_(AVIF)>) with [growing support across user agents](https://avif.io/).

With the `type` attribute we can then take advantage of these new formats and offer users faster loading pages but, still provide fallbacks for those browsers that do not support the newer image formats.

```html
<picture>
  <source
    srcset="https://150daysofhtml.com/assets/picture-source-type.webp"
    type=""
  />
  <source
    srcset="https://150daysofhtml.com/assets/picture-source-type.avif"
    type=""
  />
  <img
    src="https://150daysofhtml.com/assets/picture-source-type.png"
    width="1000"
    height="667"
    alt="A beautiful sunset in the background with two surfers paddling into the surf in the foreground"
  />
</picture>
```
