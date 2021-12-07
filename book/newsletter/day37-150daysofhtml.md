# Day 37 - Forms

Welcome to day 37!

Forms! They are generally an area people are not to crazy about, especially when it comes to styling but, without forms, there is a lot less that we can accomplish on the web. Think, sign up forms, contact forms, spreadsheets, editors, comments, Twitter, Instagram, Facebook. The list goes on an on.

I will say upfront that there is a lot to cover here so, strap on your fancy pants and get ready to learn.

## The form element

While we can get some things done without the `form` element using form inputs and JavaScript, it is not the recommended approach. With that in mind, let’s look at the `form` element and how to use it.

At it’s very basic not useful form, it can simply be:

```html
<form>
  <!-- some form elements go here -->
</form>
```

It is not very useful, but it is a form(technically). Let’s start by giving our `form` a name.

```html
<form name="contact">
  <!-- some form elements go here -->
</form>
```

### The `name` attribute

The `name` attribute is used to identify the form among other forms on the page. As such, the name of a form must be unique among the collection of forms on the current page. Other than accessing our form via JavaScript, the form is still pretty static and relatively useless.

### The `autocomplete` attribute

By default the fields of a `form` is set to autocomplete. This means that the browser will attempt to make suggestions based on previous input. This is a good thing, but sometimes you might not want this enabled. In order to disable this functionalty, we can use the `autocomplete` attribute.

```html
<form name="contact" autocomplete="off">
  <!-- some form elements go here -->
</form>
```

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/17dc329ef1b7e093e13c29ce4eb21c5f?editors=1010)

> NOTE: In the above example I added some JavaScript that will output the form data that was submitted into a container on the page.

### Adding a submit button

With the form in its current state, there is no visual representation and no way to submit the form. Let’s add a submit button to the form.

```html
<form name="contact" autocomplete="off">
  <button type="submit">Submit</button>
</form>
```

[Live on codepen.io](https://codepen.io/schalkneethling/pen/6f0c7597b2e90b1765937bbc7f2e19cf?editors=1011)

When you load the above example you will now see a submit button. Clicking it, will result in the form being submitted, but nothing is yet submitted. At this stage it is a very involved way to reload the current page. 😄

> NOTE: I am also intercepting the form submission, preventing its default action. We will shortly remove this once we have fleshed out the form a bit more.

### The `action` attribute

The next attribute we need to add to the form is the `action` attribute. the value of the `action` attribute is the URL that the form will submit to. For example:

```html
<form name="contact" autocomplete="off" action="https://duckduckgo.com/">
  <button type="submit">Submit</button>
</form>
```

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/c63dea608bdaab8fd99dbf8d89063596?editors=1010)

Even though we now have an action, the JavaScript I added to the page will still prevent the form from submitting its data to the URL specified. To see what _would_ happen if we submitted the form, [open this version of the example](https://codepen.io/schalkneethling/pen/ee42426df78ef3f873f477b1886fafc7?editors=1000).

> NOTE: Because Codepen runs the examples inside an `iframe`, the browser will not actually be able to open our `action` URL as DuckDuckGo prevents it from doing so. To solve this, right click inside the example area, hover over "This Frame", and then select the "Open Frame in New Tab" option.

[Screenshot that shows the right click context menu with "This Frame" and "Open Frame in New Tab" highlighted]("../assets/day37/open-frame-in-new-tab.png")

Once you have opened the frame in a new tab, go ahead and click the `Submit` button. The end result will be the form being submitted, and the landing page of DuckDuckGo loading in the same tab. Not super exciting, but we are getting somewhere.

### The `enctype` attribute

The `enctype` attribute is used to specify the encoding type of the form. The default value is `application/x-www-form-urlencoded` and is appropriate for most forms. However, if you are submitting a file, you will need to use `multipart/form-data`. In HTML5 another encoding type was added called `text/plain`. The difference between the two is subtle but significant.

If you submit the following form:

```html
<form name="contact" autocomplete="off" method="post" action="">
  <label for="firstname">First Name</label>
  <input type="text" name="firstname" id="firstname" value="Schalk" />
  <label for="lastname">Last Name</label>
  <input type="text" name="lastname" id="lastname" value="Neethling" />
  <button type="submit">Submit</button>
</form>
```

The payload(i.e. the information that is sent to the server) will be in the following format:

```text
firstname=Schalk&lastname=Neethling
```

If you add `enctype="text/plain"` to the form and submit it, the format of the payload will be as follows:

```text
firstname=Schalk
lastname=Neethling
```

You will need to ensure that the server that this is submitted to is able to handle the `text/plain` encoding type. As mentioned earlier, if you have an `input` element with a `type` of `file`, you will need to use `multipart/form-data` in order for the data to be correctly encoded when sent to the server. For our purposes here, the default of `application/x-www-form-urlencoded` will work just fine.

### The `method` attribute

This attribute sets the [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to be used when the form is submitted. The possible values are `get`, `post` and `dialog` with `get` being the default value.

When a form is posted with the HTTP get method, the names and values of the form elements are appended to the URL as a query string. For example, if you submit the following form:

```html
<form name="contact" autocomplete="off" method="post" action="/post">
  <label for="post">Post name:</label>
  <input type="text" name="post" id="post" value="Forms" />
  <label for="category">Last Name</label>
  <input type="text" name="category" id="category" value="HTML" />
  <button type="submit">Submit</button>
</form>
```

The resulting URL will be `/post?post=Forms&category=HTML`. If you change the `method` attribute to `post`, the form data is sent using the [request body](https://developer.mozilla.org/en-US/docs/Web/API/Request/body) as opposed to query parameters appended to the URL. The rule of thumb here is to use `get` when requesting data from the server, and `post` when submitting data to the server.

The `dialog` value of the `method` attribute is a newly introduced value and is used in conjunction with the [HTML5 dialog element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement). The use case for this is to close a dialog element without the need for JavaScript. One way to close a `dialog` element is with JavaScript as follows:

```js
const dialog = document.querySelector("dialog");
const closeButton = document.getElementById("close-dialog");

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

Alternatively, you can close the dialog by nesting the following `form` inside a `dialog` element:

```html
<!-- NOTE: The dialog element only works in Chromium based browsers -->
<dialog>
  <form name="dialog" method="dialog">
    <button type="submit">close dialog</button>
  </form>
</dialog>
```

> NOTE: Do not use the `dialog` method when your intent is to submit the form data to an end-point as this will not work.

### The `novalidate` attribute

When I cover `input` element we will discuss the `required` attribute. When a form contains elements that are set to be required or contain other validation attributes such as [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), the form will not submit its data until all validation rules pass. The `novalidate` attribute is used to disable browser validation for the form. This is useful when you want to submit the form to, for example, test server side validation.

```html
<form name="dialog" method="post" action="/post" novalidate>
  <label for="firstname">First name</label>
  <input type="text" id="firstname" name="firstname" required />
  <button type="submit">Submit form</button>
</form>
```

With that said, there is an even more useful use case but, the attribute and usage is a little different from what we have discussed so far. For forms that might be time consuming for a user to complete, it can be useful to have the option of saving the form without having completed all the required fields. We can implement this functionality by using the `formnovalidate` attribute on the submit `button`.

```html
<form name="booking-form" method="post" action="/post">
  <label for="firstname">First name</label>
  <input type="text" id="firstname" name="firstname" required />
  <!-- Additonal form elements goes here -->
  <button type="submit" name="save" formnovalidate>Save progress</button>
  <button type="submit" name="submit">Submit form</button>
</form>
```

> NOTE: You can also use the `formnovalidate` attribute on an `input` element of `type` `submit`.

When the "Save progress" button is clicked, the form will submit without validating the fields in the form, allowing the user to save their progress. When they click the "Submit form" button however, all validation will be done and the browser will show any validation errors.

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/df448950d263c78fd1e27f623319e667)

### The `target` attribute

As with hyperlink elements, the `target` attribute can be used to specify the target frame or window for the form submission. The possible values are `_blank`, `_self`, `_parent`, `_top`, or a frame name. For example:

```html
<form name="booking-form" method="post" action="/post" target="_blank">
  <label for="firstname">First name</label>
  <input type="text" id="firstname" name="firstname" required />
  <button type="submit">Submit form</button>
</form>
```

When the above form is submitted, the browser will open a new window with the URL `https://example.com/post` assuming the page was hosted on https://example.com. When the form is nested inside an `iframe` element, using either the `_parent` or `_top` values, will cause the form to submit to the parent frame or page.

### The `rel` attribute

The `rel` attribute on the `form` element should be used when specifying, for example, the `_blank` value of the `target` attribute. The possible values are `noreferrer`, `noopener`, and `opener`. It is of particular importance to specify at least `noopener`and possibly also `noreferrer` when using the `target` attribute [for security reasons](https://mathiasbynens.github.io/rel-noopener/).

```html
<form
  name="booking-form"
  method="post"
  action="/post"
  target="_blank"
  rel="noopener noreferrer"
>
  <label for="firstname">First name</label>
  <input type="text" id="firstname" name="firstname" required />
  <button type="submit">Submit form</button>
</form>
```

[Live on Codepen.io](https://codepen.io/schalkneethling/pen/e5b1c8d361b7949654e670eba2bd53f5?editors=1000)
