# Day 21

Welcome to day 21!

Today we continue our exploration of the grouping elements by looking at lists.

## `ol` - Ordered list

As the name suggests, the `ol` element is used to markup lists that follow a defined order. This element is therefore the perfect candidate for marking up cooking instruction and assembly instructions for example. Each item in an ordered list is marked up using the `li` or list item element.

```html
<section aria-labelledby="making-pizza-dough">
  <h2 id="making-pizza-dough">Making pizza dough</h2>
  <ol>
    <li>
      <p>
        Combine the bread flour, sugar, yeast and kosher salt in the bowl of a
        stand mixer and combine. While the mixer is running, add the water and 2
        tablespoons of the oil and beat until the dough forms into a ball. If
        the dough is sticky, add additional flour, 1 tablespoon at a time, until
        the dough comes together in a solid ball. If the dough is too dry, add
        additional water, 1 tablespoon at a time. Scrape the dough onto a
        lightly floured surface and gently knead into a smooth, firm ball.
      </p>
    </li>
    <li>
      <p>
        Grease a large bowl with the remaining 2 teaspoons olive oil, add the
        dough, cover the bowl with plastic wrap and put it in a warm area to let
        it double in size, about 1 hour. Turn the dough out onto a lightly
        floured surface and divide it into 2 equal pieces. Cover each with a
        clean kitchen towel or plastic wrap and let them rest for 10 minutes.
      </p>
    </li>
  </ol>
  <footer>
    <h3>Cook’s Note</h3>
    <p>
      Using bread flour will give you a much crisper crust. If you can't find
      bread flour, you can substitute it with all-purpose flour which will give
      you a chewier crust.
    </p>
    <p>
      <a
        href="https://www.foodnetwork.com/recipes/bobby-flay/pizza-dough-recipe-1921714"
        >See full recipe at Foodnetwork.com</a
      >
    </p>
  </footer>
</section>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxgMXVV)

While the ordered list element support all of the [global attributes](https://html.spec.whatwg.org/#global-attributes), it also has a couple of its own unique attributes.

### reversed

As mentioned earlier, another common use for an ordered list could be assembly instructions.

```html
<section aria-labelledby="setting-up-tent">
  <h2 id="setting-up-tent">Setting up your tent</h2>
  <ol>
    <li>Unpack your tent supplies.</li>
    <li>Lay down a ground cloth.</li>
    <li>Insert your tent poles through the frame</li>
    <li>Raise the tent.</li>
    <li>Hammer in your tent pegs.</li>
    <li>Set up the rain-fly.</li>
    <li>Move your things into the tent.</li>
  </ol>
  <footer>
    <p>
      <a href="https://www.wikihow.com/Assemble-a-Tent"
        >Assemble a tent on WikiHow</a
      >
    </p>
  </footer>
</section>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxgMXVV)

But what about disassembly instructions? While it could be completely valid to have these numbered from 1 - x, why not reinforce the idea that this is disassembly instruction by having the numbers countdown? With the `reversed` attribute on the ordered list element, it is as simple as adding the attribute to the root `ol` element.

> NOTE: This will not reverse the order in which the instructions are rendered, only the marker. The content will still be rendered in the same order you wrote them in the HTML.

```html
<section aria-labelledby="taking-down-tent">
  <h2 id="taking-down-tent">Taking down your tent</h2>
  <ol reversed>
    <li>Keep your tent clean while you camp.</li>
    <li>Move your items out of the tent.</li>
    <li>Tear down the rain-fly.</li>
    <li>Unpeg the tent from the ground.</li>
    <li>Remove the poles from the frame.</li>
    <li>Keep all of the tent parts in one place.</li>
    <li>Fold up ground cloth.</li>
    <li>Nealty return all tent items to the carrying bag.</li>
    <li>Scan the campsite for anything you might have missed.</li>
  </ol>
  <footer>
    <p>
      <a href="https://www.wikihow.com/Assemble-a-Tent"
        >Assemble a tent on WikiHow</a
      >
    </p>
  </footer>
</section>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxgMXVV)

### `start`

Sometimes the steps are interspersed with some additional information, images, or other text that you do not necessarily want to be part of the list item. For these cases, we have the `start` attribute. As the name suggests, it allows you to specify from where the new ordered list should start or continue.

> NOTE: Even when the steps are indicated with letters, you still specify the value for the `start` attribute as a numeral.

```html
<section aria-labelledby="marking-up-form">
  <h2 id="marking-up-form">Marking up an HTML form</h2>
  <ol>
    <li>
      To start with, make a local copy of our blank template file and the CSS
      for our payment form in a new directory on your computer.
    </li>
    <li>
      Apply the CSS to the HTML by adding the following line inside the HTML
      <code>&lthead></code>:
    </li>
  </ol>

  <pre data-type="html">
<code>
<link href="payment-form.css" rel="stylesheet" />
</code>
</pre>

  <ol start="3">
    <li>
      Next, create your form by adding the outer <code>&lt;form></code> element:
    </li>
  </ol>

  <pre data-type="html">
<code>
<form>

</form>
</code>
</pre>

  <ol start="4">
    <li>
      Inside the <code>&lt;form></code> tags, add a heading and paragraph to
      inform users how required fields are marked:
    </li>
  </ol>
  <footer>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form"
        >How to structure a web form on MDN Web Docs</a
      >
    </p>
  </footer>
</section>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxgMXVV)

### `type`

While setting the type of marker the ordered list should use is commonly done via the CSS `list-style-type` property, it is also possible to set this using the `type` attribute on the ordered list element. This can be an especially good idea when it is not guaranteed that the HTML will be rendered in a context where CSS is available and the marker used is critical to the understanding of the list. The possible values for the `type` attribute are as follows:

| **Keyword** |  **State**  | **Example** |
| :---------: | :---------: | :---------: |
|      1      |   decimal   |     1.      |
|      a      | lower-alpha |     a.      |
|      A      | upper-alpha |     A.      |
|      i      | lower-roman |     i.      |
|      I      | upper-roman |     I.      |

Decimal is the default and does not need to be specified. Some examples:

```html
<ol type="a">
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
  <li>Make awesome websites!</li>
</ol>

<ol type="A">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cantelope</li>
  <li>Dragonfruit</li>
</ol>

<ol type="i">
  <li>Film Roman, an American animation studio</li>
  <li>Roman (film), a 2006 American suspense-horror film</li>
  <li>Romans (2013 film), an Indian Malayalam comedy film</li>
  <li>Romans (2017 film), a British drama film</li>
  <li>The Romans (Doctor Who), a serial in British TV series</li>
</ol>

<ol type="I">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/xxgMXVV)

## `dl` - Description list

A description list is made up of two other elements. The `dt` or term element and the `dd` or description element. Together these combine to create a description list of names and their associated values or descriptions.

> NOTE: The `dl` element used to be called a definition list and therefore `dt` was known as the definition type and `dd` as the definition description. Since the parent element is now more generally called a description list, those names do not map as cleanly. It is, therefore, best to think of the `dt` element as the name or term being described by the description(`dd`).

```html
<dl>
  <dt><code>reversed</code></dt>
  <dd>
    When specified, it displays the marker of the individual list items in a
    decending order
  </dd>
  <dt><code>start</code></dt>
  <dd>
    Sets the position at which the list items will start. For example, setting
    `start="3"` will mark the first item in the list as the number 3.
  </dd>
  <dt><code>type</code></dt>
  <dd>
    Specifies the type of marker to use for the list items, for example letters
    or roman numerals.
  </dd>
</dl>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMrLX)

As you will notice from the above, the default rendering for a description list is stacked with the description indented. One thing that makes styling a description list a little tricky is that each name and description pair are separate siblings in the HTML. If one, therefore, apply something like [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) to the parent `dl` element, the end result will most likely not be what you want as each entry in the list becomes a flex child. What you probably want is for each pair to become a child.

To remedy this, you are allowed to wrap elements inside the description list with a `div` for styling purposes. For example, let’s rewrite the above a little:

```html
<dl class="styled-description-list">
  <div>
    <dt><code>reversed</code></dt>
    <dd>
      When specified, it displays the marker of the individual list items in a
      decending order
    </dd>
  </div>
  <div>
    <dt><code>start</code></dt>
    <dd>
      Sets the position at which the list items will start. For example, setting
      `start="3"` will mark the first item in the list as the number 3.
    </dd>
  </div>
  <div>
    <dt><code>type</code></dt>
    <dd>
      Specifies the type of marker to use for the list items, for example
      letters or roman numerals.
    </dd>
  </div>
</dl>
```

Adding the following CSS gives you a horizontally displayed description list with a bit more styling for the `dt` and `dd` elements:

```css
.styled-description-list {
  display: flex;
  grid-gap: 24px;
  gap: 24px;
}

.styled-description-list div {
  flex-basis: 35%;
}

.styled-description-list dt {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.styled-description-list dd {
  margin: 0;
}
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMrLX)

One thing that is also unique about the description list element is that you can associate multiple type elements with a single description or, you can associate multiple description elements with a single type element. For example:

```html
<dl>
  <dt><code>reversed</code></dt>
  <dt><code>start</code></dt>
  <dt><code>type</code></dt>
  <dd>The above are all attributes of the unordered list element.</dd>
</dl>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMrLX)

When marking up a list of authors, you could do the following:

```html
<dl>
  <dt>Authors</dt>
  <dd>Stephen King</dd>
  <dd>Dean R Koontz</dd>
</dl>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMrLX)

## `ul` - Unordered list

The unordered list is a workhorse of the HTML world. 🐎 It’s not that it has no semantic value. In fact, it has, as the other list elements we discussed earlier, an implicit ARIA role of `list`. The reason it is a workhorse is that so much of what we do on websites can be seen as lists. And more specifically, lists that do not define a specific order nor aim to display a list of terms and their definitions. Think of a list of ingredients for a recipe, main navigation, sidebar, breadcrumbs, an application menu, etc.

```html
<section aria-labelledby="recipe-ingredients">
  <h2 id="recipe-ingredients">Piza Dough Ingredients</h2>
  <ul>
    <li>3 1/2 to 4 cups bread flour, plus more for rolling</li>
    <li>1 teaspoon sugar</li>
    <li>1 envelope instant dry yeast</li>
    <li>2 teaspoons kosher salt</li>
    <li>1 1/2 cups water, 110 degrees F</li>
    <li>2 tablespoons olive oil, plus 2 teaspoons</li>
  </ul>
  <footer>
    <p>
      <a
        href="https://www.foodnetwork.com/recipes/bobby-flay/pizza-dough-recipe-1921714"
        >See full recipe at Foodnetwork.com</a
      >
    </p>
  </footer>
</section>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/poRGVwV)

## `menu`

The `menu` element is really nothing more than an element to add additional semantic meaning(not that it is unimportant by the way 😅) to an unordered list used to markup an application toolbar for example. It does not change the visual rendering and also still shares the same implicit ARIA role of `list`.

> NOTE: Currently this is still considered experimental and is [only supported in Firefox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu#browser_compatibility). With that said, even in non supporting browsers, the element will still render as if it was marked up as an unordered list.

For example:

```html
<menu>
  <li><button type="button" id="copy-button">Copy</button></li>
  <li><button type="button" id="cut-button">Cut</button></li>
  <li><button type="button" id="paste-button">Paste</button></li>
</menu>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/poRGVwV)

> NOTE: The `menu` element does have a `type` and `label` attribute but, `label` has been deprecated. Also, the value for `type` could be one of either `context` or `toolbar` but, `context` has been deprecated. The only remaining valid value for `type` is then, `toolbar`. To my mind, that means these attributes are no longer of any use.

> ANOTHER NOTE: The menu element is not a general-purpose semantic element to use for all menus or navigation but is intended for specific application toolbar type menus.

### Nesting 🪆

Other than the `menu` element, all of the above list types allow nesting to create multi-level lists. Before looking at the lists where this is commonly done, let’s discuss nesting with the description list. Firstly, I have not personally found a use case for nesting in description lists but, if you do find a use case, remember that you can only nest a description list inside the `dt` or `dd` element. For example:

```html
<dl>
  <dt>top-level</dt>
  <dd>
    This is a top-level description list
    <dl>
      <dt>Nested</dt>
      <dd>
        This is a nested description list inside a top-level description list.
      </dd>
    </dl>
  </dd>
</dl>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMVox)

Nesting with the ordered and unordered lists is exactly the same from a code perspective.

```html
<ul>
  <li>
    Birds
    <ul>
      <li>Green Woodhoopoe</li>
      <li>Victoria Crowned Pigeon</li>
      <li>American Kestrel</li>
    </ul>
  </li>
  <li>
    Fish
    <ul>
      <li>Pufferfish</li>
      <li>Spottail pinfish</li>
      <li>Stringrays</li>
    </ul>
  </li>
</ul>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMVox)

With an ordered list though, you can use the `type` attribute to specify different markers for the top-level and nested lists.

```html
<ol type="A">
  <li>
    Shades of yellow
    <ol>
      <li>#fbec74</li>
      <li>#e6d75b</li>
      <li>#cbbd30</li>
    </ol>
  </li>
  <li>
    Shades of red
    <ol>
      <li>#fae4e5</li>
      <li>#f8c9ca</li>
      <li>#fba3a4</li>
    </ol>
  </li>
</ol>
```

[See the live example on Codepen.io](https://codepen.io/schalkneethling/pen/BapMVox)

And that is it for all things lists! 🎉 Tomorrow we will conclude our look at grouping content with the `figure` and `figcaption` elements.

Until then, keep making the web awesome!
~..~ Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
