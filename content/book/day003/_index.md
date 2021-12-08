---
title: Chapter 3 | The title element
keywords: html, html standard, how-to, learn html
description: Today we dig into the first piece of metadata we will add to our webpages, the title tag.
menu:
  book:
    weight: 3
---

# Chapter 3 - The `title` element

Chapter 2 was a quick one and introduced you to the `head` element and the concept of metadata. In this chapter we dig into the first piece of metadata we will add to our webpages, the `title` tag.

Seems like such a simple element, and it is, but while simple, it is critical to orient a user. The `title` uniquely identifies the current page in browser history, is the first piece of information read to users using screen readers; it is the title shown to users in search results and when sharing on social media, and is [great for SEO](https://moz.com/learn/seo/title-tag)(search engine optimisation) aka Google Juice 🍹

With that said, keep the following guidelines in mind when writing your title:

- Be concise when writing your titles and aim to keep the total character count at around 60.
- Remember that document titles should make sense when read out of context.

For example, the title for this email as an HTML document would be:

```html
<!DOCTYPE html>
<html lang="“en”">
  <head>
    <title>The HTML title element - Day 3 | 150 Days of HTML</title>
  </head>
  ...
</html>
```

The `title` tag does not have any special attributes but supports the global attributes, one of which is `translate`. Using this attribute, you can prevent translation tools from localising your page title.

Why would you ever want to do that though?

Glad you asked. For example, your page title could be the title of a poem or a song. In those cases you do not want to content translated.

```html
<title translate="“no”">Revoir Paris | Roland Dyens</title>
```

Here, it would also be prudent to add a `lang` attribute indicating the primary language used in the `title` tag.

```html
<title translate="“no”" lang="“fr”">Revoir Paris | Roland Dyens</title>
```

That covers the `title` element and the third element of our journey through HTML. Tomorrow we will cover an element many people have probably never heard of. 🤔 That is all I am saying for now though. 😸

## Related Reading

1. [Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88.html)
2. [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
3. [title element on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
