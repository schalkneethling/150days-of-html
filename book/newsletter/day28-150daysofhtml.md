# Day 28 - Cite, abbreviate, insert, delete

Welcome to day 28!

Continuing with the text-level semantics journey, today we look at cite, q, dfn, abbr, s, ins, and del.

## `cite`

The `cite` element represents the name of a piece of work. This covers a wide variety of topics. From the docs:

> e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, a computer program, etc

[The `cite` element](https://html.spec.whatwg.org/#the-cite-element)

The element can be used when the work is mentioned, referenced in detail, or even just in passing. What is important to remember is that only the title of the work is wrapped with the `cite` element, not the entire reference. The text that is wrapped also does not _have_ to link to the work being referenced. For example:

```html
<p>
  Some of my favourite books by Stephen King are, <cite>Needful Things</cite>,
  <cite>Insomnia</cite>, and <cite>The Tommyknockers</cite>
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

The following example would be an incorrect usage of the element:

```html
<blockquote>
  <cite
    >“Don't be satisfied with stories, how things have gone with others. Unfold
    your own myth.” - Rumi, The Essential Rumi</cite
  >
</blockquote>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

Instead, you would do:

```html
<blockquote>
  “Don't be satisfied with stories, how things have gone with others. Unfold
  your own myth.”
</blockquote>
<p>- Rumi, <cite>The Essential Rumi</cite></p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

And you could of course also do:

```html
<blockquote>
  “Don't be satisfied with stories, how things have gone with others. Unfold
  your own myth.”
</blockquote>
<p>
  - Rumi,
  <cite
    ><a href="https://www.goodreads.com/work/quotes/965212-essential-rumi"
      >The Essential Rumi</a
    ></cite
  >
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

## `q`

The `q` or quote element represents content quoted from a different source. For example:

```html
<p>
  <q>Sometimes the questions are complicated and the answers are simple.</q> -
  Dr. Suess
</p>
```

Because the content contained by a quotation element is meant to be phrasing content(part of a larger sentence perhaps), the element is rendered inline and is not a block-level element like the `blockquote`. Also, unlike the `blockquote` element you do not include your own quotation marks but instead, let the user agent automatically add these.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

If you know the URL of the source of the quoted text, you can provide the URL to the source via the `cite` attribute:

```html
<p>A note from the docs:</p>
<p>
  <q cite="https://html.spec.whatwg.org/#the-q-element"
    >The use of q elements to mark up quotations is entirely optional; using
    explicit quotation punctuation without q elements is just as correct.</q
  >
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

As mentioned when I covered the `cite` attribute previously, a user agent can provide a mechanism by which the user can navigate to the destination specified via the `cite` attribute. Currently, however, I am not aware of any that do and the `cite` attribute is mainly used for private use("e.g., by server-side scripts collecting statistics about a site’s use of quotations").

## `dfn`

The `dfn` or definition element represents the first or initial definition of a term. That in itself is a bit vague, so let’s dig in a little more. What is meant by a term here is for example something like the abbreviation HTML. Using the `dfn` element we can represent the first definition of this term in a couple of ways. Firstly, in the context of a larger phrase, for example.

```html
<p>
  HyperText Markup Language(<dfn>HTML</dfn>) is a markup language that web
  browsers use to interpret and compose text, images, and other material into
  web pages.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

In the above example, the definition element is used to indicate the term being defined by its ancestor paragraph element. Another way the above can be written as follows:

```html
<p>
  <dfn title="HyperText Markup Language">HTML</dfn> is a markup language that
  web browsers use to interpret and compose text, images, and other material
  into web pages.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

In this example, the `title` attribute is used to provide the definition of the term that is being introduced. It is important to note that when a `title` attribute is present, it must _only_ contain the definition of the term. You can also couple the `dfn` element with the `abbr` element, for example, let’s rewrite the above again slightly:

```html
<p>
  <dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn> is a markup
  language that web browsers use to interpret and compose text, images, and
  other material into web pages.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

Now the definition element represents the initial definition of the term and the definition is provided by the `title` attribute of the `abbr` element.

> NOTE: If you look at the live example and hover your mouse pointer over the term HTML for the last two examples, you will notice that the browser shows a tooltip with the full definition. However, notice that the `abbr` element also receive special styling by the browser. In most cases, the second example makes the most semantic sense and is the preferred method.

Let’s consider another example. Say we introduce the term HTML as we did above. Several paragraphs later, we use the term again. This is clearly not the initial definition so, we will not use the `dfn` element.

```html
<p>
  <dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn> is a markup
  language that web browsers use to interpret and compose text, images, and
  other material into web pages.
</p>
<p>...multiple paragraphs later</p>
<p>
  You can read more about the
  <a href="https://en.wikipedia.org/wiki/HTML"
    >history of <abbr title="HyperText Markup Language">HTML</abbr>on
    Wikipedia</a
  >.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

In the above example, this is most likely more than enough but, should you wish to give a user an easy way to get to the initial definition within its larger context, you can use an anchor link with a fragment identifier as we have discussed before. Let rewrite the last example to demonstrate this use case.

```html
<p>
  <dfn id="html-definition"
    ><abbr title="HyperText Markup Language">HTML</abbr></dfn
  >
  is a markup language that web browsers use to interpret and compose text,
  images, and other material into web pages.
</p>
<p>...multiple paragraphs later</p>
<h4>
  <a href="#html-definition"
    ><abbr title="HyperText Markup Language">HTML</abbr></a
  >
  History
</h4>

<p>
  Read more about the
  <a href="https://en.wikipedia.org/wiki/HTML">language history on Wikipedia</a
  >.
</p>
```

Clicking the link inside the `h4` element will take the user to the initial definition of the term within its larger context.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

## `abbr`

After the previous section, this element needs no introduction. 🤪 The `abbr` element represents an abbreviation or acronym. While not common, you do not _have_ to provide an expansion of the abbreviation via the `title` attribute. Both of the abbreviations in the following example are valid ways to markup an abbreviation or acronym.

```html
<p>
  The <abbr>tl;dr</abbr> is that while
  <abbr title="I am not a doctor">IANAD</abbr>, you should probably eat more
  fruits 🍓 and vegetables 🥦.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

Generally though, if you do not intend to provide an expansion for the abbreviation or acronym, there is no need to mark it up using this element.

## `s`

The `s` element represents content that is no longer relevant or accurate. While its contents are rendered with a strikethrough, it’s _not_ meant to be used to indicate document edits. There are specific elements for those use cases which we will discuss next. This element is more appropriate for instances such as the following:

```html
<h3>Celebrate the 4<sup>th</sup> of May</h3>
<p>Get your baby Yoda figurine today for only <s>$5.99</s>, $2.99</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

## `del` and `ins`

While not under the heading of text-level semantics but under the sub-heading "Edits", I thought it an opportune time to discuss these two elements here. The basics around these two elements are self-explanatory. You use the `del` element to represent a deletion and the `ins` element to represent an addition. For example:

```html
<pre>
<code>
<del>var</del> <ins>const</ins> container = document.querySelector(".main");
</code>
</pre>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

In the example, we indicate that the `var` keyword was removed(visually indicated with a strikethrough) and replaced by the `const` keyword(visually indicated by an underline). For both elements, you can go a step further.

```html
<pre>
<code>
<del cite="https://github.com/org/repo/pulls/42" datetime="2020-10-11">var</del> <ins cite="https://github.com/org/repo/pulls/42" datetime="2020-10-11">const</ins> container = document.querySelector(".main");
</code>
</pre>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

Here we are using the two common attributes for both elements to:

1. Provide a link to a document(pull request in this case), that explains the reason for the change. As with other elements that support the `cite` attribute, user agents can provide a means for the user to navigate to the URL but none currently do.
2. Provide a date and optional time on which the changes were made. The value of the `datetime` attribute needs to be a valid date, or date and time string. as with the `cite` attribute, the information is not exposed by the user agent in a meaningful way. It would be up to the developer to extract and display the information if relevant.

Due to the way [implied paragraphs](https://html.spec.whatwg.org/#paragraph) are defined, always explicitly mark up paragraphs using the paragraph tag. This allows you to indicate the removal and/or addition of multiple paragraphs without creating confusion.

```html
<del>
  <p>This paragraph has been removed.</p>
  <p>This paragraph has been removed.</p>
</del>

<ins>
  <p>These paragraphs have been added.</p>
  <p>These paragraphs have been added.</p>
</ins>
```

You can [read additional information regarding the above](https://html.spec.whatwg.org/#edits-and-paragraphs) on the specification page.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

When it comes to lists, you cannot wrap a list item or multiple list items with either of these elements as they are not allowed to be children of the ordered or unordered list parent elements. For lists then, you need to wrap the contents of each list item. For example:

```html
<h2>A list containing <del>dog</del><ins>cat</ins> breeds</h2>
<ul>
  <li><del>Alaskan Klee Kai</del></li>
  <li><del>Alaskan Malamute</del></li>
  <li><ins>Abyssinian</ins></li>
  <li><ins>Aphrodite Giant</ins></li>
</ul>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/QWpLOVx)

That was a _lot_ to cover, and it leaves us with only 4 remaining text-level elements which we will cover tomorrow.

Until tomorrow, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
