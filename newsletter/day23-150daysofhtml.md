# Day 23

Welcome to day 23!

Today we start our look at the text-level semantic elements. Today is exclusively focused on the element that makes the web, the web. The anchor(`a`) element.

## `a` - The anchor element

This is the element that makes the web the web. It is what allows us to link all the documents, websites, pages, and applications together. So simple and yet so powerful. The web would not be what it is without this element. Besides the [global attributes](https://html.spec.whatwg.org/#global-attributes), the anchor element has a couple of attributes that are of interest.

### `href`

This is the attribute we use to specify where the user agent will navigate when the anchor element is activated. This should be a valid URL or fragment identifier in the current document. If the attribute is present the anchor represents a [hyperlink](https://html.spec.whatwg.org/#hyperlink) labeled by its content, if not present, the anchor element represents a placeholder consisting only of its contents.

```html
<a href="https://150daysofhtml.com">150daysofhtml.com</a>
<a>150daysofhtml.com</a>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/RwKOPyZ)

### `target`

The `target` attribute sets the browsing context to use when the hyperlink is activated. The value needs to be one of `_blank`, `_parent`, or `_top`.

> NOTE: For a [detailed list see the documentation](https://html.spec.whatwg.org/#valid-browsing-context-name-or-keyword).

```html
<a href="https://150daysofhtml.com">150daysofhtml.com</a>
<a>150daysofhtml.com</a>

<p>
  Clicking the link in the below <code>iframe</code> will load the link into the
  top most browsing context which is the main window. i.e. will replace the
  curent Codepen URL
</p>

<iframe
  srcdoc="<a href='https://duckduckgo.com/' target='_top'>Go to DuckDuckGo using target _top</a>"
  width="200"
  height="200"
></iframe>

<a href="https://duckduckgo.com/" target="_parent"
  >Go to DuckDuckGo using target _parent</a
>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/RwKOPyZ)

While `_top` and `_parent` do have their use cases, the most used of the browser contexts is the `_blank` value. This will open the link in a new tab unless the user's browser is configured to always open in a new window.

```html
<a href="https://150daysofhtml.com" target="_blank">150daysofhtml.com</a>
```

> NOTE: When using the `_blank` keyword on an anchor element it is best practice to also specify `rel="noopener"` for security reasons. See the [original article by Mathias Bynens for the details](https://mathiasbynens.github.io/rel-noopener/).

> NOTE: After a [specification change](https://github.com/whatwg/html/issues/4078) most modern browsers now implicitly set `rel="noopener"` when using `target="_blank"`.

### `download`

The download attribute instructs the browser to download the destination specified by the `href` attribute instead of navigating to it. The `download` attribute can be specified by itself, as a boolean attribute, or with a value. If a value is specified, it will be used as the filename(not file location i.e. slashes and back-slashes will be replaced by underscores) of the asset being downloaded.

```html
<ul>
  <li><a href="./assets/rubberduck.png" download>Download a Rubberduck</a></li>
  <li>
    <a href="./assets/rubberduck.png" download="duck.png">Download a Duck</a>
  </li>
</ul>
```

> NOTE: The download attribute only works for sources that are of the same origin.

[See the live example](https://150daysofhtml.com/newsletter/day23/download-attribute.html)

### `ping`

The `ping` attribute is rather interesting. It essentially exposes a mechanism that allows you to collect statistics about how users use your site by sending "pings" to a specified URL, or URLs. This is limited to interaction on an `a` or `area` element.

This is the basic syntax:

```html
<a href="how-to-use-ping-attribute.html" ping="click-tracker page-view-tracker"
  >How to use the <code>ping</code> attribute</a
>
```

With the above in place, clicking on the link will do three things:

1. Send a ping to `click-tracker`
2. Send a ping to `page-view-tracker`
3. Fetch and load `how-to-use-ping-attribute.html`

Well, that is it on a basic level. Let’s dig a little deeper. If the `ping` URL’s scheme is not an HTTP(S) scheme, the browser will do nothing. A user can also express a preference for pings to be disallowed in which case the user agent _should_ do nothing.

> NOTE: Currently all [browsers that support the `ping` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#browser_compatibility)(essentially all but Internet Explorer) have pings enabled with seemingly [no way to disable it](https://dev.to/madsstoumann/google-tracking-and-the-ping-attribute-41d5). The odd one out is Firefox. In Firefox it is currently disabled by default and needs to be enabled via a specific flag.

If the above conditionals are all met, the user agent will make a new request with the URL, or the first URL in the list, using the [HTTP POST method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST). If the URL of the document that contains the hyperlink and the URL of the `ping` is of the same origin, the browser will proceed to fetch the resource specified by the `href` attribute.

That is the basic "happy path". There are two other conditions though. If the origins are different, and the scheme of the document containing the hyperlink is not `HTTPS`, the request sent by the `PING` must include a `Ping-From` and `Ping-To` [HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers). `Ping-From` should contain the URL of the document that contains the hyperlink, and `Ping-To` should contain the URL of the target URL.

For example:

```html
<!-- Assume this is on a page at www.myblog.com -->
<a
  href="how-to-use-ping-attribute.html"
  ping="https://click-tracker.limo/click-tracker"
  >How to use the <code>ping</code> attribute</a
>
```

Should a user access `http://www.myblog.com` and click on the link, the `PING POST` request should have `Ping-From: http://www.myblog.com` and `Ping-To: http://www.myblog.com/how-to-use-ping-attribute.html` set as HTTP headers on the request. Now, if the origins _are_ different, but the scheme _is_ `HTTPS`, then the user agent should only set the `Ping-To` header. Pretty intense stuff 🙃 😱

I created a [small app you can use to play around with this here](https://github.com/schalkneethling/using-ping-attribute).

## `rel`

We have covered the `rel` attribute extensively when discussing its use on the `link` element so I will not go into too much depth here. Suffice it to say that the `rel` attribute, when used on the anchor element, indicates the relationship between the current document and the target location.

As mentioned earlier one use is to specify `noopener` and `noreferrer` when using the `target` attribute with a value of `_blank`. Another common use case is to indicate that the target location is external to the current document, for example.

```html
<!-- 
    Here we assume the document containing this hyperlink is on https://150daysofhtml.com/ 
-->
<a
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel"
  rel="external"
  >Read more about `rel` on MDN Web Docs</a
>
```

## `hreflang`

The `hreflang` attribute, as its name suggests, is used to indicate the language of the target document.

```html
<a href="https://fr.wikipedia.org/wiki/Tour_Eiffel" hreflang="fr"
  >Tour Eiffel</a
>
```

## `type`

The `type` attribute on the anchor element can be used to provide a hint to the browser as to the type of resource the hyperlink points to. The value of the attribute should be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#understanding-mime-types).

```html
<a
  href="https://insights.developer.mozilla.org/reports/pdf/MDN-Web-DNA-Report-2020.pdf"
  type="application/pdf"
  >MDN Web DNA Report 2020</a
>
```

## `referrerpolicy`

As the name suggests, this attribute is used to specify the [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/) to use when fetching the resource linked to. The value needs to be a [valid referrer-policy string](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy).

```html
<a
  href="https://insights.developer.mozilla.org/reports/pdf/MDN-Web-DNA-Report-2020.pdf"
  type="application/pdf"
  referrerpolicy="no-referrer"
  >MDN Web DNA Report 2020</a
>
```

The above instructs the browser to not send along the [`Referrer` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) when following the hyperlink.

> NOTE: From the HTML specification documentation: "The target, download, ping, rel, hreflang, type, and referrerpolicy attributes must be omitted if the href attribute is not present."

[See in its original context](https://html.spec.whatwg.org/#the-a-element)

And that covers the anchor element. Wow! Who knew there was so much to this seemingly simple backbone of the internet? You, that's who! 😁

I hope you found this interesting and insightful.

### Related reading

- [Additional reading regarding the `download` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download)
- [Busting frame busting: a study of clickjacking vulnerabilities at popular sites](https://seclab.stanford.edu/websec/framebusting/)

Until then, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
