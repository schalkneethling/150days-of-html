# Day 35 - Map, area, MathML, and SVG

Welcome to day 35!

Today we conclude our look at the embedded content elements. Today is a little different in that we will look at two elements, and then two other "elements" that are part of the embedded content group but, are each so large that you can dedicate an entire newsletter to each. We will therefore take a very high-level look at those and I will then provide links to further reading on both topics.

With all of that said, let’s digg into the `map` element.

## `map`

The `map` by itself is merely a container for what is known as an [image map](https://html.spec.whatwg.org/#image-map). It is used in conjunction with an `img` element and an `area` element. It inherits all of the [global attributes](https://html.spec.whatwg.org/#global-attributes) and uses the `name` attribute to uniquely identify the `map`. The value of the `name` attribute is used by the `img` element to reference the image map as we will see in a bit.

> NOTE: If you also specify an `id` attribute on the `map` element, its value should be the same as the value used for the `name` attribute.

```html
<img
  src="../assets/vegetables.jpg"
  width="1296 "
  height="864"
  alt="A plate containing sliced avocado, rosa tomatoes, chickpeas, lettuce leaves, shredded cabage, cubed sweet potato, and bell peppers drizzled with a creamy dressing."
  usemap="#vegetables"
/>
<map name="vegetables"></map>
```

Photo by [Anna Pelzer](https://unsplash.com/@annapelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText on [Unsplash](https://unsplash.com/s/photos/vegetable?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
