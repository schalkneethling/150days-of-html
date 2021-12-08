---
title: Chapter 4 | The base element
keywords: html, html standard, how-to, learn html
description: Today we are going to look at an HTML element you may have never heard of, the base element.
menu:
  book:
    weight: 4
---

# Chapter 4 | The base element

As mentioned in chapter 3, in this chapter we are going to look at an HTML element you may have never heard of. The element under discussion is the `base` element.

The `base` element is a self-closing element. It allows you to set a base URL for all links on the current page and/or set a base browsing context for all links on the page. 🔗

Let’s look at a practical example.

```html
<ul>
  <li>
    <a href="https://www.goodreads.com/book/show/11588.The_Shining"
      >The Shining</a
    >
  </li>
  <li>
    <a href="https://www.goodreads.com/book/show/149267.The_Stand">The Stand</a>
  </li>
  <li><a href="https://www.goodreads.com/book/show/10614.Misery">Misery</a></li>
  <li><a href="https://www.goodreads.com/book/show/10592.Carrie">Carrie</a></li>
</ul>
```

All of those links share the same **base** URL. 🤔 Using the `base` element, you can avoid repeating the base URL in every link tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>I got your base</title>
    <base href="https://www.goodreads.com/" />
  </head>
  <body>
    <ul>
      <li><a href="book/show/11588.The_Shining">The Shining</a></li>
      <li><a href="book/show/149267.The_Stand">The Stand</a></li>
      <li><a href="book/show/10614.Misery">Misery</a></li>
      <li><a href="book/show/10592.Carrie">Carrie</a></li>
    </ul>
  </body>
</html>
```

Now, you may also want those links to always open in a new tab. One option is to do:

```html
<ul>
  <li><a href="book/show/11588.The_Shining" target="_blank">The Shining</a></li>
  <li><a href="book/show/149267.The_Stand" target="_blank">The Stand</a></li>
  <li><a href="book/show/10614.Misery" target="_blank">Misery</a></li>
  <li><a href="book/show/10592.Carrie" target="_blank">Carrie</a></li>
</ul>
```

As mentioned, there is a second attribute you can set on the `base` element, and that attribute is the `target` attribute. We can therefore avoid repeating `target`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>I got your base</title>
    <base href="https://www.goodreads.com/" target="_blank" />
  </head>
  <body>
    <ul>
      <li><a href="book/show/11588.The_Shining">The Shining</a></li>
      <li><a href="book/show/149267.The_Stand">The Stand</a></li>
      <li><a href="book/show/10614.Misery">Misery</a></li>
      <li><a href="book/show/10592.Carrie">Carrie</a></li>
    </ul>
  </body>
</html>
```

## Live Codepen

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/988bf51720dea707f2e07ccba198b644?default-tab=html%2Cresult&editable=true" width="100%" height="300" scrolling="no" class="codepen-frame" title="The base element: href and target attribute" >}}

With the above in place, **all** links in the current page will use `https://www.googreads.com` as its base URL and all links will open in a new tab. Interesting right?

Thing is, it means that **all** links will have this behaviour. It is also a little more nuanced than that. Not only are anchor tags affected, but it will affect _all_ elements with an `href` attribute set. For example:

```html
<base href="https://www.goodreads.com/" />
<link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
```

In the above scenario, the browser will attempt to load the stylesheet from the Goodreads website, which is probably not what you intended. Thankfully, the `base` element only affects elements below it in source order, so changing the above to the following will solve that problem:

```html
<link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
<base href="https://www.goodreads.com/" />
```

Still, I find it a little hard to come up with a use case for using `base`. I can see how a webpage might have links that all use the same base URL, but I am not sure how often you would want all links to open in a new tab for example. Of course, `_target` is not the only potential value for the `target` attribute. One other potential value for the `target` attribute is `_top`. Using `_top` as the value of `target` might be useful as a means of [frame busting](https://en.wikipedia.org/wiki/Framekiller) aka, prevent your site from being displayed in an `iframe`.

```html
<base target="_top" />
```

While this will not prevent the site from initially being loaded in an `iframe`, it _will_ cause clicks on any links in the page to bust out of the `iframe` by setting its browsing context to the topmost browsing context i.e. the browser window itself.

Thinking it over some more, I wondered what would happen if you combined `base` with a specific `class` and some JavaScript.🤔 The result is something I could see being useful in web applications. Although it might be a bit of a stretch. For demonstration purposes though, here it is:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base target="_blank" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The HTML base element - Day 4 | 150 Days of HTML</title>
    <link rel="stylesheet" type="text/css" href="css/pink.css" media="screen" />
  </head>

  <body>
    <ul>
      <li><a class="native" href="add-book">Add Book</a></li>
      <li><a class="native" href="view">View Bookshelf</a></li>
    </ul>

    <ul>
      <li>
        <a href="https://www.goodreads.com/book/show/10614.Misery">Misery</a>
      </li>
      <li>
        <a href="https://www.goodreads.com/book/show/10592.Carrie">Carrie</a>
      </li>
    </ul>
  </body>
  <script>
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("native")) {
        event.preventDefault();
        window.location = event.target.href;
      }
    });
  </script>
</html>
```

With the above, clicks on any link that has a `class` attribute with the value `native` will be intercepted by JavaScript and opened in the same tab/window. All other links will open in a new tab. One interesting aspect to note about the above is that, even when intercepted by JavaScript, the value of `event.target.href` will use the base `href` value defined on the `base` element, for example `https://www.goodreads.com/add-book`. So be careful 😄

Some final notes. There must be no more than one `base` element per page. If there are multiple, all but the first will be ignored. As with `href`, all elements that have a `target` attribute set are affected by the value of the `target` attribute of the `base` element. This means that forms with a `target` will also be affected.

The URL parsing algorithm works as follows (from the W3C documentation):

```html
<base href="https://www.example.com/news/index.html" />
...
<a href="archives.html">archives</a>
<!-- The above URL will be https://www.example.com/news/archives.html -->

<a href="/blog/archives.html">archives</a>
<!-- The above URL will be https://www.example.com/blog/archives.html -->

<a href="./blog/archives.html">archives</a>
<!-- The above URL will be https://www.example.com/news/blog/archives.html -->

<a href="https://www.otherwebsite.com/blog/archives.html">archives</a>
<!-- The above URL will be https://www.otherwebsite.com/blog/archives.html -->
```

Knowing the above might very well open up some additional actually useful use cases. Alrighty then, that was a bit of a whirlwind ride. I am curious to know what use cases people come up with using the `base` element. If you stumble on or devise some interesting use case, let me know!

## Related Reading

- [base element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
