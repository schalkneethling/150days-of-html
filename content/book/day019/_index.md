---
title: Chapter 19 | The hgroup, address and heading elements
keywords: html, html standard, how-to, learn html
description: In this chapter we look at the hgroup, address and heading elements.
menu:
  book:
    weight: 19
---

# Chapter 19 | The hgroup, address and heading elements

On the menu today we have the following:

- Heading elements
- `hgroup`
- `address`

It's (almost)all about the headings in this chapter. First up, the `h[1-6]` elements.

## headings

HTML gives us six heading levels. On the surface, they seem pretty straightforward as well. Each heading element has the implicit role of heading and exposes an implicit ARIA level attribute that corresponds to the rank of the heading element. Depending on the hierarchy of the heading, you simply choose the appropriate heading element, and you are done. Right? Well, almost 😉

When we start looking at the semantics and meaning of these elements, things get a little trickier. Using a heading element creates what is known as an implied section. A series of heading elements with the same rank would then create multiple new sections, for example:

```html
<h1>I create an implicit section</h1>
<p>some content</p>

<h1>I create another new implicit section</h1>
<p>some content</p>

<h1>And I create yet another new implicit section</h1>
<p>some content</p>

<!--
1. I create a implicit section
2. I create another new implicit section
3. And I create yet another new implicit section
-->
```

If however, a heading element with a lower rank follows one with a higher rank, the latter becomes a subsection of the section created by the higher-ranked heading element, for example:

```html
<h1>I create an implicit section</h1>
<p>some content</p>

<h1>I create another new implicit section</h1>
<p>some content</p>

<h2>I am a subsection of my parent H1 above</h2>
<p>some content</p>

<h3>I am a subsection of my parent H2 above</h3>
<p>some content</p>

<!--
1. I create an implicit section
2. I create another new implicit section
2.1 I am a subsection of my parent H1 above
2.1.1 I am another subsection of my parent H2 above
-->
```

While the above is useful and practical for simple documents, it is not the most practical approach in real-life documents to simply rely on the implicitness of headings to create sections by themselves. While we are discussing sections and the document outline it is important to touch on the topic of sectioning root elements.

The sectioning root elements are `blockquote`, `body`, `details`, `dialog`, `fieldset`, `figure`, and `td`. These elements have their own document outline which does not contribute to the overall document outline. For example:

```html
<h1>I create an implicit section</h1>
<p>some content</p>

<h1>I create another new implicit section</h1>
<p>some content</p>

<h2>I am a subsection of the H1 above</h2>
<p>some content</p>

<blockquote>
  <h1>I am the heading for this blockquote</h1>
  <p>I am separate from the outer document's outline</p>
</blockquote>

<!--
1. I create an implicit section
2. I create another new implicit section
2.1 I am a subsection of the H1 above
-->

<!--
1. I am the heading for this blockquote
-->
```

Of course, the `body` element is slightly different in this regard as it _is_ the main document that exposes the main document outline. With all of this said, the HTML outline algorithm is still very much in flux(see related reading) and support across browsers and assistive technologies of the new outlining algorithm has not been equally well adopted. It is therefore best to be explicit about our intent when authoring documents.

While there are no hard rules, there is some guidance provided by the [WCAG](https://www.w3.org/TR/WCAG20/)(Web Content Accessibility Guidelines) as well as common best practices. In general, strive for no more than one `h1` element per document. It is also common for the `h1` element to mirror the content of the documents `title` element. With our main document title defined we move on to the remaining five heading elements as well as our [sectioning elements](https://html.spec.whatwg.org/multipage/sections.html#sections) to identify the explicit sections of our document.

Here again, there are no hard and fast rules but one should keep the following in mind: A higher rank should never follow a lower in the same section, and you should aim to not skip a heading level within a particular section, for example:

```html
<h1>Is a tomato a vegetable or a fruit?</h1>

<article>
  <h2>Vegetable or Fruit?</h2>
  <p>A list of common produce that are fruits not vegetables.</p>

  <blockquote>
    <h2>"Fruits are structures that contain seeds,"</h2>
    <footer>
      Toby Adams, director of the Edible Academy at the New York Botanical
      Garden, said in an interview.
    </footer>
  </blockquote>

  <section>
    <h3>Tomato</h3>
    <p>
      Although they're technically a fruit, tomatoes have been legally defined
      as vegetables in the US.
    </p>
  </section>

  <section>
    <h3>Avocado</h3>
    <p>It's a fruit. Technically an oversized berry</p>
  </section>

  <section>
    <h3>Eggplant</h3>
    <p>Eggplants are botanically classified as berries.</p>
  </section>

  <footer>
    <h4>Reference</h4>
    <ul>
      <li>
        <a
          href="https://www.insider.com/fruits-that-are-vegetables-2018-12#eggplants-are-botanically-classified-as-berries-8"
          >10 'fruits' that are technically vegetables — and vice versa</a
        >
      </li>
    </ul>
  </footer>
</article>

<aside>
  <nav aria-labelledby="toc">
    <h2 id="toc">Table of Contents</h2>
    <ul>
      <li><a href="#tomato">Tomato</a></li>
      <li><a href="#avocado">Avocado</a></li>
      <li><a href="#eggplant">Eggplant</a></li>
      <li><a href="#reference">Reference</a></li>
    </ul>
  </nav>
</aside>
```

The above would generate the following heading level outline:

```html
<!--
<h1> Is a tomato a vegetable or a fruit?
  <h2>"Fruits are structures that contain seeds,"</h2>
  <h2> Vegetable or Fruit?
    <h3> Tomato
    <h3> Avocado
    <h3> Eggplant
      <h4> Reference
  <h2> Table of Contents
-->
```

And the following structural outline:

```
Is a tomato a vegetable or a fruit?
   - Vegetable or Fruit?
      - Tomato
      - Avocado
      - Eggplant
      - Reference

   - [aside element with no heading]
      - Table of Contents
```

### Live Codepen - Example use of heading elements

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/3959cafacdfc718b57c754041090cdbb?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Example use of heading elements live example" >}}

> NOTE: You will see while the `h2` inside the `blockquote` is included in the heading level outline, it is not in the structural outline.

While being aware of the structure we define when using sections and headings, the most important points to remember are: Markup headings as headings and always, always ensure that the text of your heading elements are descriptive and accurately describe the section it is heading.

Phew, all that talk about headings has given me a headache 😜

## hgroup

The `hgroup` element, as its name suggests, is used to group related headings. For example:

```html
<h1>Search results</h1>

<article>
  <hgroup>
    <h2>46 results found for "css"</h2>
    <h3>Showing results 1 to 15</h3>
  </hgroup>
</article>
```

The general semantics and meaning of an `hgroup` element is the same as that of the individual heading elements we discussed before. An important point to note about `hgroup` specifically though, is that the rank of the `hgroup` will be equal to that of the highest-ranked heading level element. In the above example, the rank of the `hgroup` would then be level 2.

Expanding on the above example, we can use the `hgroup` to be the associated title for the `article` element. The really nice thing here is that both headings inside the `hgroup` will be treated as a single item and read out as such by assistive technologies. For example:

```html
<h1>Search results</h1>

<main>
  <article aria-labelledby="results-heading">
    <hgroup id="results-heading">
      <h2>46 results found for "css"</h2>
      <h3>Showing results 1 to 15</h3>
    </hgroup>
  </article>
</main>
```

When a user then browses by landmarks, the above landmark will be identified and read out as follows:

> 46 results found for css Showing results 1 to 15, article, in main

## address

The name of this element can be a little confusing. While it is called the `address` element, it is not typically used to markup arbitrary postal addresses. For this, using a simple paragraph element along with the relevant [microdata](https://schema.org/address) is more appropriate. If the address being marked up is a company address located in the footer of the company’s website, then marking it up with the `address` element would be appropriate.

The guiding principle is that the `address` element represents contact information for its closest `article` or `body` element. Let us look at the landing page for a publication as an example:

```html
<body>
  <h1>Horse and Hound</h1>

  <article>
    <h2>An unknown pony</h2>
    <p>
      Some interesting info about the unknown pony.
      <a href="/pony">Read more</a>
    </p>
    <h3>Written by:</h3>
    <address><a href="mailto:pete@horseandhound.com">Peter Horse</a></address>
  </article>

  <article>
    <h2>The Maltchi</h2>
    <p>
      Some interesting info about the Maltchi. <a href="/malchi">Read more</a>
    </p>
    <h3>Written by:</h3>
    <address><a href="mailto:sally@horseandhound.com">Sally Hound</a></address>
  </article>

  <footer>
    <address>
      <a href="mailto:info@horseandhound.com">Horse And Hound HQ</a>
    </address>
  </footer>
</body>
```

### Live Codepen - The `address` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/a1986bc4c430b2745026453449e113e6?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="The adress element live example" >}}

From the above, you can see that the contact information for each author is inside the `article` element that wraps the article content. The contact information for the publication as a whole is placed inside the `footer` element. The nearest ancestor of the `footer` element is the `body` element and as such the contact information here applies to the page as a whole.

And with that, we have covered all the sectioning elements in HTML. Next, we will dive into grouping content, touching on elements we use very frequently. Keep making the web awesome! 🧐

### Related Reading

- [Headings & Accessibility](https://developer.paciellogroup.com/blog/2020/03/headings-accessibility/)
- [Heading off confusion: When do headings fail WCAG?](https://developer.paciellogroup.com/blog/2020/03/heading-off-confusion-when-do-headings-fail-wcag/)
- [Update outline algorithm(Github issue)](https://github.com/w3c/html/issues/794)
- [Add heading-focused outlines and :heading(Github pull request)](https://github.com/whatwg/html/pull/3499)
- [Visualize your document outline with the HTML5 Validator in outline mode](https://validator.w3.org/nu/)
- [The HTML5 Outliner](https://h5o.github.io/)
