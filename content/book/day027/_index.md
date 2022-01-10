---
title: Chapter 27 | Ruby? Say what now?
keywords: html, html standard, how-to, learn html
description: Elements for annotating or controlling how the text for different languages and writing directions are rendered.
menu:
  book:
    weight: 27
---

# Chapter 27 | Ruby? Say what now?

Continuing with text-level semantics, in this chapter we look at a couple of elements that are concerned with either annotating or controlling how the text for different languages and writing directions are rendered.

## `ruby`, `rp`, and `rt`

These elements need to be discussed as a group, as neither can be demonstrated in isolation. The `ruby` element is used to represent small annotations. The most common use is to show the pronunciation of [East Asian characters](https://en.wikipedia.org/wiki/CJK_characters), but can be used to annotate other kinds of text as well. Each `ruby` element consists of the base character and its associated annotation.

For example:

```html
<p>In Chinese</p>
<ruby> 漢 <rp>(</rp><rt>Hàn</rt><rp>)</rp> </ruby>
<ruby> 字 <rp>(</rp><rt>zì</rt><rp>)</rp> </ruby>

<p>In Japanese</p>
<ruby> 漢 <rp>(</rp><rt>kan</rt><rp>)</rp> </ruby>
<ruby> 字 <rp>(</rp><rt>ji</rt><rp>)</rp> </ruby>
```

Let’s look at the above in a bit more detail. First, each base character and its associated annotation is wrapped by the `ruby` element as previously mentioned. The `rp`(HTML Ruby Fallback Parenthesis) element is used, as the name suggests, to provide fallback parenthesis for browsers that do not support ruby annotations using the `ruby` element.

> NOTE: According to the [browser support data on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby#browser_compatibility), support for all three of these elements is very good but, it is still common to use the `rp` element.

So essentially, if a browser supports ruby annotations using the `ruby` element, the parenthesis inside the `rp` elements will not be rendered. If a browser does not support ruby annotations, the above would be rendered as follows:

```text
In Chinese
漢 (Hàn) 字 (zì)

In Japanese
漢 (kan) 字 (ji)
```

The `rt`(Ruby text) element is used to wrap the ruby text component of the ruby annotation and is most commonly rendered above the associated character(although you have [some control over it via CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Ruby)).

> NOTE: In the below example you will notice that I set the base font size to 200%. That is because `ruby` is rendered at about half the size of the main text and so, with a common default body font size of 16px, the `ruby` text would render at roughly 8px, making it very hard to read. Coincidentally, the name "ruby" [originated from British typography where type with a height 5.5 points was used for interlinear annotations in printed documents](https://en.wikipedia.org/wiki/Ruby_character#History).

As mentioned above, you could also use this to annotate other types of text, for example:

```html
<ruby> W <rp>(</rp><rt>World</rt><rp>)</rp> </ruby>
<ruby> W <rp>(</rp><rt>Wide</rt><rp>)</rp> </ruby>
<ruby> W <rp>(</rp><rt>Web</rt><rp>)</rp> </ruby>
```

### Live Codepen - Common and nt ot so common use of `ruby`, `rp`, and `rt`

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/4687dacc1dd0b282d63d36d69e356e4c?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Common and nt ot so common use of ruby, rp, and rt live example" >}}

## `bdi` and `bdo`

While one could discuss these elements in isolation, demonstrating the difference is a bit clearer when discussed together. Let’s look at an example and then discuss the details.

```html
<!-- 
    bdi - This document has dir="ltr" set on the html element
    <html dir="ltr">
-->
<ul>
  <li>
    <p>User <bdo dir="rtl">إيان</bdo>: 3 posts.</p>
  </li>
  <li>
    <p>User <bdo dir="rtl">John</bdo>: 3 posts.</p>
  </li>
  <li>
    <p>User <bdo dir="ltr">إيان</bdo>: 3 posts.</p>
  </li>
  <li>
    <p>User <bdi>إيان</bdi>: 3 posts.</p>
  </li>
  <li>
    <p>User <bdi>John</bdi>: 3 posts.</p>
  </li>
</ul>
```

If you look at the live example below you will notice the following about the five examples:

1. In this instance, the Arabic word is rendered correctly as we specify `rtl` but, it also affects the overall sentence which renders incorrectly.
2. Here we are forcing the browser to incorrectly render the name "John" and, it also affects the overall sentence rendering.
3. Here everything seems to render correctly but, if you look closely you will notice that the Arabic name is rendered incorrectly.
4. Here and in example five, the individual word, as well as the overall sentence, renders correctly.

### Live Codesandbox - Example using The bdi and bdo elements

{{< iframe iframesrc="https://codesandbox.io/embed/elegant-field-bdjtm?fontsize=14&hidenavigation=1&theme=dark" width="100%" height="500" scrolling="no" class="code-frame" title="The bdi and bdo elements live example" >}}

The main differences then between the `bdi` and `bdo` elements are:

1. `bdi` sets the value of its `dir` attribute to "auto" allowing the browser to determine the appropriate direction and, it also isolates it from its surrounding content
2. The `bdo` element **requires** you to set the `dir` attribute explicitly but, it does not isolate it from its surrounding content.

What this boils down to is that when the content can be either RTL or LTR and you have no way of knowing beforehand, wrap the content in the `bdi` element. If you know or wish to override the default rendering of a piece of content, wrap it with the `bdo` element and explicitly set the direction using the `dir` attribute.

While perhaps not used a lot, it is most definitely important to be aware of these elements as they can directly or indirectly affect the accessibility of content on multilingual sites or sites that contain user-generated content. Definitely worth understanding and having in your toolbelt. 🛠

### Related reading

- [Ruby character](https://en.wikipedia.org/wiki/Ruby_character)
