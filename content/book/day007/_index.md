---
title: Chapter 7 | The icon keyword
keywords: html, html standard, how-to, learn html
description: Continuing with the link element and its rel attribute, in this chapter we will be looking at the icon keyword.
menu:
  book:
    weight: 7
---

# Chapter 7 | rel attribute | The icon keyword

Continuing with the `link` element and its `rel` attribute, in this chapter we will be looking at the `icon` keyword. Before we dig into the syntax, let’s discuss what is meant by icon here. I feel comfortable in saying that pretty much everyone has heard the term `favicon`. You may also have encountered an error being logged in the developer console to the effect, `GET http://127.0.0.1:5500/favicon.ico 404 (Not Found)`

What is this icon the browser is looking for?

Well, in this case, the icon in question is the one commonly seen in a browser tab for the website you are currently visiting:

![Screenshot showing a Firefox tab with the MDN Web Docs logo favicon](./fx-favicon.png)

> Screenshot of browser tab showing favicon image for the current site, MDN Web Docs

And the reason for the error? Well, that is two-fold. The first and simplest answer is, that file does not exist 😬. Since you did not even specify that file anywhere in your code, why the heck is the browser even attempting to load it? This is down to the loading algorithm browsers use when it attempts to find a favicon to use for your website.

Because you got the above error, I can make some assumptions.

1. You do not have a `link` element in the `head` of your document with a `rel` attribute using the keyword `icon`
2. You do, but the resource pointed to by the `href` attribute does not exist
3. You do not have a file with the name `favicon.ico` at the root of your website

I can make those assumption in order because that is what the browser will do when attempting to find and load a favicon for your website. In other words, the browser will look for a `link` element with a `rel` attribute using the keyword `icon`. Should it find one, it will attempt to load the resource specified by the `href` attribute. Should the format of the resource not be supported or, the resource fails to load, the browser will attempt to fetch the favicon from `www.yoursite.com/favicon.ico`. Failing that, it will give up and "silently" fail. I put silently in quotes, because, unless you are a developer poking around in devtools, you will be none the wiser that all of the above even happened, or that it resulted in a 404 HTTP error. 😜

Knowing the above, we can take the needed steps to avoid the unhappy outcome we saw above. But wait, if the browser will in the end just look for that file at the root of your website, why not just put the relevant file there and be done with it? That is an option, and you would not be **wrong** for doing it however, why make the poor browser jump through all those hoops if we can just tell it where to find the file we want it to use in a single line of code?

But wait, there is more 😃

Even though the `ico` format has served us well in the past, the web has moved on. The `ico` format was originally conceived of by Microsoft back in the early days of the web as a format that can contain multiple, differently sized versions of the same file. The browser or operating system will then decide which size to use based on the context it is used in, and the screen resolution.

The `ico` format is mostly deprecated and is not used anywhere else on the web platform. We also have more file format options, the array of screen resolutions have exploded, the icon is now used for more than just tabs, **and** we have dark-mode 🌚

What I am trying to say is that the web has evolved and the humble favicon with it.

## icon

As with most(all?) things browser-related, it is very forgiving and will do its utmost to make up for things it does not understand(aka support), or mistakes we as web developers make. Case in point, when a browser encounters a tag, attribute, or value of an attribute it does not understand, it does not just give up and break down, but keeps going, trying to find a way it can get as close to what the developer intended. Failing all else, it will eventually give up and fail silently. Presenting the user with the best possible interpretation of what it could understand. Aren't browsers magical? 🧙‍♂️🧙‍♀️

With this in mind, we start from the most modern favicon approaches and work our way backward for backward support.

### SVG

The easiest way to support the vast array of screen resolutions out there is to use an image format that is scalable. On the web, that image format is SVG aka **S**calable **V**ector **G**raphics. Support for SVG icons is pretty new but, [browser support](https://caniuse.com/#feat=link-icon-svg) is pretty good already. As [some](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/) [folks](https://bugs.chromium.org/p/chromium/issues/detail?id=294179#c72) have discovered, over and above supporting various resolutions, because one can embed CSS inside an SVG, you can even support dark mode with a single SVG icon. 🤯

The first icon we will then add to our `head` is an SVG icon:

```html
<link rel="icon" href="favicon.svg" sizes="all" type="image/svg+xml" />
```

You will notice a new attribute in the above snippet, the `sizes` attribute. This is what allows us to define and specify different sized icons used for different resolutions when using for example the PNG(Portable Network Graphics) image format. Because an SVG can scale up or down infinitely, we use the special keyword, `all`.

### PNG

Should the browser not support SVG icons, it will ignore our line above and look at the next line of code. The next format in line with a much wider level of [browser support](https://caniuse.com/#feat=link-icon-png) is the PNG image format. Because PNG images are [raster-based](https://developer.mozilla.org/en-US/docs/Glossary/Raster_image) and not [vector based](https://www.adobe.com/africa/creativecloud/design/discover/vector-file.html), we do need to specify(and have on disk) a couple of different sizes, we do need to specify(and have on disk) a couple of different sizes:

```html
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
<!-- For Chrome on Android -->
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
```

That covers what is defined in the HTML standard. Unfortunately, there is one more thing we do need. The non-standard `apple-touch-icon` keyword for `rel`.

### apple-touch-icon

Even though this is not a standard, [HTML validators will not error](https://github.com/validator/validator/issues/433#issuecomment-268984140) when present but [Lighthouse will error if it is not present](https://web.dev/apple-touch-icon/). Other platforms also depend on it as it is so [well known and widely used](https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html#L16) so, it is best to include it as well. Thankfully there is no proprietary file format, just the [non-standard keyword and some specific sizes](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html):

```html
<link
  rel="apple-touch-icon"
  href="apple-icon-144x144.png"
  sizes="144x144"
  type="image/png"
/>
<link
  rel="apple-touch-icon"
  href="/media/apple-icon-152x152.png"
  sizes="152x152"
  type="image/png"
/>
<link
  rel="apple-touch-icon"
  href="/media/apple-icon-180x180.png"
  sizes="180x180"
  type="image/png"
/>
```

Are we there yet?

What about `rel="shortcut icon"`? This is another relic of the past, is not defined in the HTML standard, and would only be used to specify the `ico` variant. Beyond that, even specifying the `type` when using an `ico` is [up for debate](https://stackoverflow.com/questions/13827325/correct-mime-type-for-favicon-ico) and contentious. With all of that in mind, if you do want to ensure support for old browsers such as IE8, ensure that you have a `favicon.ico` at the root of your website and you will be A-OK 👌

Phew 💦 And you thought this was going to be a quick one. I sincerely hope you found this useful and insightful and that in the near future, we can all use a single `rel="icon"` with an SVG as its source 🤞

#### Sidenote

So, do you need to make all these images yourself? No, no you do not. Thanks to the [amazing website The Real Favicon Generator](https://realfavicongenerator.net/), you put an SVG in, and you get all the things out 🎊 Want to know about all the research that goes into a tool such as this? [Follow along on their blog](https://realfavicongenerator.net/blog/).

### Related Reading

- [favicon - Chrome on Android](https://realfavicongenerator.net/blog/android-chrome-and-its-favicon/)
- [SVG favicon support](https://caniuse.com/#feat=link-icon-svg)
- [PNG favicon support](https://caniuse.com/#feat=link-icon-png)
- [SVG, Favicons, and All the Fun Things We Can Do With Them](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)
- [The favicon quizz](https://css-tricks.com/favicon-quiz/)
