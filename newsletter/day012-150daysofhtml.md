# Day 12

Welcome to Day 12!

Today we look at the `meta` element. As its name suggests, this element is used to provide meta information about the current document. With this element you can provide document-level metadata, set the character encoding as well as provide pragma directives(information for the "compiler", in this case the browser engine).

## `charset`

The `charset` attribute of the `meta` element sets the character encoding to use when parsing the document. This is important to ensure accurate interpretation of the content of your document by the document parser. While technically not mandatory, there is a performance benefit to be gained by specifying the character encoding this way. But there is a catch 😜

The [algorithm used by browsers to determine the character encoding](https://html.spec.whatwg.org/multipage/parsing.html#determining-the-character-encoding) is rather complex and can potentially involve many steps. If the data used by some of the earlier steps of the algorithm is omitted, the browser will attempt to determine the encoding using the bytes it has received so far.  Should the browser later determine that this encoding was incorrect, the parser will be reinvoked with the new encoding.

It is therefore best practice to specify the encoding upfront but... 😁 to gain any performance benefit from specifying the encoding using the `meta` element, the element needs to be present within the first 1024 bytes of the document 🙀 The reason for this is because of item three of the encoding sniffing algorithm. From the documentation:

> The user agent may wait for more bytes of the resource to be available, either in this step    or at any later step in this algorithm. For instance, a user agent might wait 500ms or 1024    bytes, whichever came first. In general preparsing the source to find the encoding improves    performance, as it reduces the need to throw away the data structures used when parsing upon    finding the encoding information. However, if the user agent delays too long to obtain data to    determine the encoding, then the cost of the delay could outweigh any performance improvements    from the preparse.

Thankfully this is easy to achieve by following this common pattern:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    ...
```

Also, there must not be more than one `meta` element with the `charset` attribute per document and, when present, the value of `charset` must be `UTF-8`.

> Side Note: Why `UTF-8`? Generally, because it simplifies page authoring and avoid unexpected problems with regard to form submissions and URL encoding. If you wish to dig deeper into this topic, have a read over the [following issue on Github](https://github.com/w3c/html/issues/1039) as well as the resulting [pull request](https://github.com/whatwg/html/pull/3091).

## `http-equiv`

The `http-equiv` attribute is used to specify pragma directives as mentioned earlier. [There are seven in total](https://html.spec.whatwg.org/#pragma-directives), two of which are non-standard and a third which duplicates the functional purpose of `charset`. We will therefore only look at the four remaining directives.

### `default-style`

When set, the `content` attribute specifies the default stylesheet to be applied to the current document. The value of the `content` attribute should match the `title` attribute of one of the stylesheets linked via a `link` element. Phew 😁

Let's look at an example to make those words more concrete.

```html
<meta http-equiv="default-style" content="default" />
    <title>http-equiv, default-style - Day 12 - 150 Days of HTML</title>
    <link rel="stylesheet" type="text/css" href="./css/default.css" media="screen"
        title="default" />
    <link rel="stylesheet" type="text/css" href="./css/main.css" media="screen"
        title="main" />
```

Where `default.css` contains the following:

```css
body {
  background-color: #212121;
  color: #fff;
}

h1 {
  font-size: 5rem;
}

```

And `main.css` contains the following:

```css
body {
  background-color: #fff;
  color: #212121;
}

h1 {
  font-size: 4rem;
}

```

Looking at the above, the assumption would be that the page would have a white background white dark text(because of the cascade) but, in a supporting browser(currently only Firefox), the page will actually have a dark background with white text.

> Note: Both stylesheets are still loaded by the browsers but only the stylesheet set as default will be applied to the document.

The mechanism of switching between the stylesheet set as default and the main stylesheet is the same as we discussed previously when we covered the `alternate` token of the `rel` attribute.

## `refresh`

The `http-equiv` refresh state provides two variants based on the value of its `content` attribute. The first variant allows a developer to set an interval rate at which the current page will refresh. This could be useful for a live update feed for example. Let's look at an example using a simple incrementing counter.

In the `head` of our document we have the following:

```html
<meta http-equiv="refresh" content="2" />
```

The value of the `content` attribute here indicates the number of seconds before the next page refresh. In the `body` of our document we then have the following:

```html
<h1>🎪 This page refreshes every two seconds</h1>
<p>The below counter will increment by 1 for every refresh</p>
<div id="output"></div>
<script>
    (function () {
        "use strict";
        const output = document.getElementById("output");
        let counter = sessionStorage.getItem("counter");

        if (!counter) {
            sessionStorage.setItem("counter", 0);
        } else {
            sessionStorage.setItem("counter", parseInt(counter, 10) + 1);
        }

        output.textContent = counter;
    })();
</script>
```

Every time the page is refreshed, the little piece of JavaScript will output the `counter` value, increment the `counter` by one, and store it back to `sessionStorage`. This will continue to happen until the user closes the tab or window.

A second use case is to redirect the user to a new page. For this example, let's say you used to have a blog running on `myblog.com` but have decided to move to `myblog.io`. All of your previous readers might have the `.com` bookmarked though. Using the `refresh` state of `http-equiv` you can put a redirect in place but, also inform users why they are being redirected.

For this example we have the following in the `head` of the document:

```html
<meta http-equiv="refresh" content="2; URL=https://myblog.io" />
```

In the `body` of the document you can then have the following:

```html
<h1>My blog has moved to <a href="https://myblog.io">https://myblog.io</a></h1>
<p>You will automatically be redirected in 2 seconds. 🎉 If you are not, click the link above.</p>
```

## `x-ua-compatible`

This pragma directive is exclusive meant to encourage Internet Explorer to more close follow the specifications. Even though it is a pragma directive meant for a single browser, this directive is part of the official standard aka normative.

The syntax for this directive is:

```html
<meta http-equiv="x-ua-compatible" content="IE=edge" />
```

> Note: The word edge here, is not to be confused with the Microsoft Edge browser. It here instructs Internet Explorer to use the very latest version of its parser. For a more complete discussion [see the following questions and answer on StackOverflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do).

## 🔐 `content-security-policy`

A discussion of Content Security Policies is beyond our scope but you can find details in the related reading section below. Using the `content-security-policy` directive you can mitigate the risk of cross-site scripting attacks by disallowing inline script execution and blocking plugin content as follows:

```html
<meta http-equiv="content-security-policy" content="script-src 'self'; object-src 'none'" />
```

Assuming we have a document with the following inside its `body`:

```html
<div id="output"></div>
<script src="js/external.js"></script>
<script>
    (function () {
        const output = document.getElementById("output");
        output.textContent = "I am writing to you from an inline script";
    })();
</script>
```

And that `external.js` contains the following:

```javascript
(function () {
  const output = document.getElementById("output");
  output.textContent = "I am writing to you from an externally linked script";
})();
```

Opening the document in a browser without the `content-security-policy` in the `head` will result in the output, "I am writing to you from an inline script" being writing to the document. Adding the `CSP` to the `head ` and refreshing the document, will prevent the inline JavaScript from being executed and you will instead see, "I am writing to you from an externally linked script", written to the document instead.

That covers the topics for discussion today. Tomorrow we will look at the `name` attribute of the `meta` element and its related standard meta names. Until then, keep making the web awesome! o/\o

### Related Reading

- [Alternative stylehseets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets)
- [Content Security Policy Standard](https://w3c.github.io/webappsec-csp/)

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)