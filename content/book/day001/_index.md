---
title: Chapter 1 | An introduction to HTML
keywords: html, html standard, how-to, learn html
description: Learn the elements of the core, semantic language of the web.
menu:
  book:
    weight: 1
---

# Chapter 1 | An introduction to HTML

Welcome to chapter one of your 150 chapter journey. If one has always thought of HTML as just some form elements, divs, spans, links and paragraph tags, it seems kinda crazy to imagine that a journey through the HTML landscape can take 150 days.

As you will see throughout this journey though, there is a **lot** more to the HTML language than just those elements. To be honest though, a lot of these are variants on the same base element derived from attributes. This is especially true with form elements. With that being said, these attributes can be immensely powerful in open up an entire new world of possibilities once you are aware of them.

## What is HTML?

HTML stands for **H**yper**T**ext **M**arkup **L**anguage and has been at the core of [the web](https://en.wikipedia.org/wiki/World_Wide_Web) since its very inception in 1989. It forms the bases of all things on the web no matter how simple or how complex. Without HTML, there is no webpage or web application. HTML also provides the [semantic structure of our documents and applications](https://webaim.org/techniques/semanticstructure/) and this is where knowing the language really pays off. Semantic structure is also critical when it comes to the accessibility of your documents, a topic I will touch on throughout the 150 days.

In order for this 150 day journey to not become overly taxing I will not dig into every possible nook and cranny of the language and its history. With that said, I will provide links to further reading as appropriate and encourage you to explore these as time permits.

## html

Today's element is the `html` element.

Wait? What about the `DOCTYPE` though? That is a good question. When I started writing this course I fully intended to start with the `doctype` element but, I remembered reading somewhere that it is not actually an HTML element. I did a bit of research and indeed found that to be true.

While the `doctype` is the very first entry in our HTML documents, it is in fact not an HTML element. The sole purpose of the `doctype` entry is to ensure that the browser does not switch into what is commonly know as [quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode), but instead, makes a best effort attempt at following the relevant specification.

> I say, "best effort attempt", as not all browsers have implemented **all** of the HTML standard. This is especially true of older browsers and so, these browsers will do their best to interpret the language and use a fallback where it does not understand the specific syntax.

The `doctype` is required for all HTML documents and takes the following form:

```html
<!DOCTYPE html>
```

> There is an [extended legacy form](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype), but the above is all that you will ever need to be concerned with.

Now that the browser knows that what follows will be HTML, we start our document with our root element.

```html
<html>
  ...
</html>
```

Being at the root of our document, there is one very important attribute we should always set on the `html` tag.

### lang

The `lang` attribute on the `html` element indicates the primary language the document is written in. It also assists speech synthesis tools in what pronunciations to use, and helps translation tools select the rules they should apply. This leads to better overall accessibility of your documents. It takes the following form:

```html
<html lang="en">
  ...
</html>
```

Should you not want your entire document to be localisable through translation tools, you can specify the [`translate` property](https://html.spec.whatwg.org/#attr-translate), setting its value to `no` :

```html
<html lang="en" translate="no">
  ...
</html>
```

This concludes day 1 of our journey. I hope you have learned something new and can put it to use in your work.

In day 2, we will start to explore the document meta data elements that form part of an HTML document with the first element being the `head` element.

### Related Reading

- [The html element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
