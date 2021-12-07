# Day 26 - The small print, sup dude?

Welcome to day 26!

Continuing with text-level semantics, today is a quick one and covers `small`, `sub`, and `sup`

## `small`

While the default font size of the contents of the `small` element is, well small, it is not only meant for small print. It is definitely one of the use cases though.

```html
<p><small>Hello, I’m Mr. Potato Head</small></p>

<p>
  <img
    src="https://jarroldcdn.azureedge.net/products/hasbro/hasbro_playskool_mr_potato_%7Bw=1000,h=1000%7D.jpg"
    width="250"
    height="250"
    alt="Mr. Potato Head with a black hat, pink ears, eyes, a red nose, mouth with mustache, arms, and legs"
  />
</p>
<p>
  <small
    >All accessories sold separately. Essentially, you are buying a
    potato.</small
  >
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwPJord)

It can also be used for side notes. Here I am not referring to text that is displayed on the side like a pull quote for example, but something like in the following example:

```html
<p>
  The <code>samp</code> element
  <small
    >(Not to be confused with the
    <a href="https://en.wikipedia.org/wiki/Samp"
      >African food of the same name</a
    >)</small
  >
</p>
<p>
  Buy yourself some
  <a
    href="https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Food-Cupboard/Canned-Foods-%26-Packets/Canned-Beans%2C-Vegetables-%26-Pasta/Canned-Beans%2C-Vegetables-%26-Pasta---Beans/KOO-SAMP-%26BEANS-ORIGINAL-400GR/p/000000000000362206_EA"
    >samp and beans - R18.99</a
  >
  <small>(includes 15% VAT)</small>
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwPJord)

The `small` element is not meant for extended spans of text or for subheadings. When a `em` or `strong` element is nested within a `small` element, it does not deemphasize or lessen the importance. So the following will still carry the same weight:

```html
<p>
  <small
    ><strong
      >By continuing to use the page you accept our terms of service.</strong
    ></small
  >
</p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwPJord)

## `sub`

The `sub` element represents [subscript](https://en.wikipedia.org/wiki/Subscript_and_superscript). This element is not meant to be used for purely presentational purposes but, to mark up specific typographical conventions. For example:

```html
<p>The formula for water is <var>H</var><sub>2</sub><var>O</var></p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwPJord)

## `sup`

The `sup` element represents [superscript](https://en.wikipedia.org/wiki/Subscript_and_superscript). Basically `sup` is our reality and `sub` is the upside-down 🙃 (I could not resist the [Stranger Things reference](https://strangerthings.fandom.com/wiki/The_Upside_Down).). Let’s look at a familiar example from a previous post.

```html
<p><var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/VwPJord)

That completes our look at the simple, but useful text-level semantic elements. Tomorrow we will look at some lesser-known elements under the text-level semantics flag.

### Related reading

- [When to Use Superscript and Subscript in Your Writing](https://getproofed.com/writing-tips/when-to-use-superscript-and-subscript-in-your-writing/)

Until tomorrow, keep making the web awesome!

~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
