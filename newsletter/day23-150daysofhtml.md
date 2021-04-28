# Day 23

Welcome to day 23!

Today we start our look at the text-level semantic elements. Today is exclusively focused on the element that makes the web, the web. The anchor(`a`) element.

## `a` - The anchor element

This is the element that makes the web the web. It is what allows us to link all the documents, websites, pages and applications together. So simple and yet so powerful. The web would not be what it is without this element. Besides the [global attributes](https://html.spec.whatwg.org/#global-attributes), the anchor element has a couple attributes that are of interest.

### `href`

This is the attribute we use to specify where the user agent will navigate when the anchor element is activated. This should be a valid URL, or fragment identifier in the current document. If the attribute is present the anchor represents a hyperlink labeled by its content, if not present, the anchor element represents a placeholder consisting only of its contents.

```html
<a href="https://150daysofhtml.com">150daysofhtml.com</a>
<a>150daysofhtml.com</a>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/RwKOPyZ)

### `target`

The `target` attribute sets the browsing context to use when the anchor element is activated. The value needs to be one of `_blank`, `_parent`, or `_top`.

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

While `_top` and `_parent` does have their use cases, the most used of the browser contexts is the `_blank` value. This will open the link in a new tab, unless the user's browser is configures to always open in a new window.

```html
<a href="https://150daysofhtml.com" target="_blank">150daysofhtml.com</a>
```

> NOTE: When using the `_blank` keyword on an anchor element is is best practise to also specify `rel="noopener"` for security reasons. See the [original article by Mathias Bynens for the details](https://mathiasbynens.github.io/rel-noopener/).

> NOTE: After a [specification change](https://github.com/whatwg/html/issues/4078) most modern browsers no implicitly set `rel="noopener"` when using `target="_blank"`

### `download`

The download attribute instructs the browser to download the destination specified by the `href` attribute instead of navigating to it. The `download` attribute can be specified by itself, as a boolean attribute, or with a value. If a value is specified, it will be used as the filename(not file location i.e. slashes and back-slashes will be replaced by underscores) of the asset being downloaded.

```html
<a href="installation-instruction-for-model-3.pdf" download
  >Download instllation instructions</a
>
<a href="installation-instruction-for-model-3.pdf" download="installation.pdf"
  >Download instllation instructions</a
>
```

> NOTE: The download attribute only applies for sources that are of the same origin.

### `ping`

### Related reading

- [Additional reading regarding the `download` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download)
