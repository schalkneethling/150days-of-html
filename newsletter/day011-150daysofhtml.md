# Day 11

Welcome to Day 11!

Today we will be wrapping up the `link` and look at the following final attributes: `type`, `referrerpolicy`, `as`, `disabled`, `imagesrcset`, and `imagesizes`.

## `type`

We have encountered the `type` attribute when we discussed some of the other attributes already but, I thought I would expand a little on its use. This attribute, when used on the `link` element, provides a hint to the browser indicating the type of resource that is being linked to. For example:

```html
<link rel="stylesheet" href="main.css" type="text/css" media="screen" />
<link rel="prerender" href="next-page.html" type="text/html" />
<link rel="preload" href="menu.js" type="application/javascript" />
```

> It is important to note that the type specified, should be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)

For external resources, browsers can also use the `type` attribute to avoid fetching resources they do not support.

## `referrerpolicy`

You may have read about the potential security and privacy implications of using `target="_blank"` and the ways of resolving or avoiding the problem alltogether. Well, the `referrerpolicy` attribute brings the control of `noreferrer` to `link` elements with fine grained control over what is, and is not, sent to the destination.

The possible policies at the time of writing are as follow: "`no-referrer`", "`no-referrer-when-downgrade`", "`same-origin`", "`origin`", "`strict-origin`", "`origin-when-cross-origin`", "`strict-origin-when-cross-origin`", or "`unsafe-url`". Refer 🙃 to the [official documentation](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) for the most up-to-date information.

Let's look at two examples:

```html
<link
  rel="stylesheet"
  href="https://external.com/lib/animations.css"
  type="text/css"
  media="screen"
  referrerpolicy="no-referrer"
/>

<link
  rel="preload"
  href="https://unpkg.com/three"
  type="application/javascript"
  as="script"
  referrerpolicy="strict-origin"
/>
```

Assuming that the page that contains these elements are being served from `https://example.com/app.html` the following will be sent to the target destination:

1. As the name suggests, no referrer information(Referrer Header) will be sent to the destination at all
2. Will send a referrer with the value `https://example.com/`, but **only** if the destination is also HTTPS.

The default behavior of the browser is to always apply [`no-referrer-when-downgrade`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer-when-downgrade). The policies and their meaning are [defined in the Referrer Policy standard](https://w3c.github.io/webappsec-referrer-policy/).

## 🦓 `as`

The `as` attribute specifies the potential destination(i.e. resource type) for the preloaded resource. This attribute **must** be specified when preloading resources. You can also use this attribute with `modulepreload` but, the value **must** be of a script-like type. Script-like type? 🤔

Yup. As defined in the [Fetch standard documentation around destination types](https://fetch.spec.whatwg.org/#concept-request-destination), there are a couple of possible values that are script-like in nature: "`audioworklet`", "`paintworklet`", "`script`", "`serviceworker`", "`sharedworker`", or "`worker`".

```html
<link rel="modulepreload" href="module.mjs" as="script" />
<link rel="preload" href="main.css" as="style" />
<link
  rel="preload"
  href="open-sans.woff2"
  type="font/woff2"
  as="font"
  crossorigin
/>
<link
  rel="preload"
  href="open-sans.woff"
  type="font/woff"
  as="font"
  crossorigin
/>
```

## `disabled`

As mentioned when we discussed the `stylesheet` value of the `rel` attribute, there is a pretty common pattern used to lazy load CSS by specifying an invalid initial value for stylesheets you do not need to load immediately.

```html
<link rel="await" href="later.css" type="text/css" media="screen" />
```

You could then use a little bit of JavaScript to "correct" the value of `rel` and trigger a load, parse and execute:

```javascript
(function () {
  "use strict";

  const lazyStylesheet = document.querySelector("[rel='await']");
  lazyStylesheet.setAttribute("rel", "stylesheet");
})();
```

Turns out there is a standard attribute that can be used for this exact purpose! 🤯

```html
<link
  rel="stylesheet"
  href="later.css"
  type="text/css"
  media="screen"
  disabled
/>
```

You can then tweak the above JavaScript to look for all of these `link` elements and remove the `disabled` attribute, triggering a fetch, and apply of the stylesheet 🎉

```javascript
(function () {
  "use strict";

  const lazyStylesheet = document.querySelector("link[disabled]");
  setTimeout(() => {
    lazyStylesheet.removeAttribute("disabled");
  }, 5000);
})();
```

## `imagesrcset` and `imagesizes`

In conclusion, we look at the `imagesrcset` and `imagesizes` attributes. These attributes are used in conjunction with `preload` and the `as` attribute of type `image`. One of the aspects of HTML we will look at when we get to the `img` and `picture` elements is the concept of [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). These two attributes work in tandem with these elements allowing you to preload the appropriate image sources based on your defined `sizes`. For example:

```html
<link
  rel="preload"
  imagesrcset="./media/dino-200.png 200w, ./media/dino-400.png 400w, ./media/dino-800.png 800w"
  imagesizes="(max-width: 480px) 200px, (max-width: 1024px) 400px, 800px"
  as="image"
/>
```

Later in the `body` of your HTML you will then have the following:

```html
<img
  srcset="
    ./media/dino-200.png 200w,
    ./media/dino-400.png 400w,
    ./media/dino-800.png 800w
  "
  sizes="(max-width: 480px) 200px, (max-width: 768px) 400px, 800px"
  alt=""
/>
```

The combination of the two can be particularly useful for loading assets that are crucial to the user experience. Using this merely for decorative images is probably not the best use case.

That's a wrap 🎁 Next up, the `meta` element. Until then, keep making the web awesome! o/\o

### Related Reading

- [`target="_blank"` and `rel="noopener"`](https://mathiasbynens.github.io/rel-noopener/)
- [Referrer Policy on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
- [Referrer Policy Standard](https://w3c.github.io/webappsec-referrer-policy/)
- [Responsive Images tutorial on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

~..~
Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
