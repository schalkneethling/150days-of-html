---
title: Chapter 17 | The footer and aside sectioning elements
keywords: html, html standard, how-to, learn html
description: In this chapter we are going to look at the aside and footer elements.
menu:
  book:
    weight: 17
---

# Chapter 17 | The `footer` and `aside` sectioning elements

Today we are going to look at the `aside` and `footer` elements skirting 💃 around the `main` element which we will get to soon.

## aside

The official HTML documentation states that the `aside` element is to be used as a container for content that is tangentially related to the content around it. I have always found that a little hard to interpret 😁 For me, this means that the contents of an `aside` element, while related, should not detract from the main content of the page if it is removed. From this perspective it almost progressively enhances the main content. For example, in chapter 16 I showed how one can markup a table of contents navigational aid using the `nav` element.

On a blog, it is also common to offer another navigational aid through tagging. We might want to group the table of contents and the tag navigation but, not as a single `nav` element. This is then a perfect grouping or sectioning use case for the `aside` element.

```html
<aside>
  <nav aria-labelledby="toc-heading">
    <h2 id="toc-heading">Table fo Contents</h2>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#toccata">Toccata</a></li>
      <li><a href="#fugue">Fugue</a></li>
    </ul>
  </nav>

  <nav aria-labelledby="tags-heading">
    <h2 id="tags-heading">Browse by Tags</h2>
    <ul>
      <li><a href="/tags/classical">Classical</a></li>
      <li><a href="/tags/baroque">Baroque</a></li>
      <li><a href="/tags/modern">Modern</a></li>
    </ul>
  </nav>
</aside>
```

### Live Codepen - `aside` element usage example

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/70a8772bab3745028cc7f371eaafa0a3?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="aside element usage live example" >}}

The [implicit ARIA role of `complementary` for the `aside` element](https://w3c.github.io/html-aria/#el-aside) provides a further hint to its use, and in fact with this in mind, another great example of the appropriate use of the `aside` element can be found on Wikipedia pages. On the [page about Switzerland](https://en.wikipedia.org/wiki/Switzerland), there is a sidebar common across Wikipedia that provides complementary information about Switzerland. The page would still be detailed and informative without this but, this enhances the usefulness of the content. To my mind, that would then be a perfect use case and a concrete example demonstrating the phrase, "content that is tangentially related". Other example use cases can be to embed a feed from Twitter or Instagram or markup a pull quote.

All of this can be achieved using the neutral `div` element and in some cases it can be appropriate. The reason we use these semantic elements is to expose an overall structure of our document that aid in content indexing as well as navigating around a page by assistive technologies. As with all things, we should be careful not to overuse any of these elements. As overuse will in the end render their utility less effective or even useless.

## footer

Upon first inspection, it would seem that this is a cut-and-dry element. It is used for the footer of a webpage, right? Correct, but... 🙃

The `footer` element can actually be used within many of the other sectioning elements we have discussed so far. For example, a `nav` element can have a `footer` element:

```html
<aside>
  <nav aria-labelledby="toc-heading">
    <h2 id="toc-heading">Table fo Contents</h2>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#toccata">Toccata</a></li>
      <li><a href="#fugue">Fugue</a></li>
    </ul>
  </nav>

  <nav aria-labelledby="tags-heading">
    <h2 id="tags-heading">Browse by Tags</h2>
    <ul>
      <li><a href="/tags/classical">Classical</a></li>
      <li><a href="/tags/baroque">Baroque</a></li>
      <li><a href="/tags/modern">Modern</a></li>
    </ul>
    <footer>
      <a href="/tags/all">See all tags</a>
    </footer>
  </nav>
</aside>
```

The `aside` element can also have its own `footer`, and technically, the `footer` element does not even _have_ to be the last element of its parent element. Although uncommon, the following is completely valid:

```html
<aside>
  <footer><a href="index">Back to index</a></footer>
  <nav aria-labelledby="toc-header">
    <h3 id="toc-header">Table of Contents</h3>
    <ul>
      ...
    </ul>
  </nav>
</aside>
```

When the nearest ancestor of the `footer` element is the `body` element, the footer is seen as containing information regarding the entire page.

```html
<body>
  <header>
    <h1>Hellow There!</h1>
  </header>
  <footer>
    <p>
      I have an implicit ARIA role of <code>contentinfo</code> because my
      nearest ancestor is the <code>body</code> element.
    </p>
  </footer>
</body>
```

### Live Codepen - `footer` element usage example

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/b00d328c5d5cb70f5ee00f5a13723d0b?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="footer element usage live example" >}}

There is also one more important difference here. When the footer is used in this way, it has the implicit [ARIA role of `contentinfo`](https://w3c.github.io/html-aria/#el-footer) which in-turn relates this information to assistive technologies. It is therefore important to be aware of this distinction.

### Live Codepen - Complete example

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/193537c005b6744203dfeb9c54e4bef1?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="footer and aside elements usage live example" >}}

That is where we will end it for this chapter. In the next chapter we will look at the `article` and `section` elements as well as the various heading levels. Until then, keep making the web awesome! 🐨

### Related Reading

- No related reading for this chapter. Have a 🍪
