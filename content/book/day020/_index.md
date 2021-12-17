---
title: Chapter 20 | The paragraph, hr, pre and blockquote elements
keywords: html, html standard, how-to, learn html
description: In this chapter we start looking at the grouping content elements in HTML.
menu:
  book:
    weight: 20
---

# Chapter 20 | The paragraph, `hr`, `pre` and `blockquote` elements

In this chapter we start looking at the grouping content elements in HTML.

## p(paragraph) and div elements

We start off with the two grouping content elements that are the most general purpose elements of the bunch. While they can both be used in a variety of similar ways, it is important to always use the element that makes the most semantic sense.

For example, both the following examples are valid:

```html
<p>
  Dream about hunting birds get away from me stupid dog cat gets stuck in tree
  firefighters try to get cat down firefighters get stuck in tree cat eats
  firefighters' slippers so scratch at the door then walk away so i is not fat,
  i is fluffy stare at wall turn and meow stare at wall some more meow again
  continue staring.
</p>

<div>
  Dream about hunting birds get away from me stupid dog cat gets stuck in tree
  firefighters try to get cat down firefighters get stuck in tree cat eats
  firefighters' slippers so scratch at the door then walk away so i is not fat,
  i is fluffy stare at wall turn and meow stare at wall some more meow again
  continue staring.
</div>
```

> Quote from [catipsum.com](http://catipsum.com/)

However semantically, you would choose to use the paragraph element over the `div` element as it is more appropriate. The reason I am discussing these two together is that there are valid instances when you could use a paragraph element, but where a `div` would be more appropriate.

> NOTE: Another aspect the two elements have in common is that they have no implicit ARIA role but, can be used with any valid ARIA role. Always remember though, just because you can, does not mean that you should. Always, always choose the most appropriate HTML element for the job at hand. Only reach for these custom uses when you absolutely have no other choice.

For example, the following is valid HTML:

```html
<p class="field-group">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" />
</p>
```

The more appropriate markup would be this though:

```html
<div class="field-group">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" />
</div>
```

The `div` element is a general [block level](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) grouping element whilst the paragraph element is more appropriate for paragraphs of text. There are also some situations where a paragraph element might seem appropriate but, would be invalid HTML, for example:

```html
<p>Did you know that
<ul>
    <li>pea pods, </li>
    <li>avocado, </li>
    <li>and eggplant, </li>
</ul>
are all fruits?</p>
```

The above would be invalid because list elements cannot be children of a paragraph element. While it is a rather odd example, you could substitute a `div` in place of the paragraph element and have valid HTML:

```html
<div class="sentence-with-list">
  Did you know that
  <ul>
    <li>pea pods,</li>
    <li>avocado,</li>
    <li>and eggplant,</li>
  </ul>
  are all fruits?
</div>
```

With a little bit of CSS:

```css
.sentence-with-list ul,
.sentence-with-list li {
  display: inline;
  padding: 0;
}
```

you could have the above rendered as:

### Live Codepen - A little odd, but technically valid, sentence

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/516df779e09835dfc8e04d7f42e53c3c?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="A little odd, but technically valid, sentence live example" >}}

A strange use case to be sure, but now you know how to approach it should it ever come up in real life. 🙃

## hr(Thematic break)

The `hr`, or thematic break element, has an implicit ARIA role of [`separator`](https://w3c.github.io/html-aria/#index-aria-separator) and as such represents a thematic break in content, for example:

```html
<h1>Making coffee</h1>
<h2>Ingredients</h2>
<ul>
  <li>Coffee grounds</li>
  <li>Sugar</li>
  <li>Milk</li>
  <li>Water</li>
  <li>Kettle</li>
</ul>
<hr />
<p>
  Pour the water into the kettle and turn it on to bring the water to a boil.
</p>
```

> NOTE: While this element will still render as a horizontal rule in visual browsers, it is now defined in semantic terms and should not be used for purely visual purposes. A better candidate would be CSS. Also, note that all previous attributes of the thematic break(as it is now known) have been deprecated or are non-standard. Any styling should be done using CSS.

## pre

If you have seen code examples online in blog posts, or books such as this one, you have already come into contact with the `pre` element.

> NOTE: Using the `pre` element by itself to markup code examples is not the whole story though. When doing so, you would couple it with the `code` element. More on that in a future chapter.

The `pre` element is a way to markup **pre**formatted text. In HTML if you write the following:

```html
<p>This is a          sentence , with some         additional   w h i t e s p a c e</p>
```

The end result would be visually rendered as:

### Live Codepen - Whitespace behaviour with a paragraph tag

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/655eec15fe9b5a5960203d6ea0684327?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Whitespace behaviour with a paragraph tag live example" >}}

As you can see, the only thing that will be honored is single space characters, all other additional whitespaces will be collapsed. If you wanted to visually **pre**serve the whitespace, you would mark it up using the `pre` element.

```html
<pre>
This is a       sentence , with some     additional  w  h  i  t  e  s  p  a  c  e</pre
>
```

Now it will be rendered exactly as typed:

### Live Codepen - Whitespace behaviour with the `pre` tag

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/662918215fa46780e2f37170a3ceb72e?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Whitespace behaviour with the pre tag live example" >}}

This is then also how you would markup things such as ASCII Art:

```html
<pre>
    _    ____   ____ ___ ___      _         _        _             _     _           
   / \  / ___| / ___|_ _|_ _|    / \   _ __| |_     / \   _ __ ___| |__ (_)_   _____ 
  / _ \ \___ \| |    | | | |    / _ \ | '__| __|   / _ \ | '__/ __| '_ \| \ \ / / _ \
 / ___ \ ___) | |___ | | | |   / ___ \| |  | |_   / ___ \| | | (__| | | | |\ V /  __/
/_/   \_\____/ \____|___|___| /_/   \_\_|   \__| /_/   \_\_|  \___|_| |_|_| \_/ \___|
</pre>
```

- Borrowed from [https://www.asciiart.eu/](https://www.asciiart.eu/)

## blockquote

As the name suggests this element is used to markup content that is quoted from another source:

```html
<blockquote>
  The blockquote element represents a section that is quoted from another
  source.
</blockquote>
```

Without any additional CSS, the `blockquote` element will be indented from its surrounding text but, will not automatically include quotation marks. This can be included in the text or added stylistically via CSS. While not required, it is valid to use other HTML elements such as the paragraph tag inside the `blockquote` element.

While not directly exposed to users, you can include a URL to where the original content is quoted from using the `cite` attribute:

```html
<blockquote cite="https://html.spec.whatwg.org/#the-blockquote-element">
  The blockquote element represents a section that is quoted from another
  source.
</blockquote>
```

While a user agent could enable users to follow a citation link, it is not required and not implemented as such. Another interesting side note is that the specification specifically indicates that attribution for the quotation should be placed outside of the `blockquote` element, for example:

```html
<blockquote cite="https://html.spec.whatwg.org/#the-blockquote-element">
  The blockquote element represents a section that is quoted from another
  source.
</blockquote>
<p>
  -
  <a href="https://html.spec.whatwg.org/#the-blockquote-element"
    >What-WG HTML specification for the <code>blockquote</code> element</a
  >
</p>
```

That is then also the most common way to expose the URL specified in the `cite` attribute.

That is all for our first taste of the grouping elements of HTML. In the next chapter we will continue by looking at all things list-related.

### Related Reading

- No related reading for this chapter. Have another 🍪
