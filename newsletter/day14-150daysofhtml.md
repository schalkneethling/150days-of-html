# Day 14

Welcome to Day 14!

As mentioned yesterday, today we will look at a new element, the `style` element. Earlier when we discussed the `link` element we covered linking an external stylesheet to our document using something like:

```html
<link rel="stylesheet" type="text/css" href="css/main.css" media="screen" />
```

While it is best practice to use external style sheets in order to ensure a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns), there are instances where the `style` element can be very useful indeed. One of the problems with loading a style sheet via the `link` element is that it is a [blocking operation](https://html.spec.whatwg.org/#interactions-of-styling-and-scripting). This means that the browsers parse and execute algorithm needs to stop and wait for the CSS file to be fetched, and parsed before it can proceed with the rest of the document.

Depending on the size of the external style sheet you are fetching this can have a perceptible negative impact on performance for end users. Because of this, there are a couple of techniques that are commonly used to avoid this problem. One is to split large style sheets up into multiple smaller chunks and loading them individually(this works particularly well with [HTTP2](https://en.wikipedia.org/wiki/HTTP/2)). Another is [lazy loading some of the CSS](https://www.filamentgroup.com/lab/async-css.html), and a third is to [inline critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/). More often than not, it is a combination of all three of these that results in the best outcome.

It is with inlining critical CSS where the `style` element then comes into play. As with the `link` element, you can use the `media` attribute on the `style` element. As with the `link` element, the `media` attribute supports the standard keyword token or, any valid media query. Unlike the `link` element, the `style` element does not require that you specify the type via the `type` attribute. If the `type` attribute is present, its value should be either an empty string, or `text/css`. Any other value will cause the browser to abort parsing and execution of the contents of the `style` element.

```html
<style media="screen and (max-width:47.9385em)">
	.hero {
	  display: none;
	}
</style>

<style media="screen">
  .hero {
    margin: 40px 0;
    background-color: #ffdd00;
    width: 100%;
    height: auto;
    z-index: 9;
  }
</style>
```

But be careful, just because the `style` element itself is not blocking, that is not the whole story 😩 Depending on what sub-resources are referenced by the CSS inside the style block, and the user agent, it might still be blocking. Generally, it should only be blocking if the CSS inside the `style` element loads other external style sheets via the `@import` declaration. However, some user agents consider [assets such as background images and web fonts critical sub-resources](https://html.spec.whatwg.org/#critical-subresources) as well.

With all of that said, the `style` element can be a integral piece in the performance puzzle fo your website. That then concludes the `head` of our HTML documents. From tomorrow, we jump into the `body` 😁

Until then, keep making the web awesome! ☕️

### Related Reading

- [Modern Asynchronous CSS Loading](https://www.filamentgroup.com/lab/async-css.html)
- [Rendering performance](https://developers.google.com/web/fundamentals/performance/rendering)
- [CSS Critical Subresource Tests](https://github.com/web-platform-tests/wpt/pull/5525)

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)