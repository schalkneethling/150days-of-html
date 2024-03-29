---
title: Chapter 22 | figure and figcaption
keywords: html, html standard, how-to, learn html
description: In this chapter we cover the figure and figcaption grouping elements.
menu:
  book:
    weight: 22
---

# Chapter 22 | `figure` and `figcaption`

In this chapter we conclude our exploration of grouping elements by looking at the `figure` and `figcaption` elements.

## `figure`

The `figure` element is much like the `article` element in that it should be used as a container for content that is self-contained. The `figure` element has an implicit ARIA role of `figure`. While this is true, if the `figure` is used without a `figcaption` you can assign any ARIA role to the `figure` element. Again, if you find yourself wanting, or needing, to do that, perhaps a different element will be more appropriate.

One of the benefits of the `figure` role for users of assistive technologies is that the [ARIA specification](https://www.w3.org/TR/wai-aria-1.1/#figure) states that assistive technologies _should_ enable users to quickly navigate to figures. This means that screen readers, for example, will offer a means to jump to the various `figure` elements on the page without having to tab through all the content on the page.

Any [flow content](https://html.spec.whatwg.org/#flow-content-2) is allowed to be children of the `figure` element, but the element is most commonly used to contain graphical documents such as maps, graphs, images, code snippets, or example text. For example:

```html
<figure>
  <pre>
<code>
&lt;figure>
&lt;pre>
&lt;code>
    const example = "";
&lt;/code>
&lt;/pre>
&lt;/figure>
</code>
  </pre>
</figure>
```

Or for an image:

```html
<figure>
  <img
    src="https://placekitten.com/200/300"
    width="200"
    height="300"
    alt="A kitten or kittens that changes everytime you refresh the page"
  />
</figure>
```

### Live Codepen - The `figure` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/b8dbaadfde3e631adc40d297a899c625?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the figure element live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/b8dbaadfde3e631adc40d297a899c625)

The following is a useful quote from the HTML specification that is good to keep in mind when using the `figure` element.

> When a figure is referred to from the main content of the document by identifying it by its caption (e.g., by figure number), it enables such content to be easily moved away from that primary content, e.g., to the side of the page, to dedicated pages, or to an appendix, without affecting the flow of the document.

> If a figure element is referenced by its relative position, e.g., "in the photograph above" or "as the next figure shows", then moving the figure would disrupt the page's meaning. Authors are encouraged to consider using labels to refer to figures, rather than using such relative references, so that the page can easily be restyled without affecting the page's meaning.

[See the quote in its original context here](https://html.spec.whatwg.org/#figure-note-about-references).

## `figcaption`

The `figcaption` element goes hand in hand with the `figure` element as a means to provide a short concise description of the content of its parent `figure`. It is important to note that the `figcaption` does not replace the need for `alt` text when used with an image but, that it is more complimentary, for example:

```html
<figure>
    <img src="https://wallpapertag.com/wallpaper/full/a/f/1/489317-full-size-famous-paintings-wallpaper-2880x1800-ipad.jpg"
        width="720"
        height="450"
        alt="Painting of a young woman in a canoe on a pond surrounded by trees and other wild life.
        The woman has long brown hair, is wearing a white gypsy like dress and has an expression of terrible
        sadness on her face." />
    <figcaption><cite>The Lady of Shalott</cite> by John William Waterhouse - Oil on canvas<figcaption>
</figure>
```

### Live Codepen - The `figcaption` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/de3510eee3d63b2ce92a61cb1fac56aa?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the figcaption element live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/de3510eee3d63b2ce92a61cb1fac56aa)

The `figcaption` can be placed before or after the main `figure` content. As can be seen in the above example, the `figcaption` can also contain other flow content elements.

This concludes our look at the grouping elements of HTML. In the next chapter we will start looking at text level semantics.
