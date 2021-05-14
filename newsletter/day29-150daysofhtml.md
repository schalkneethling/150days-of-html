# Day 29 - Concluding text-level semantics

Welcome to day 29!

Today we conclude our look at text-level semantics. The elements we cover today are, `span`, `br`, `wbr`, and `u`.

## `span`

You can think of the `span` element as the inline cousin of the `div` element. By itself, it does not represent anything but is a general purpose container. One common use for the `span` element is to wrap a specific piece of text that we wish to hide visually but, still have available for users of assistive technologies, for example, screen readers.

```html
<a href="https://twitter.com" class="icon twitter"
  ><span class="visually-hidden">Go to Twitter.com</span></a
>
```

If you look at the example below you will notice that you can see the Twitter icon and that it is clickable but, you do not see the text that is inside the hyperlink element. If a screen reader focuses on this element, however, the screen reader software will read aloud the content of the hyperlink.

For example, VoicerOver on macOS will say, "link, Go to Twitter.com".

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxqbvoZ)

Another use case is to apply a specific font, style, and color to certain words or phrases for branding purposes. For example, let’s take the word "screenAML".

```html
<h2><span class="branded">screen</span>AML</h2>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/qBrdddq)

## `br`

The `br` element represents a line break. This element should only be used if it is actually part of the content. For example when marking up poems.

```html
<h2>
  <a href="https://www.poemhunter.com/poem/o-captain-my-captain/"
    ><cite>O Captain! My Captain</cite></a
  >
</h2>
<p>
  O CAPTAIN! my Captain! our fearful trip is done;<br />
  The ship has weather'd every rack, the prize we sought is won;<br />
  The port is near, the bells I hear, the people all exulting,<br />
  While follow eyes the steady keel, the vessel grim and daring:<br />
  But O heart! heart! heart!<br />
  O the bleeding drops of red,<br />
  Where on the deck my Captain lies,<br />
  Fallen cold and dead.
</p>
<p>
  O Captain! my Captain! rise up and hear the bells;<br />
  Rise up--for you the flag is flung--for you the bugle trills;<br />
  For you bouquets and ribbon'd wreaths--for you the shores a-crowding;<br />
  For you they call, the swaying mass, their eager faces turning;<br />
  Here Captain! dear father!<br />
  This arm beneath your head;<br />
  It is some dream that on the deck,<br />
  You've fallen cold and dead.
</p>
<p>&mdash; Walt Whitman</p>
```

The line break element is a self-closing element and does not itself contain any content.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/NWpqqbo)

## `wbr`

Unlike the line break element, the `wbr` element indicates a break opportunity. This is best explained through an example.

```html
<p>
  Even if you’ve never seen
  <a href="https://en.wikipedia.org/wiki/Mary_Poppins_(film)"
    ><cite>Marry Poppins</cite></a
  >
  you have probably heard the word
  <span class="large-text">supercalifragilisticexpialidocious</span>
</p>

<p>
  Even if you’ve never seen
  <a href="https://en.wikipedia.org/wiki/Mary_Poppins_(film)"
    ><cite>Marry Poppins</cite></a
  >
  you have probably heard the word
  <span class="large-text"
    >super<wbr />califragilistic<wbr />expialidocious</span
  >
</p>
```

When looking at the example below you will notice that while in the first paragraph the word "supercalifragilisticexpialidocious" does not break but drops to its own line, in the second paragraph, it breaks at the break opportunities we provided using the `wbr` element.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/PopqqOy)

## `u`

While the `u` element is rendered as an underline by default, this is not a general-purpose element used to add underlines to a span of text. It is commonly used to indicate a [proper name in Chinese text](https://en.wikipedia.org/wiki/Proper_name_mark) or, the indicate a misspelled word. For example:

```html
<p>我來自<u>德國</u>。</p>
<p><u>Apparantly</u> there has been an <u>assasination</u> attempt today.</p>

<p>You can change how the underline renders using CSS</p>
<p class="spellcheck">
  <u>Apparantly</u> there has been an <u>assasination</u> attempt today.
</p>
```

> NOTE: Because the `u` element is rendered with an underline, it can create confusion with hyperlinks and so, care is to be taken when using this element so as to avoid confusion.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/GRWJJYw)

That’s a wrap for text-level semantics. Before we end this section and move onto embedded content, there are a few link types that we have not yet covered. Hard to believe I know 😀 🙃 So in closing, let’s take a look at these.

## `bookmark`

This value can be used with the anchor and `area` elements. The value of the `href`, when used with the `bookmark` keyword, is intended to provide a [permalink](https://www.reliablesoft.net/what-is-a-permalink/) for its closets `article` ancestor element. Permalinks are generally also easy to type and remember, for example:

```html
<article>
  <h2>What is a permalink?</h2>
  <p>
    Permalinks are an important part of your site as both search engines and
    visitors use these URLs to index and visit your site. The type of permalink
    you pick influences the way these two parties see and value your site.
    <a href="https://yoast.com/what-is-a-permalink/" rel="bookmark"
      >Read more on Yoast</a
    >
  </p>
  <article>
    <h3>Sally</h3>
    <h4>
      <a href="https://yoast.com/what-is-a-permalink/comments/1" rel="bookmark"
        >Comment on: <time datetime="2020-10-11">11 October, 2020</time></a
      >
    </h4>
    <p>
      Thank you for this detailed explanation of the permalink and how it
      related to SEO
    </p>
  </article>
</article>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/XWMbmje)

In the above example, the first link’s closest ancestor `article` element is the blog post extract and so, the bookmark indicates that the value of the `href` for this link is a permalink to the full post. The second link’s closest `article` element ancestor is the comment made by Sally and so, the value of the `href` attribute here is a permalink to the comment.

If there is no ancestor `article` elements or other sectioning content such as a `div` element for example, the hyperlink refers to the nearest heading sibling or ancestor. User agents do not afford bookmark type hyperlinks any special UI treatment and is mainly a form of metadata, to be used by scripts, or for styling purposes.

## `help`

As the name suggests this is used to indicate that the hyperlink points to help text. As with the bookmark keyword, when the help keyword is used with the `a` or `area` element, it represents context-sensitive help for its nearest parent element.

```html
<div class="form-field-group">
  <label for="tags"
    >Tags:
    <input type="text" name="tags" id="tags" />
    <a href="/example-tags/" rel="help">Tag examples</a>
  </label>
</div>
```

A user agent could show a different cursor when a user hovers over a hyperlink but, you could also use it as a hook for CSS and add your own icon or change the cursor as can be seen in the below example.

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/XWMbmje)

When used with the `link` element, the referenced document points to a help document for the page as a whole.

```html
<link rel="help" href="/completing-registration-form/" />
```

## `license`

This keyword is used to indicate that the referenced document contains information about the license terms under which the content is provided. Unlike the previous elements, the specification does not distinguish between what is the main content and what is not so, it is up to the author to make this clear.

```html
<p>
  A large number of repositories on
  <a href="https://github.com" rel="external">GitHub</a> are governed by the
  <a href="https://opensource.org/licenses/mit-license.php" rel="license"
    >MIT license</a
  >.
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/XWMbmje)

This can also be used with the `link` element as follows:

```html
<link rel="license" href="https://opensource.org/licenses/mit-license.php" />
```

## `manifest`

This keyword is only used with the `link` element and is used for installable web applications, also known as [progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps). This keyword indicates that the file referenced is a [manifest file](https://web.dev/add-manifest/) that contains metadata about the web application.

```html
<link rel="manifest" href="manifest.json" />
```

## `nofollow`

The keyword has two main use cases. The first is to indicate that the publisher of the page does not endorse the link and as such, is commonly used on links in user-generated content such as comments. The second use case is to indicate that the link has been added purely for commercial purposes such as affiliate links. Generally, search engines will also not follow these links when crawling and indexing your site.

```html
<a href="https://amazon.com/my-affiliate-links" rel="nofollow"
  >My affiliate product on Amazon</a
>
```

## `opener`

This keyword is effectively the opposite of the `noopener` keyword I discussed before. So, instead of revoking access you are explicitly giving access to the opener. This creates what is also known as an [auxiliary browsing context](https://html.spec.whatwg.org/#auxiliary-browsing-context).

```html
<a href="/interactive-guide/" rel="opener">Get interactive help</a>
```

## `tag`

While it might seem obvious, the tag keyword is not meant to be used on tag clouds such as those commonly found on blogs for example. Instead, this is used to link to a resource that provides additional information or disambiguates the tag in question. You can almost substitute the word topic in your mind in place of tag to further clarify the concept.

```html
<p>
  A ruby is a pink to blood-red coloured gemstone, a variety of the mineral
  corundum (aluminium oxide). Other varieties of gem-quality corundum are called
  sapphires. Ruby is one of the traditional cardinal gems, together with
  amethyst, sapphire, emerald, and diamond.[3] The word ruby comes from ruber,
  Latin for red. The color of a ruby is due to the element chromium.
</p>
<p>
  Sapphire is a precious gemstone, a variety of the mineral corundum, consisting
  of aluminium oxide (α-Al2O3) with trace amounts of elements such as iron,
  titanium, chromium, vanadium, or magnesium. It is typically blue, but natural
  "fancy" sapphires also occur in yellow, purple, orange, and green colors;
  "parti sapphires" show two or more colors.
</p>
<p class="topic">
  <a href="https://en.wikipedia.org/wiki/Gemstone" rel="tag">Gemstones</a>
</p>
```

## `next` and `prev`

Both these keywords indicate that the current document is part of a sequence and that the hyperlink leads to either the next or previous logical page in the sequence. For example pagination on a set of tutorial pages.

```html
<ul class="pagination">
  <li>
    <a
      href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
      rel="prev"
      >Getting started with the Web</a
    >
  </li>
  <li>
    <a
      href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like"
      rel="next"
      >What will your website look like?</a
    >
  </li>
</ul>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/XWMbmje)

When using the next keyword with the `link` element the user agent should process the link as if one of the resource hints(dns-prefetch, preconnect, prefetch, or prerender ) was specified. Which of these the user agent chooses to use is implementation dependant.

```html
<link
  rel="next"
  href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like"
/>
```

That then covers all of the link types. Next up embedded content. On the menu for tomorrow are `picture`, `source`, and `img`.

### Related reading

- [When to use rel=”nofollow”](https://www.webfx.com/blog/web-design/rel-nofollow/)

Until tomorrow, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
