# Day 34 - Frame or embed it

Welcome to day 34!

Contuing to look at ways of embedding content into HTML we today look some elements that are most often used to embed content from external sources. Today we’ll discuss the `iframe`, `emebed`, `object`, and `params` elements.

## `emebed`, `object`, and `params`

Before we look at the `iframe` element, we will take a moment to look at `emebed`, `object`, and `params`. While these elements are still part of the HTML5 specification, their use is almost wholeheartedly discouraged. As mention when we looked at the `video` and `audio` elements, there was a time when browser did not provide a native way to embed rich media content into web pages.

Well, not as simply and succinctly as with `video` and `audio`. The same goes for what we now commonly call rich internet applications(RIA). In those days these capabilities was provided through plugins such as [Java(specifically Applets)](<https://en.wikipedia.org/wiki/Java_(programming_language)#Applet>), the [Adobe Flash player](https://en.wikipedia.org/wiki/Adobe_Flash_Player), and [Microsft’s Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight). It also used to be the way you would embed a Youtube video into a webpage for example.

When using these technologies, the way to embed the plugin into a page was via either the `object` or `embed` elements. There was many challenges with these plugins over the years especially with [regards to security](https://helpx.adobe.com/security/products/flash-player.html). That is why, for the longest time, [Mozilla even had a plugincheck page](https://wiki.mozilla.org/Websites/Plugincheck)(I used to work on this page myself 🙃) you could use to check whether your installed plugins was up todate, and whether there was any known vulnerabilities.

That is a long way of saying, you should not use these and encourage owners of projects you work on to use modern, standards based solutions instead should you encounter these in the wild. For the sake of completeness, I will show two examples using these elements.

You can for example embed video using the `embed` element in much the same way as you would using the `video` element but, without getting any of the controls and capabilities the `video` element offer you.

```html
<embed
  type="video/mp4"
  src="/media/flower.mp4"
  width="250"
  height="200"
  title="A timelapse video of a flower bud opening it’s petals"
/>
```

Using the `object` element you could embded a Flash application and pass some parameters to the application using the `params` element.

```html
<object data="app.swf" type="application/x-shockwave-flash">
  <param name="username" value="secret" />
</object>
```

That then is where we will end the discussions of these elements and move onto the `iframe` element.

## `iframe`

Much like the `img` element, the `iframe` element has evolved quite a bit from being just a container for embedding content from an external URL, although that is still a very valid and common use case.

### `src`

As just mentioned, at the most basic level the `iframe` is a means to load content from an external resource into a "frame" in the current web page. For example:

```html
<iframe
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
></iframe>
```

[See the live example on Codepen.io.](https://codepen.io/schalkneethling/pen/eYvrJOb)

### `width` and `height`

When you load the above example you will immediately notice a problem similar to that which we saw when we looked at the `video` element. In this case, the `iframe` collapses to the browser default `width` and `height` of 300px by 150px. While we can control the size of the `iframe` via [Cascasing Style Sheets(CSS)](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS) we can also set the width and height via the `width` and `height` attributes. This can be useful to act as a base for those instances when the CSS fails to load or is blocked.

```html
<iframe
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  width="100%"
  height="445"
></iframe>
```

[See the live example on Codepen.io.](https://codepen.io/schalkneethling/pen/eYvrJOb)

With the dimensions set, the content of the `iframe` is now fully vissible and usable.

### `title`

Before we continue with the unique attributes of the `iframe` element, we need to take a quick look at one of the global attributes that can be used with the `iframe`. When you have an `iframe` element on a page, it is critical that you identify what the contents of each `iframe` represent by using the `title` attribute. While this is not visually represented, it is surfaced to users of assistive technologies and acts as an overview of the content they can expect to find once they step into the content of the `iframe`. By providing this information you make it easy for these users to quickly jump to the content they are interested in without having to step into an iframe and tab through its contents to determine whether it is something they might be interested in.

```html
<iframe
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/video.html"
  title="Interactive example from MDN Web Docs containg a interactive code editor and output area showing an example use of the video element"
></iframe>

<iframe
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

## `srcdoc`

While the `src` attributes points to a URL, the value of `srcdoc` would be the actual HTML that is to be rendered inside the `iframe`. For example:

```html
<iframe
  height="150"
  srcdoc="<h1>Hello srcdoc!</h1><p>This is specified using the <code>srcdoc</code> attribute and not via the <code>src</code> element. <strong>Note: This is plain HTML and can inlcude <a href=&quot;https://html.spec.whatwg.org/#attr-iframe-srcdoc&quot;>links</a> but you have to escape the quotes for example.</strong>"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

> NOTE: While [browser support for `srcdoc` is good](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#browser_compatibility) it is not supported by all browsers. One option is to specify both the `src` and `srcdoc` attribute with `src` being used as to present fallback content when `srcdoc` is not supported.

[See the live example on Codepen.io.](https://codepen.io/schalkneethling/pen/eYvrJOb)

## `name`

the `name` attribute is used to specify a valid [browsing context name](https://html.spec.whatwg.org/#valid-browsing-context-name) for the `iframe`. With that said, it could technically be almost any string of text. This feature becomes interesting especially when used with a string that is not one of the common names such as `_blank`, `_self`, etc. In fact, with those, I have not really seen a valid use case. With a custom name however, you can do something interesting 😀

Let’s say we have the following `iframe` in our webpage.

```html
<h2>Wikipedia viewer</h2>
<iframe 
  name="wikipedia"
  title="Dynamic content loaded from wikipedia"
  width="500"
  height="400"
></iframe>
```

All by itself it is complete useless really 🙃 Add the following though, and things get interesting:

```html
<h1>Wikipedia browser</h1>

<p>See information about the movie <a href="https://en.m.wikipedia.org/wiki/Ferris_Bueller%27s_Day_Off" target="wikipedia">Ferris Bueller's Day Off</a> on Wikipedia.</p>
```

[See the live example on Codepen.io.](https://codepen.io/schalkneethling/pen/xxqjZWZ)

When you open up the above, go ahead and click the link in the paragraph.

**What!?**

What just happened? In short, the anchor element specifies a URL to load but, it then specifies the `target` into which the hyperlink should be loaded. Instead of using something like `_blank` to open it in a new tab, it specifies the `name` of the `iframe`. As a result, the URL is loaded inside the `iframe` on the same page. Pretty neat, right?

> NOTE: A lot of sites does not allow itself to be loaded into an iframe so, while the above is interesting and can be used in some ctreative ways, it is important to be aware of this contraint that you do not always have control over.

## `sandbox`

The `sandbox` attribute is one of the newer attributes of the `iframe` element and is all about securing the context in which the contents of the `iframe` executes. There is a total of [12 valid tokens that can be specified for the `sanbox` attribute](https://html.spec.whatwg.org/#attr-iframe-sandbox) to allow various features inside the `iframe`. Below follows the list with a short description of each:

- `allow-forms` - Allows form submissions
- `allow-modals` - This refers specificly to the following native browser modals:
    - window.alert()
    - window.confirm()
    - window.print()
    - window.prompt()
    - the `beforeunload` event
- `allow-orientation-lock` - Prevents the iframe from setting screen orientation lock on mobile devices.
- `allow-pointer-lock` - Enables the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API)
- `allow-popups` - Allows the `iframe` to open a new browsing context(i.e. new window or tab) using for example the `_blank` value for the `target` attribute or, by using the `window.open` function.
- `allow-popups-to-escape-sandbox` - When set, new browsing contexts(i.e. new window or tab) will not inherit the restrictions imposed on the origin `iframe`
- `allow-presentation` - Enables the [Presentation API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)
- `allow-same-origin` - When set, the content of the `iframe` is still sandboxed but, the parent can access the DOM content of the `iframe`. Secondly, this allows you to load third-party content inside the `iframe`  and have the content be constrained by the sandbox rules but, not prevent the embedded page from communicating back to its originating site or using the storage APIs.
- `allow-scripts` - Allow script execution within the sanboxed `iframe`
- `allow-top-navigation` - If set, allows the contents of the `iframe` to set the document location of its parent document or even close its parent browsing context.
- `allow-top-navigation-by-user-activation`: Essentially the same as the above, but only if the action was initiated by the user by, for example, clicking a link inside the `iframe`.
- `allow-downloads` - Allows the `iframe` to initiate a download event.

```html
<iframe 
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
  sandbox="allow-scripts"
></iframe>
```

> NOTE: Once the `sandbox` attribute is set, only those features that are specified are allowed, everything else is disabled.

You can therefore completely sandbox an `iframe` by simply setting the `sandbox` attribute as if it was a boolean attribute:

```html
<iframe 
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
  sandbox
></iframe>
```

[See the live example on Codepen.io.](https://codepen.io/schalkneethling/full/eYvrJOb)

## `allow`

While this might sound similar to the above, and it is to some extent, this deals with a different set of features that can be enabled. This attribute deals with what is known as [policy controlled features](https://w3c.github.io/webappsec-permissions-policy/#features)([specifically container policies](https://w3c.github.io/webappsec-permissions-policy/#container-policies)) which is a relatively [large and growing list](https://github.com/w3c/webappsec-permissions-policy/blob/main/features.md). Some example are `geolocation`, `ambient-light-sensor`, `autoplay`, `microphone`, etc. While you will see that `fullscreen` is part of this list, with an `iframe` this is controlled separately via a dedicated attribute.

The most basic example is:

```html
<iframe 
  allow="geolocation"
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

The can however also restrict access to a specific origin, for example:

```html
<iframe 
  allow="geolocation https://interactive-examples.mdn.mozilla.net"
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

You can also specify more than one feature using a semicolon separated list as well as set different origin permissions for each:

```html
<iframe 
  allow="geolocation https://interactive-examples.mdn.mozilla.net, camera 'none'"
  height="445"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

The above will allow `geolocation` access, but only if the source matched the https://interactive-examples.mdn.mozilla.net origin. It then also completely disables camera access no matter the origin.

If you grab the embed code for a Youtube video you will also notice that they use the `allow` attribute, for example:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/sKbrycmEGjU"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
```

> NOTE: Notice that they are using a deprecated attribute that I am not discussing here. The attribute being the [`frameborder` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-frameborder).

## `allowfullscreen`

As mentioned earlier, you control access to the `fullscreen` feature via a separate `iframe` attribute called `allowfullscreen`. This is a boolean attribute so, it is allowed when present and disabled when not.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/sKbrycmEGjU"
  title="YouTube video player"
  allowfullscreen></iframe>
```

## `referrerpolicy`

We have encountered this or a similar attribute before. As with the other cases, this attribute is used to set a referrer policy to be applied when fetch request are initiated. Below is the list of possible values for ease of reference. For a more detailed explanation of each policy, [please see the specification here](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy).

- `no-referrer`
- `no-referrer-when-downgrade`
- `same-origin`
- `origin`
- `strict-origin`
- `origin-when-cross-origin`
- `strict-origin-when-cross-origin`
- `unsafe-url`

For example:

```html
<iframe
  height="445"
  referrerpolicy="cross-origin"
  src="https://www.youtube-nocookie.com/embed/sKbrycmEGjU"
  title="YouTube video player"
  width="100%"
></iframe>
```

## `loading`

We first encountered this attribute when we discussed the `img` element. In terms of use and functionality there is no difference between the two. When an `iframe` is below the fold and has `loading="lazy"` set, the user agent will deprioritise loading of the `iframe` content until later which can be beneficial for the overall page performance.

```html
<iframe
  allowfullscreen
  height="445"
  loading="lazy"
  referrerpolicy="cross-origin"
  src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/iframe.html"
  title="iframe element interactive example from MDN Web Docs containg a interactive code editor and output area showing a map of Greenwich Park"
  width="100%"
></iframe>
```

That is all for today. Tomorrow we will look at `map`, `area`, MathML, and SVG which will conclude our look at the embedded content elements.

### Related Reading

- [Google Chrome 88 released with no Flash support, bringing an end to an era](https://www.zdnet.com/article/google-chrome-88-released-with-no-flash-bringing-an-end-to-an-era/)
- [Why do Java, Silverlight, Adobe Acrobat and other plugins no longer work?](https://support.mozilla.org/en-US/kb/npapi-plugins)
- [Using feature policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#the_iframe_allow_attribute)
- [Permission policy specification](https://w3c.github.io/webappsec-permissions-policy/)
