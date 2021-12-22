---
title: Chapter 25 | data, time, code, var, samp, and kbd elements
keywords: html, html standard, how-to, learn html
description: Continuing with the text-level semantics elements, in this chapter we cover data, time, code, var, samp, and kbd.
menu:
  book:
    weight: 25
---

# Chapter 25 | `data`, `time`, `code`, `var`, `samp`, and `kbd` elements

Continuing with the text-level semantics elements, in this chapter we cover `data`, `time`, `code`, `var`, `samp`, and `kbd`.

## `data`

Not to be confused with the `data` attribute, the `data` element represents, well, data. The `data` element has a required `value` attribute that represents a machine-readable representation of its contents. For example:

```html
<p><data value="8">Eight</data></p>
```

Another use for the `data` element is when used in conjunction with JavaScript to, for example, ease sorting of a data table.

```html
<table>
  <caption>
    Girl Scout Cookie Sales
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th class="sortable">Cookies sold</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sally</td>
      <td>
        <data class="cookies-sold" value="25">13 Ginger, 12 Chocolate</data>
      </td>
    </tr>
    <tr>
      <td>Stephanie</td>
      <td>
        <data class="cookies-sold" value="19">10 Ginger, 9 Chocolate</data>
      </td>
    </tr>
  </tbody>
</table>
```

In the above table, the `data` element is used to represent the total number of cookies sold by each child. This makes implementing a sorting function for the "Cookies sold" column much simpler than having to parse the numbers from the text content, calculate the sum, and then apply a sort.

Another use case is to combine the `data` element with [microdata](https://html.spec.whatwg.org/#microdata).

```html
<h1 itemscope>
  <data itemprop="product-id" value="B07C85Q5NJ"
    >STAR WARS The Complete Saga (Episodes 1-6)</data
  >
</h1>
```

## `time`

Whereas the `data` element is a generic container for representing human and machine-readable content, the `time` element is specifically meant to represent dates and time values. While the `value` attribute of the `data` element is required, the `datetime` attribute of the `time` element is not. While this is valid, the most common use case for the `time` element is to define both a human and machine-readable format of the date, time, or date and time.

```html
<p>Event date and time: <time>2011-11-18T14:54Z</time></p>
```

The above is entirely valid but, it would probably be more user friendly to represent the information as follows:

```html
<p>
  Event date and time:
  <time id="event-date-time" datetime="2011-11-18T14:54Z"
    >Fri, Nov 18 2011 at 16:54(GMT+2)</time
  >
</p>
```

With the above you have both a human-readable representation and a machine-readable format you can parse with JavaScript, for example:

```javascript
const eventDateTimeString = document.getElementById("event-date-time");
const output = document.getElementById("output");
const eventDateTime = new Date(eventDateTimeString.getAttribute("datetime"));
output.textContent = eventDateTime;
// Fri Nov 18 2011 16:54:00 GMT+0200 (South Africa Standard Time)
```

### Live Codepen - Combining the `time` element’s `datetime` attribute with JavaScript

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/9290e342728239a140b6980307059dd6?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Combining the time element’s datetime attribute with JavaScript live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/9290e342728239a140b6980307059dd6)

To learn what constitutes a valid date and time format that can be used with the element it is best to [refer to the official documentation here](https://html.spec.whatwg.org/#the-time-element).

## `code`

We briefly touched on this element earlier when discussing the `pre` element. As its name suggests, this element is used to markup computer code. It can be used both inline or to markup an entire section of code.

For example inline it can be used as follows:

```html
<p>
  <code>forEach()</code> calls a provided <code>callback</code> function once
  for each element in an array in ascending index order. It is not invoked for
  index properties that have been deleted or are uninitialized.
</p>
```

Or to markup an entire code example(in these instances it is best to couple it with the `pre` element so that the browser respects intended whitespace):

```html
<pre>
<code>
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
</code>
</pre>
```

### Live Codepen - Combining the pre and code elements

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/8999a6b65ece68d499d6cb4f5b5ff474?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Combining the pre and code elements live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/8999a6b65ece68d499d6cb4f5b5ff474)

> NOTE: As you will notice from the live examples, the browser will use a [monospaced font](https://en.wikipedia.org/wiki/Monospaced_font) for content marked up with the `code` element.

## `var`

Again, this is not to be confused with the JavaScript `var` keyword but, it _is_ used to markup variables. This does not have to be a variable in a programming sense but, can also be used to markup mathematical variables as well as terms used as placeholders in content.

```html
<p><var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
<p>When 2 is added to the product of 6 and <var>X</var>, the result is 20.</p>
<p>What is the value of the number?</p>
```

Or alternatively in a programming context:

```html
<p><code>const <var>container</var> = document.getElementById('container');<code></p>
```

### Live Codepen - Using the `var` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/ebb813558062218d2ba3e903cbfc97f8?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the var element live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/ebb813558062218d2ba3e903cbfc97f8?editors=1000)

## `samp`

Not to be confused with the [African food of the same name](https://en.wikipedia.org/wiki/Samp) 😀 (love me some samp and beans #nomnom), the `samp` element represents the output from another program or computing system.

```html
<pre>
<samp>
❯ git pull origin master
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Total 21 (delta 5), reused 5 (delta 5), pack-reused 16
Unpacking objects: 100% (21/21), 5.89 KiB | 464.00 KiB/s, done.
</samp>
</pre>
```

The above shows the output of a [Git command](https://git-scm.com/) ran in a [Terminal application](<https://en.wikipedia.org/wiki/Terminal_(macOS)>) and combined with the `pre` element is a perfect use case for the `samp` element.

### Live Codepen - Using the `samp` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/41f39cbdbd9ee630eb152c38dd60a6e8?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the samp element live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/41f39cbdbd9ee630eb152c38dd60a6e8)

## `kbd`

Where the `samp` element was for computer output, the `kbd` is meant to markup user input, commonly keyboard input.

```html
<p>
  To take a screenshot of a portion of the screen on macOS use <kbd>Cmd</kbd
  ><kbd>+</kbd><kbd>Shift</kbd><kbd>+</kbd><kbd>4</kbd>
</p>
```

You can also nest the `kbd` element inside a `samp` element. In this case, it represents the input as it was echoed by the system.

```html
<pre>
❯<kbd> echo 'Hello'</kbd>
<samp><kbd>Hello</kbd></samp>
</pre>
```

When a `kbd` element contains a `samp` element it represents input based on system output.

```html
<pre>
❯ <kbd><samp>cat renovate.json</samp> | grep "packageRules"</kbd>
  <samp>"packageRules": [</samp>
</pre>
```

### Live Codepen - Using the `kbd` element

{{< iframe iframesrc="https://codepen.io/schalkneethling/embed/preview/1444ab962aa56e69eadb64719d2d3d9a?default-tab=html%2Cresult&editable=true" width="100%" height="500" scrolling="no" class="code-frame" title="Using the kbd element live example" >}}

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/1444ab962aa56e69eadb64719d2d3d9a?editors=1000)

In the above example, the entire line `cat renovate.json | grep "packageRules"` represents user input, but the result(output) of `cat renovate.json` is piped(`|`) to the `grep "packageRules"` as input. The last line is then the output of executing the entire string of user input. 🙃 That is all to say that you can go pretty crazy and detailed with the combination of all of these elements but, it is often not needed. Always be mindful to use the appropriate elements, and aim for the simplest solution that effectively conveys the message both semantically and visually.

That then concludes our exploration of representing various types of data using text-level semantics.
