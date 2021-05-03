# Day 24

Welcome to day 24!

Yesterday we looked at the anchor element and got pretty deep into the weeds of what you can do with this seemingly simple element. Today we continue our look at text-level semantic elements and specifically, `em`, `strong`, `b`, `i`, and `mark`.

## `em`

Not to be confused with the CSS unit of measure, the `em` element is used to indicate emphasis. Now, before we go any further we need to take a slight detour. So, as stated, the `em` element is used to indicate emphasis. Now, the next element we will discuss, namely `strong`, is used to indicate importance. So what is the difference then?

The difference is subtle but important. Merriam-Webster provides the following definition for emphasis:

> a particular prominence given in reading or speaking to one or more words or syllables

[Merriam-Webster definition](https://www.merriam-webster.com/dictionary/emphasis)

And here is the definition for important:

> marked by or indicative of significant worth or consequence : valuable in content or relationship

[Merriam-Webster definition](https://www.merriam-webster.com/dictionary/important)

That helps to some extent but, looking at the synonyms for these words provides even more clarity. Synonyms for emphasis include accent, accentuation, stress, underscoring, and weight. And for important, consequential, earth-shattering, eventful, historic, meaningful, momentous, and significant. My summary of all of this is that emphasis is used to convey a tone of voice, to indicate emotion. While important is almost devoid of emotion and is about statements of fact, or highlighting something that could be consequential.

Why all this detail? Well, because these elements are about conveying semantic meaning and, while they do have a different visual representation, that should not be why you choose one over the other. As it conveys semantic meaning, it is, or could be used by various technologies such as screen readers to influence the way a word or phrase is read to the user. If you use the incorrect element, your message might get muddled or miss its intent.

The tl;dr(too long, didn’t read) is: Use `em` when it’s about the tone of voice and emotion. Use `strong` when it’s about conveying importance or not paying attention to the content is consequential.

Ok, with that hopefully cleared up, 🙃 we can look at using the `em` element.

Now, with the following example, the difference might become even clearer. You might have heard about, or read about, the fact that where one places emphasis in a sentence can change the meaning of the sentence itself. Using [an example from the English language StackExchange website](https://english.stackexchange.com/questions/258653/8-in-1-sentence-depending-on-emphasis).

```html
<p><em>She</em> said she did not take his money.</p>
<p>She <em>said</em> she did not take his money.</p>
<p>She said <em>she</em> did not take his money.</p>
<p>She said she <em>did</em> not take his money.</p>
<!-- and so forth -->
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

As you read the sentence above and change your emphasis based on the placement of the `em` element, you will notice how the meaning of the sentence changes as you do. Using `strong` in place of `em` above, will not convey the same semantic meaning and so, those subtle changes of meaning will not be conveyed.

Another aspect of the `em` element that I did not know about before starting to really dig deep into the HTML language is that you can nest `em` elements. Why would you want to do that? Well, the emphasis or amount of stress placed on a word is determined by the number of ancestor `em` elements. Let's look at two examples:

```html
<p><em>Cats are cute animals</em></p>
<p>
  <em>Cats are <em>cute</em> animals</em>
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

In the second of the above examples, the word "cute" will receive double the emphasis as the overall sentence. A small detail, but something that can be used to great effect.

## `strong`

As discussed, the `strong` element is used to communicate importance. For example:

```html
<div class="note">
  <h3><strong>Warning</strong></h3>
  <p>
    Be aware that this toy has small parts that can be a
    <strong>choking hazard</strong>.
  </p>
</div>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

You will note that I used the `strong` element inside a heading element in the example above. While headings do indicate and contribute to the structure and outline of a document, they do not by themselves indicate importance. It is therefore completely valid to use the `strong` element inside a heading element.

As with the `em` element, the level of importance increase by the number of ancestors. For example:

```html
<p>
  <strong
    >Warning: Be aware that this toy has small parts that can be a
    <strong>choking hazard</strong> </strong
  >.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

## `b`

Unlike the `em` and `strong` elements, the `b` element does not convey any additional meaning, tone, or importance. It’s a utility element to bring visual attention to words or phrases within a piece of content without semantically conveying any additional importance or changing the tone of voice. For example:

```html
<blockquote>
  <p>
    “Your task is not to <b>seek</b> for love, but merely to <b>seek</b> and
    find all the barriers within yourself that you have built against it.”
  </p>
</blockquote>
<p>&mdash; Rumi</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

> NOTE: The `b` element should be used as a last resort when there is no other more appropriate element. For example, when highlighting words, consider whether the `mark` element, which we will discuss a little later, might be more appropriate.

## `i`

Historically the `i` element was used as a means to visually style text as italics. While the default visual styling still is this way, that is not [how the use of the element is defined in the specification](https://html.spec.whatwg.org/#the-i-element). The actual definition of this element is rather broad but, in essence, it is to be used to markup text that is offset from the normal prose either by voice, mood, or quality of text. For example, to markup a taxonomy term in a sentence.

```html
<p>Cannabis is a genus of flowering plants in the family <i>Cannabaceae</i>.</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

It can also be used to markup idioms from another language, for example:

```html
<p>
  <i lang="fr">Que Sera, Sera</i>. Whatever will be, will be. The future’s not
  ours to see. <i lang="fr">Que Sera, Sera</i>.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

> NOTE: As with the `b` element, care should be taken to ensure that there is not a more appropriate element that can be used.

## `mark`

The `mark` element is used to mark or highlight a word or a run of text due to its relevance in another context. An example use case will make this clear.

```html
<!-- here we assume a user searched for the word foreach -->
<div class="search-result">
  <h2>Array.prototype.<mark>forEach</mark></h2>
  <p>
    The <mark>forEach</mark>() method executes a provided function once for each
    array element.
  </p>
</div>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

In the above example, we use the `mark` element to highlight matches of the search term within the search result.

```html
<p>I love all the <mark>colours</mark> of the rainbow.</p>
<p>In the above sentence we can see the UK spelling of the word color.</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/eYgwMwp)

Above we use it to highlight the word we will be referring to in the follow-on sentence.

> NOTE: By default, browsers will render `mark` elements with a bright yellow background as can be seen in the live examples linked above. This can be changed using CSS, but the default is a very common design pattern to use.

And that is it for today. I hope you learned something new you can apply to your work. Until tomorrow, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
