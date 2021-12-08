---
title: Chapter 9 | modulepreload, next, pingback, and search
keywords: html, html standard, how-to, learn html
description: In this chapter we keep digging into the `link` element and specifically, the rel attribute.
menu:
  book:
    weight: 9
---

# Chapter 9 | modulepreload, next, pingback, and search

As mentioned in the previous chapter, in this chapter we conclude our exploration of the `rel` attribute keywords on the `link` element. 🥵😉 It sure was quite the exploration. The four remaining keywords are: `modulepreload`, `next`, `pingback`, and `search`.

Let dive in 🐬

## `modulepreload`

The `modulepreload` keyword is a specialized form of `preload` all about optimizing [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) loading. As such, the only valid type you can load with `modulepreload` is JavaScript with the `as` attribute being set to `script` by default. Discussing ES modules is way beyond the scope of these writings so, have a look at the related reading section for more info.

There are two ways you can approach using `modulepreload`. [The specification](https://html.spec.whatwg.org/#link-type-modulepreload) calls out the fact that, because module scripts declare their dependencies, implementation can take advantage of this fact to preload all of the declared dependencies of a module. For example, say we have a module script called `main.mjs`. This script then declares the following dependencies: `utils.mjs`, `parser.mjs`, `animation.mjs`. Now, assuming we have the following in the `head` of our document:

```html
<link rel="modulepreload" href="main.mjs" />
```

The implementation could introspect this module and discover the declared dependencies. With this knowledge the implementation(browser engine) could then go ahead and fetch and cache all the dependencies as well, setting everything up for a much speedier experience once the main module is parsed and executed.

As the above is implementation-dependent, a safer option would be to be explicit as follows:

```html
<link rel="modulepreload" href="main.mjs" />
<link rel="modulepreload" href="utils.mjs" />
<link rel="modulepreload" href="parser.mjs" />
<link rel="modulepreload" href="animation.mjs" />
```

Now, if the implementation does take advantage of the fact the module dependencies are declared, it would run an algorithm that goes something like this:

- I see you have a module called `main.mjs` you want me to preload, let me get that for you...
- OK, I got it 👍. Let me stick that in my module map 🗺
- Oh wait, I see this module declares some dependencies. Let me grab those as well.
- OK, I got it 👍. Let me stick those in my module map as well 🗺
- Ah, I see you have another module called `utils.mjs` you want me to preload, let me get that for you...
- Wait, wait... I think I already have that module in my module map. One sec... ⏲
- Yup, yup, I already have that one
- Ah, I see you have another module called `utils.mjs` you want me to preload, let me get that for you...
- Wait, wait... I think I already have that module in my module map. One sec... ⏲
- Yup, yup, I already have that one
- etc.

If however, the browser implementation does not do the above, it will simply step through each `link` element and fetch and cache each module in turn.

## `next`

So, you remember how we talked about the various types of resource hints? Well, the `next` keyword of the `rel` attribute it a kind of shortcut for those. In particular though, as the name suggests, a document resource that relates to the next navigation context.

With `next` you essentially give up control and tell the browser, "This document here, this is where the user will go next, you do what you think is best". The implementation can then decide to only do a `dns-prefetch` or a full `prerender` of the resource.

```html
<link rel="next" href="https://example.com/next-step.html" />
```

> While not currently in the list of [supported tokens](https://html.spec.whatwg.org/#attr-link-rel) there is also a `prev` keyword(aliased to `previous`), that indicates the logical previous document in the sequence.

## `pingback`

If you have spent some time reading blog posts on the internet you have probably seen this section called "pingbacks" at the end of a post. The idea behind a pingback is to create a method by which an author can request to be notified when somebody links to one of their document. This is in fact an entire specification all by itself, and as such, I will not cover the details here but, you will find a link to the full specification in the related reading section.

The syntax for a pingback is as follows:

```html
<link rel="pingback" href="https://example.com/xml-rpc" />
```

There may only be one `pingback` per document and the `href` attribute must contain a valid absolute URL.

## `search` 🕵️‍♀️

We have reached the last of the tokens! I almost kinda sad 😉

The `search` keyword allows you to create a link to a document that provides search functionality for the current document and related resources aka. A dedicated search page for your website:

```html
<link rel="search" href="https://example.com/search" />
```

`OpenSearch` is a specification currently in draft form that can be used in conjunction with the `search` token to enable auto-discovery of search interfaces. When used in this way, there are a couple of additional attributes that need to be added. Here, for example, is the `link` element from DuckDuckGo:

```html
<link
  title="DuckDuckGo"
  type="application/opensearchdescription+xml"
  rel="search"
  href="https://duckduckgo.com/opensearch.xml?atb=v223-5__"
/>
```

While DuckDuckGo does not have it set, the [specification also calls for a `profile` attribute](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#autodiscovery-in-htmlxhtml) that needs to be set on the `head` element as follows:

```html
<head profile="http://a9.com/-/spec/opensearch/1.1/"></head>
```

And that, believe it or not, is that 💥

While we are not done with the `link` element just yet(believe it or not 😂), we can close the book on the amazing world of the `rel` attribute. I hope you learned something useful, I sure have 😉 I do wonder though. 🤔 Was this too much? Just right? Too little? Let me know your thoughts on [Discord]((https://discord.gg/XKsZbZzk6Z)!

### Related Reading

- [ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [Pingback specification](https://www.hixie.ch/specs/pingback/pingback)
- [OpenSearch](https://github.com/dewitt/opensearch)
