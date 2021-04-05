# Day 16

Welcome to Day 16!

As mentioned yesterday, today we are going to start digging into the sectioning elements. Most of these were introduced with the release of HTML5, but some have been around since the beginning of the web. Sectioning elements allow us to [semantically markup](https://en.wikipedia.org/wiki/Semantic_HTML) our pages and applications to aid user-agents and assistive technologies to better understand, interpret and present our content to end users. It also assists other machine based systems, such as search engine spiders, to better index the web by inferring meaning to the various parts that makes up the over page or application. This then also forms part of a larger initiative known as [the semantic web](https://www.w3.org/standards/semanticweb/).

There is quite a bit to cover here so, let's take it one piece, or element 😜, at a time starting from the top of our document.

## header

Not to be confused with the `head` element, the `header` element is used to group other elements within the `body` of the document. That statement is both an oversimplification and a little vague. As you will see, the meaning of these elements depends a _lot_ on the context in which they are used. This is why covering all of these in a single day, would just be too much.

 But enough beating around the bush 🙃 let's get stuck in. We will first look at the `header` element as a direct child of the `body` element. Used in this way, the `header` element has an implicit ARIA role of `banner`. 

### Stepping aside for a minute

As mentioned earlier, these sectioning elements serve a larger purpose than merely grouping related HTML elements in source code, they also expose an underlying structure to assistive technologies and other machine based systems.

One of the ways it does this is through what is known as [ARIA landmark roles](https://www.w3.org/WAI/PF/aria/roles#landmark_roles). These allow users of assistive technologies to get a quick high level overview of the current page in questions, and allows them to easily jump to the pieces of content that is most relevant to them. Without this, or through the incorrect usage of these elements, a web page or application can be rendered confusing, frustrating, or even unusable by these users.

Now that you have an understanding of the critical importance and utility of landmark roles, let us look at the standard definition of the `banner` landmark role.

> A region that contains mostly site-oriented content, rather than page-specific content. Site-oriented content typically includes things such as the logo or identity of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page and typically spans the full width.User agents SHOULD treat elements with the role of banner as navigational landmarks.
>
> [https://www.w3.org/WAI/PF/aria/roles#banner](https://www.w3.org/WAI/PF/aria/roles#banner)

```html
<header class="site-header">
    <a href="/" title="return to homepage">
        <h1 class="logo">150 Days of HTML</h1>
    </a>
    <nav>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/example">Example</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

The above would be a common pattern of a semantically marked up `header` for a website. It clearly communicates intent, provide ample style hooks and exposes its structure to assistive technologies.

## nav

Inside the `header` we just coded you will notice another new element, the `nav` element. Like the `header` element the `nav` element has an implicit ARIA role. Unlike the `header` element, this element will always have the same role irrespective of the context in which it is used. The role, not surprisingly, is `navigation`. As such, it is important to note that not _all_ elements on a page that act as navigation needs to be wrapped in a `nav` element. The `nav` element is to be used to identify the main navigational aids on a page.

Two common uses is for the main site navigation as well as in page navigation. While it is common for a `nav` element to wrap a `ul` element, this is not a requirement. If for example your page has an introductory section of copy containing links to other parts within the current document, or even external documents, this can be wrapped with a `nav` element. For example:

```html
<nav>
  <p>That you for visiting my <a href="/">website</a>. Please take a look around. Here you will find various pieces of my work such as <a href="/blog">blog posts</a>, some <a href="/art">art</a>, I have made, and <a href="/recipes">recipes</a>. If you have any questions for me, please head over to my <a href="/contact">contact page</a> and shoot me a message.</p>
 </nav>
```

An important point to note is that while the `nav` element implies a `navigation` role, it does not distinguish one `nav` element from another. This then is why it is important that we are deliberate when using it. The most use cases is for a site's primary and secondary navigation. To get the most out of this element, combine it with either `aria-label` or `aria-labelledby` to clearly identify the main purpose of the navigational aid. For example, building on the above `header`:

```html
<header class="site-header">
    <a href="/" title="return to homepage">
        <h1 class="logo">150 Days of HTML</h1>
    </a>
    <nav aria-label="Primary navigation">
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/example">Example</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

Later in our document we might have a table of contents. That would be an ideal candidate to be identified as a secondary navigational aid, for example:

```html
<nav aria-labelledby="toc-heading">
  <h2 id="toc-heading">Table fo Contents</h2>
  <ul>
  	<li><a href="#introduction">Introduction</a></li>
  	<li><a href="#toccata">Toccata</a></li>
  	<li><a href="#fugue">Fugue</a></li>
  </ul>
</nav>
```

You will notice that here I used `aria-labelledby` in combination with an `id` attribute on the heading element in order to set the name for this `nav` element. Both are valid and can be used interchangeably.

That is where will end it for today. Tomorrow we will look at the `aside` and `footer` elements and their roles in HTML documents. With that said, this will not be the last time we will see both the `header` and `nav` elements. Expect them to play a cameo role in some of the future `sections` 🙃

Until then, keep making the web awesome! 🥡

### Related Reading

- [Microformats](http://microformats.org/)
- [Schema.org](http://schema.org/)
- [ARIA landmark roles](https://www.w3.org/WAI/PF/aria/roles#landmark_roles)

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)