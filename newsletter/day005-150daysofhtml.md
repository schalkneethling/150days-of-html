# Day 5

Welcome to Day 5!

Today we are going to start digging into a new type of link, the `link` element. I say, start digging into because, even though you may know it largely for linking stylesheets, turns out there is a **lot** more to this element. As such, I will not attempt to cover everything in one day, but instead break it down over a couple of days.

The `link` element all by itself does not do much. In fact, it does not do anything really 😸 The power of this element comes from its various attributes.

## href

The `href` attribute is the core of this element. It is required, needs to contain a valid URL and as such cannot be empty. As mentioned before, the most commonly known use case is linking an external stylesheet, for example:

```html
<link href="style/main.css" />
```

### crossorigin

A lesser known but important attribute is the `crossorigin` attribute. This attribute is used, as the name suggests, when linking to cross-origin assets. More specifically, when `preloading` assets cross-origin. For example, on the domain `example.com` you may want to preload some JavaScript from `widgets.com`

```html
<link rel="preload" href="https://widgets.com/widget/tabs.js" />
```

The above request will be blocked by the browser and as a result fail to load. If you have [CORS(**C**ross-**O**rigin **R**esource **S**haring)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) correctly setup, you can resolve the problem by using the `crossorigin` attribute, for example:

``` html
<link rel="preload" href="https://widgets.com/widget/tabs.js" crossorigin />
```

The above will initiate an anonymous cross-origin fetch. In other words, it will not pass along any credentials such as a cookie, or HTTP basic authentication. Depending on the requirements of your CORS setup the above might be sufficient. If however your endpoint does require credential, you can specify this as follows:

```html
<link rel="preload" href="https://widgets.com/widget/tabs.js" crossorigin="use-credentials" />
```

You will have noticed the use of another `link` attribute, `rel`. There is a lot to cover with regard to `rel` itself, and preload specifically so, I will defer that for another day. While we are talking about preloading and cross-origin though, there is a little gotcha to be aware of with regard to preloading fonts. 🦄

When preloading fonts, you always have to specify the `crossorigin` attribute whether the font is being loaded cross-origin or not. This is because of the [font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements) as defined in the CSS font specification. And now you know 🙃

### media

In the past this attribute has mainly been used to link separate stylesheets for display and print:

```html
<link rel="stylesheet" href="screen.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```

It is also common to use the `@media print` media query in your stylesheet to specify custom styling for printed output. There is benefit to separating these rules into a separate stylesheet and link it with a print media attribute. Why? Turns out, if you do this and load a webpage using your browser for example, the browser will mark the stylesheet as low priority in terms of downloading and parsing and, when it is downloaded, it will do so in a non-blocking manner. 🎉

Here is the thing though. The `media` attribute is even more powerful than that. Beside the commonly known values `all`, `screen` and `print`(there are also around [8 more, but these have been deprecated](https://drafts.csswg.org/mediaqueries/#media-types)), the `media` attribute supports any valid media query! Yes, you read that correctly. This means you can define and apply a stylesheet specifically for tablet devices, for example:

```html
<link rel="stylesheet" href="tablet.css" media="screen and (max-width:63.9385em)" />
```

Perhaps even another specifically for mobile devices:

```html
<link rel="stylesheet" href="mobile.css" media="screen and (max-width:47.9385em)" />
```

One important aspect to note here is the use of a `max-width` media query. If you are used to following a mobile first approach when implementing your front-end(good on ya for doing that 👍), you probably make use of the `min-width` media queries. If you used `min-width` in this instance though you will get unexpected results, for example:

```html
<link rel="stylesheet" href="base.css" media="screen" />
<link rel="stylesheet" href="tablet.css" media="screen and (min-width:63.9385em)" />
<link rel="stylesheet" href="mobile.css" media="screen and (min-width:47.9385em)" />
```

In this case the browser will only apply the stylesheet if its media query matches the current environment. What you will notice with the above is that even on desktop viewport sizes the mobile stylesheet will be applied. 😮 This is because all three media queries matches the environment. The other surprising result you will encounter is that on a mobile viewport size, only `base.css` is applied(double 😮😮).

Using `max-width` will resolve the problem and apply the relevant, and _only_ the relevant, stylesheet for the matched media query. As such, this is not a candidate for a mobile first implementation strategy as the stylesheets are not applied in an additive manner i.e. apply mobile on mobile, mobile _and_ tablet on tablet, etc.

This can be useful in cases where you have CSS that is only ever applicable to a specific viewport. In so doing you free up your browser to focus on downloading and parsing CSS that is relevant for the immediate environment which could lead to additional performance gains.

That is a lot to chew on, and so I will end it here for today. Tomorrow we will dig some more into the `link` element and all of its various attributes. Did you learn something new and useful? Did I miss something to get something wrong? Let me know by simply replying to this email. 🙏

### Related Reading

- [CORS on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Media Queries Level 4](https://drafts.csswg.org/mediaqueries/)
- [Avoid render blocking CSS](https://web.dev/render-blocking-resources/#how-to-eliminate-render-blocking-stylesheets)

Until tomorrow, keep making the web awesome! o/\o

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)