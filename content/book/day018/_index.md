---
title: Chapter 18 | The article, section and main elements
keywords: html, html standard, how-to, learn html
description: In this chapter we look at the article, section and main elements.
menu:
  book:
    weight: 18
---

# Chapter 18 | The article, section and main elements

On the menu in this chapter we have the following:

- `article`
- `section`
- The `main` element for good measure

First up, the `main` element.

## main

While the `main` element is not part of the group of sectioning elements, but part of the grouping elements, it would be hard to cover `article` and `section` without introducing `main`. While the elements we have covered so far mostly relate to the elements that live around our page’s content, tangentially related content if you will 😉, `section`, and more specifically `article` , relate to the [meat and potatoes](https://idioms.thefreedictionary.com/the+meat+and+potatoes) of our page.

The `main` content if you will. 😜

As the name suggests, the `main` element is used to identify the main content of the page or web application. It has an implicit ARIA role of main which is exposed to assistive technologies, and as in the movie [The Highlander](https://www.imdb.com/title/tt0091203/), there can only be one per page. Grabbing some excerpts from previous days, the `main` element will then be used as follows:

```html
<header class="site-header">
  <a href="/" title="return to homepage">
    <h1 class="logo">150 Days of HTML</h1>
  </a>
  <nav aria-label="Primary navigation">...</nav>
</header>

<main role="main">
  <h2>Welcome to my corner of the Web</h2>
</main>

<aside>...</aside>

<footer>
  <p>
    I have an implicit ARIA role of <code>contentinfo</code> because my nearest
    ancestor is the <code>body</code> element.
  </p>
</footer>
```

### Live Codepen - The `main` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/18426633a729a69190758bc17e023b6a?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="The main element live example" >}}

> NOTE: Why add `role="main"` if it is implicit already? The addition of the `role` attribute largely depends on your intended audience. If you know that the users of your website or application will be using [ever-green browsers](https://www.techopedia.com/definition/31094/evergreen-browser), there is no need to specify the role. If however some of your users may be using versions of Internet Explorer 11 or older, the `role` attribute is required in order to convey the semantic meaning to assistive technologies.

While there can only be one `main` element per document, you could have more than one if the additional `main` elements have the `hidden` attribute specified. This can be useful to swap out different pieces of "main" content as a user interacts with your webpage, for example:

```html
<main id="intro" role="main">
  <h2>Introduction</h2>
</main>

<main id="toccata" role="main" hidden>
  <h2>Toccata</h2>
</main>

<main id="fugue" role="main" hidden>
  <h2>Fugue</h2>
</main>

<aside>
  <nav aria-labelledby="#toc">
    <h3 id="toc">Table of Contents</h3>
    <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#toccata">Toccata</a></li>
      <li><a href="#fugue">Fugue</a></li>
    </ul>
  </nav>
</aside>
```

Using JavaScript one can toggle on and off the `hidden` attribute on the relevant `main` element as the user clicks the various links in the table of contents. This ensures that only one `main` element is active and visible at a time, making this a valid use case.

### Live Codepen - Using multiple `main` elements

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/b00ad6c54b385ee9ae3b9ef066c5b95d?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="The main element use with the hidden attribute live example" >}}

## article

Following close on the heels of `main` is the `article` element. While it does not define the main content of a page, it is used to contain content on a page that is self contained. In other words, if you take an `article` element and its contents out of the page and present it by itself, it should still make sense. The `article` element has an implicit role of `article` but, can be assigned a custom role of `feed`, `presentation`, `none`, `document`, `application`, `main` or `region`, but it probably best to use the `main` element when the intended role is main.

The `article` element is commonly used as a container for the main article content(no surprise there 😁), but also to contain a list of blog entries for syndication for example:

```html
<ul class="post-list">
  <li>
    <article class="post-excerpt">
      <header>
        <h2>Title</h2>
      </header>
      ....
    </article>
  </li>
  <li>
    <article class="post-excerpt">
      <header>
        <h2>Title</h2>
      </header>
      ....
    </article>
  </li>
  ...
</ul>
```

As expected, an `article` element can contain the other sectioning elements such as `header`, `footer`, `section`, etc., to further semantically structure the content of the article.

## section

The `section` element is a little controversial. The general feeling is that the `section` element is a glorified `div` element and could really have been left out of the specification. While that may be true to some extent, it is not an entirely one-sided affair. It is also not a best practice to use a `section` element as a container when it merely acts as a style or scripting hook. In those instances, you should definitely opt for the `div` element.

The `section` element comes into its own when used with an accessible name, as in the following example:

```html
<article class="post">
  <header>
    <h1>Title</h1>
  </header>
  ....
  <section class="comments" aria-labelledby="comments-heading">
    <header>
      <h3 id="comments-heading">Comments</h3>
    </header>
    <ul class="comments">
      <li>
        <article class="comment">
          <p>This is some serious semantic markup dude!</p>
          <footer>
            <h4>Jane Doe</h4>
            <time datetime="2020-06-26">26 June, 2020</time>
          </footer>
        </article>
      </li>
    </ul>
  </section>
</article>
```

When the `section` element is used with an accessible name as above, it is assigned the ARIA role of region and exposed as such to assistive technologies. While this is the most useful use of the `section` element, it is by no means the only way it can be used. The general rule is: "the section element is appropriate only if the element’s contents would be listed explicitly in the document's outline." ~ [The Official HTML documentation](https://html.spec.whatwg.org/multipage/sections.html#use-div-for-wrappers)

Here I agree with [Bruce Lawson](https://twitter.com/brucel)(see article linked in related reading), and would stick to using the `section` element only when I am using it explicitly as a `region`.

That was a lot of ground to cover but, you now have a darn good toolbox to semantically order and section your content.

### Live Codepen - A complete blog post page example

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/d7d959055c161e21346fe5befb76c96d?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="A complete blog post page live example" >}}

There is one more set of elements to cover in this (cough)section(cough) before we move on to grouping content elements. Keep making the web awesome! 🐒

### Related Reading

- [Why You Should Choose HTML5 article Over section](https://www.smashingmagazine.com/2020/01/html5-article-section/)
