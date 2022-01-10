---
title: Chapter 26 | small, sub, and sup
keywords: html, html standard, how-to, learn html
description: Continuing with the text-level semantics elements, in this chapter we cover small, sub, and sup.
menu:
  book:
    weight: 26
---

# Chapter 26 | `small`, `sub`, and `sup`

Continuing with text-level semantics, this chapter is a quick one and covers `small`, `sub`, and `sup`

## `small`

While the default font size of the contents of the `small` element is, well small, it is not only meant for small print. It is definitely one of the use cases though.

```html
<p><small>Hello, I’m Mr. Potato Head</small></p>

<p>
  <img
    src="https://jarroldcdn.azureedge.net/products/hasbro/hasbro_playskool_mr_potato_%7Bw=1000,h=1000%7D.jpg"
    width="250"
    height="250"
    alt="Mr. Potato Head with a black hat, pink ears, eyes, a red nose, mouth with mustache, arms, and legs"
  />
</p>
<p>
  <small
    >All accessories sold separately. Essentially, you are buying a
    potato.</small
  >
</p>
```

### Live Codepen - Using the `small` element for small print

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/0b8f959d34c7e4b38e632c8f8d285e24?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the small element for small print live example" >}}

It can also be used for side notes. Here I am not referring to text that is displayed on the side like a pull quote for example, but something like in the following example:

```html
<p>
  The <code>samp</code> element
  <small
    >(Not to be confused with the
    <a href="https://en.wikipedia.org/wiki/Samp"
      >African food of the same name</a
    >)</small
  >
</p>
<p>
  Buy yourself some
  <a href="https://www.pnp.co.za/">samp and beans - R18.99</a>
  <small>(includes 15% VAT)</small>
</p>
```

### Live Codepen - Using the `small` element for a side note

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/2a955c6384205ad989ac36df3d5cbd8a?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the small element for a side note live example" >}}

The `small` element is not meant for extended spans of text or for subheadings. When a `em` or `strong` element is nested within a `small` element, it does not deemphasize or lessen the importance. So the following will still carry the same weight:

```html
<p>
  <small
    ><strong
      >By continuing to use the page you accept our terms of service.</strong
    ></small
  >
</p>
```

## `sub`

The `sub` element represents [subscript](https://en.wikipedia.org/wiki/Subscript_and_superscript). This element is not meant to be used for purely presentational purposes but, to mark up specific typographical conventions. For example:

```html
<p>The formula for water is <var>H</var><sub>2</sub><var>O</var></p>
```

### Live Codepen - Using the `sub` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/b91efad7eaf141802fb6e894a68bef57?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the sub element live example" >}}

## `sup`

The `sup` element represents [superscript](https://en.wikipedia.org/wiki/Subscript_and_superscript). Basically `sup` is our reality and `sub` is the upside-down 🙃 (I could not resist the [Stranger Things reference](https://strangerthings.fandom.com/wiki/The_Upside_Down).). Let’s look at a familiar example from a previous chapter.

```html
<p><var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
```

### Live Codepen - Using the `sup` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/9b6f612b7999f2153ab94106dd4ee0ec?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the sup element live example" >}}

That completes our look at the simple, but useful text-level semantic elements. In the next chapter we will look at some lesser-known elements under the text-level semantics flag.

### Related reading

- [When to Use Superscript and Subscript in Your Writing](https://getproofed.com/writing-tips/when-to-use-superscript-and-subscript-in-your-writing/)
