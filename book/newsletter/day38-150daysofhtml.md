# Day 38 - More Forms!

Welcome to day 38!

I told you there was a lot to cover here. 😄 Today we are going to step _into_ the form, so to speak, and look at the various elements that could make up a form.

## The `fieldset` and `label` elements

When adding `input` elements to a form, it is important to add and associate a `label` element with each input. However, when you have a group of input elements, it is often required to provide a meaningful title for the group of elements. This is especially true for people using screen reader software.

In HTML we accomplish this by using the `fieldset` and `legend` elements. Let’s say we have the following list of checkbox elements:

```html
<input type="checkbox" name="fruits" value="pineapple" />
<input type="checkbox" name="fruits" value="apple" />
<input type="checkbox" name="fruits" value="orange" />
<input type="checkbox" name="fruits" value="avocado" />
```

The above is completely unusable, even for people with no visual problems. It is just a list of checkboxes. Let’s add a label for each of the checkboxes.

```html
<label>
  <input type="checkbox" name="fruits" value="pineapple" /> Pineapple
</label>
<label> <input type="checkbox" name="fruits" value="apple" /> Apple </label>
<label> <input type="checkbox" name="fruits" value="orange" /> Orange </label>
<label> <input type="checkbox" name="fruits" value="avocado" />Avocado </label>
```

This is a definite improvement but, for users of screen readers there is still no direct association between the label and the input element. We can do this by setting and `id` attribute on the `input` element and then use the `for` attribute of the `label` element to associate the two.

```html
<label for="pineapple">
  <input type="checkbox" id="pineapple" name="fruits" value="pineapple" />
  Pineapple
</label>
<label for="apple">
  <input type="checkbox" id="apple" name="fruits" value="apple" /> Apple
</label>
<label for="orange">
  <input type="checkbox" id="orange" name="fruits" value="orange" /> Orange
</label>
<label for="avocado">
  <input type="checkbox" id="avocado" name="fruits" value="avocado" />Avocado
</label>
```

Now each `label` is directly associated with its `checkbox` element. It is still not entirely clear that this is a group of assoiated checkboxes. Of course, the code provides a hint in that all the `checkbox` elements share the same `name` attribute value. But our users definitely have no way of knowing this.

Our first step then in making this obvious is to group the elements inside a `fieldset` element.

```html
<fieldset>
  <label for="pineapple">
    <input type="checkbox" id="pineapple" name="fruits" value="pineapple" />
    Pineapple
  </label>
  <label for="apple">
    <input type="checkbox" id="apple" name="fruits" value="apple" /> Apple
  </label>
  <label for="orange">
    <input type="checkbox" id="orange" name="fruits" value="orange" /> Orange
  </label>
  <label for="avocado">
    <input type="checkbox" id="avocado" name="fruits" value="avocado" />Avocado
  </label>
</fieldset>
```

Now these are clearly grouped semantically, but also visually.

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/0e24e5059acd9eb2c71abb7da8821b7c?editors=1000)

## The `legend` element

The above is great, and a vast improvement from where we started. Thing is, they are grouped but why? There is currently nothing to tell the user why they would check any of the checkboxes. Let’s remedy that by using the `legend` element. The `legend` element is used to provide a meaningful title for the group of elements.

```html
<fieldset>
  <legend>Choose your favourite fruits</legend>
  <label for="pineapple">
    <input type="checkbox" id="pineapple" name="fruits" value="pineapple" />
    Pineapple
  </label>
  <label for="apple">
    <input type="checkbox" id="apple" name="fruits" value="apple" /> Apple
  </label>
  <label for="orange">
    <input type="checkbox" id="orange" name="fruits" value="orange" /> Orange
  </label>
  <label for="avocado">
    <input type="checkbox" id="avocado" name="fruits" value="avocado" />Avocado
  </label>
</fieldset>
```

With all of the above we now have a completely accessible group of form elements that clearly communicate their purpose, shows which elements are grouped together, provides a title for the group, and directly associates each `label` with its `input` element.

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/0e24e5059acd9eb2c71abb7da8821b7c?editors=1000)

Beyond screen reader accessibility, we also need to consider users who use [screen magnification software](https://en.wikipedia.org/wiki/Assistive_technology#Screen_magnification_software). Let’s take the example from above and add an image to the fieldset.

```html
<fieldset>
  <legend>Choose your favourite fruits</legend>
  <img src="./media/fruits.png" width="445" hright="250" alt="" />
  <label for="pineapple">
    <input type="checkbox" id="pineapple" name="fruits" value="pineapple" />
    Pineapple
  </label>
  <!-- rest of the form elements -->
</fieldset>
```

I also added a bit of CSS to the above:

```css
img {
  display: block;
  margin-bottom: 24px;
  max-width: 100%;
}

fieldset {
  margin: 24px 0;
}

label {
  display: block;
  margin-bottom: 12px;
}
```

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/a1f5f758e2b47825c9d0424a3303801b?editors=1100)

While not immediately obvious, the placement of the image can be problematic for screen magnification users as the distance between the title(`legend`) and the image is to great. This means the user might need to continually scroll up and down between the title and the input fields.

It would thefore be preferable to layout the elements as follows:

```html
<img src="./media/fruits.png" width="445" hright="250" alt="" />
<fieldset>
  <legend>Choose your favourite fruits</legend>
  <label for="pineapple">
    <input type="checkbox" id="pineapple" name="fruits" value="pineapple" />
    Pineapple
  </label>
  <!-- rest of the form elements -->
</fieldset>
```

A minor change, but one that will be significant for screen magnification users.
