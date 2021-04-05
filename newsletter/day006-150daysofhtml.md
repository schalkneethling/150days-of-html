# Day 6

Welcome to Day 6!

Today we keep digging into the `link` element and specifically, the `rel` attribute. The `rel` attribute indicates the relationship between the current document and the value of the attribute. The `rel` attribute is required and should contain one, or more, valid keywords in order for a link to be created. What do I mean by this? So, if you for example have the following HTML document:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Styled Heading</title>
    <link href="style/main.css" media="screen" />
  </head>
  <body>
    <h1>
      I am Red!!
    </h1>
  </body>
</html>
```

In `main.css` you have the following style rule:

```css
h1 {
  color: red;
}
```

Loading the document in your browser will show the heading but, the colour will be set as black. 😮 Because the `rel` attribute is not present, the browser creates no link and thus, does not load the CSS file at all. If you were to add a `rel` attribute, but set its value to say, "await", it would produce the same result. That is because the value "await" is not a valid keyword.

In order for the link to be created and for the stylesheet to be loaded, you need to specify it as follows:

```html
<link rel="stylesheet" href="style/main.css" media="screen" />
```

Reloading the document will now show the heading as red. 🎉

#### A sidenote

The latter of the two incorrect usages above is a  strategy often used to lazy load CSS files that are not critical on first load. The crux of it is as follows. You add a `link` element to the head of the document but, set the value of the `rel` attribute to an invalid keyword, say, "await". As you saw earlier, this will result in the browser not loading the CSS file at all.

At the end of the HTML document, you would then have some JavaScript that swaps out the invalid keyword for a valid keyword:

```javascript
(function() {
  "use strict";
  
  const lazyStylesheet = document.querySelector("[rel='await']");
  lazyStylesheet.setAttribute("rel", "stylesheet");
})();
```

Once the above JavaScript executes(generally when the DOM(document) has finished loading), the browser will detect the change, recognise the `rel` attribute, load, parse and apply the CSS. Neat!

## alternate

The `alternate` keyword of the `rel` attribute suggests that it creates a link to an alternative version of the current document. While that is true, it is not the whole story. The meaning of the keyword depends on the other attributes used along with it or, the keyword combination.

First up, keyword combination. With regard to accessibility, there are a lot of things to take into account when designing and developing for the web. Colour contrast, the size and the type of font are some of those considerations. Sometimes though, it is hard or even impossible to address everyone's needs in the base styling of your website. But this does not mean that all hope is lost. One way to offer a great experience to everyone is through the use of alternate stylesheets.

Those last two words kinda gives away the answer already 😃. Let's look at an example:

```html
<link rel="stylesheet" href="style/main.css" media="screen" />
<link rel="alternate stylesheet" href="style/high-contrast.css" media="screen" />
<link rel="alternate stylesheet" href="style/dyslexia.css" media="screen" />
```

As you can see above, we are linking three stylesheets here. One that is the main stylesheet of our website and two alternative stylesheets. The content of these could be something like:

```css
/* main.css */
body {
  background-color: #fff;
  color: #212121;
  font: 16px/1.5 sans-serif;
}

/* high-contrast.css */
body {
  background-color: #212121;
  color: #fff;
}

/* dyslexia.css */
body {
  font-family: OpenDyslexic;
}
```

Loading the document in a browser will show our content styled as defined in `main.css`. Those other two stylesheets are available to our users though albeit not easily and intuitively unfortunately. In Firefox click on the `View` menu and then hover over `Page Style`. 🤔 Wait, where are our alternate stylesheets?

For them to become available, there is one final piece of the puzzle that need to be added. The `title` attribute.

```html
<link rel="stylesheet" href="style/main.css" media="screen" />
<link rel="alternate stylesheet" href="style/high-contrast.css" media="screen" title="High Contrast" />
<link rel="alternate stylesheet" href="style/dyslexia.css" media="screen" title="OpenDyslexic" />
```

And it makes complete sense. With the `title` attribute set, the purpose of our alternate stylesheets is clearly defined. Reloading the document in the browser now and clicking on `View > Page Style` will surface our alternatives in the UI.

### ![Screenshot 2020-05-27 at 05.24.09](/Users/schalkneethling/Documents/150daysofhtml/Screenshot 2020-05-27 at 05.24.09.png)

A couple of things to note here. All three stylesheets will be loaded by the browser but, the alternate stylesheets will be given the lowest priority and will be loaded in a non-blocking manner. The second thing is that the stylesheets are not loaded in an additive manner i.e. each stylesheet is loaded by itself. This is unfortunate and makes the use case of these alternate stylesheets via the native client almost useless except for some rare cases such as a super stripped down version of the site(something akin to a reader mode).

With that said, using a similar technique to the one shown for lazy loading CSS, you could build a simple UI for you website and additively load these stylesheets as user select an alternate version. I am not going to dig into the details here but, it would be something useful to provide to end users.

### with `hreflang`

As mentioned earlier, the meaning of `alternate` depends on the keywords it is used with as well as the other `attributes`. The `hreflang` attribute is one of those that affect the meaning of `alternate`. As the name suggests, this attribute defined an alternate language for the current page. For example, assuming our current page is English:

```html
<link rel="alternate" href="/fr/document.html" hreflang="fr" title="French version" />
```

The above is used by search engines to determine whether there is a version of the document available in the users language and, it prevents the problem of [duplicate content](https://yoast.com/duplicate-content/) that can lead to negative outcomes for your site with regard to search engine optimisation. You can of course again 😄, build a UI for your users to easily access alternate language versions of the current page.

Whle we are talking about alternate versions of the same page, it is an opportune time to quickly discuss another keyword of the `rel` attribute.

#### canonical

When specifying an alternate version of the current document, it is also very important to indicate that the current document is the canonical(recognised, authoritative, authorised, accepted) version of this document. For example:

```html
<link rel="canonical" href="https://www.example.com/" />
<link rel="alternate" href="/fr/document.html" hreflang="fr" title="French version" />
```

However, this is used for the benefit of search engines and to avoid the duplicate content problem mentioned before. According to the HTML standard, `canonical` is not a valid keyword of the `rel` attribute.It is mentioned here because search engine ranking plays such a major part in how your content is found on the web.

### with `type`

Getting back to the standard, next up is the use case of `alternate` with the `type` attribute. As you can probably gather, using these two together is a means of specifying an alternate type or variant of the current document. A common use case is to point to a syndication feed:

```html
<link rel="alternate" type="application/atom+xml" href="posts.xml" title="All the posts!" />
```

There are many, many tools and browser extensions that will surface this information to users and make it easy for them to subscribe to the feed of a blog or website.

You can also use `type` and `hreflang` together with `alternate`. For example:

```html
<link rel="alternate" href="/en/monkey-habits.pdf" hreflang="en" type="application/pdf" title="Get the English PDF version" />
<link rel="alternate" href="/fr/monkey-habits.pdf" hreflang="fr" type="application/pdf" title="Get the French PDF version" />
```

That is where we will end for today. As you can see this seemingly simple `link` element is crazy useful, and we are not done yet. 😜 Come back tomorrow for some more linking fun 🎈🎈

### Related Reading

- [Alternative Stylesheet Extension for Chrome](https://chrome.google.com/webstore/detail/alt-css/deaodobjfcolfhkecnnghdclnlmfjdje/related)
- [hreflang Ultimate Guide on Yoast](https://yoast.com/hreflang-ultimate-guide/)

Until tomorrow, keep making the web awesome! o/\o

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)