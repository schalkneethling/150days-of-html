# Day 15

Welcome to Day 15!

Today we are stepping out of the `head` and into the `body` of the document by looking at the `body` element. The `body` element represents the main content, the visual and interactive elements of our document, and has the implicit ARIA(Accessible Rich Internet Applications) role of `document` assigned. Almost everything we will look at from here on out will have a visual representation in the browser and will be the elements we use to construct the user interfaces our users will interact with.

The `body` element itself can contain [all of the global attributes](https://html.spec.whatwg.org/#global-attributes) available to most HTML elements but, it also has a number of event handler attributes that are unique in how they are processed during event bubbling and capture. While it is best practice to register event handlers on elements via `addEventListener` inside of JavaScript, the unique characteristics of these event handler attributes warrant a short discussion.

> Note: Digging into the details of the various event handlers is beyond the scope here, but the MDN Web Docs article listed in related reading is a great starting point to dig deeper into events and event handling on the web.

## Event Handlers

A list of these unique event handlers available on the `body` element [can be found here](https://html.spec.whatwg.org/#handler-window-onafterprint) and [here(Note the items with an \*)](https://html.spec.whatwg.org/#global-attributes). What makes these unique and therefore worthwhile discussing here is how they fit into the event processing model. This is best demonstrated with an example.

First, let's look at an example of a non-Window-reflected event handler that can be used on the `body` element. In this case, the `onclick` event handler.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The body element | Day 15 | 150 Days of HTML</title>
    <script>
      /**
       * Logs a message to the console indicating where
       * the function was called from.
       * @param {String} calledBy - The callers name
       */
      function fired(calledBy) {
        console.log(`fired called by ${calledBy}`);
      }
    </script>
  </head>

  <body onclick="fired('click:: body element')">
    <h1>Event bubbling and capture on the <code>body</code> element</h1>
    <a href="#clicked" id="clicker">Click Me!</a>

    <script>
      (function () {
        "use strict";

        const clicker = document.getElementById("clicker");

        clicker.addEventListener("click", () => {
          fired("click:: anchor element");
        });

        document.body.addEventListener("click", () => {
          fired("click:: body event listener");
        });

        // the html element
        document.documentElement.addEventListener("click", () => {
          fired("click:: html event listener");
        });

        window.addEventListener("click", () => {
          fired("click:: window event listener");
        });
      })();
    </script>
  </body>
</html>
```

The bubbling of an event, in this case, starts from the element on which the event was triggered and then bubbles up through the DOM(Document Object Model) until:

1. It is captured by an event handler and the event bubbling is canceled or,
2. It reaches the global `window`

In our case here, we would see the following output in the console:

```bash
fired called by click:: anchor element
fired called by click:: body element
fired called by click:: body event listener
fired called by click:: html event listener
fired called by click:: window event listener
```

As you can see here, the bubbling is as expected. Now, let's look at a Window-reflected event handler on the `body` element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The body element | Day 15 | 150 Days of HTML</title>
    <script>
      /**
       * Logs a message to the console indicating where
       * the function was called from.
       * @param {String} calledBy - The callers name
       */
      function fired(calledBy) {
        console.log(`fired called by ${calledBy}`);
      }
    </script>
  </head>

  <body onerror="fired('error:: body element')">
    <h1>Event bubbling and capture on the <code>body</code> element</h1>
    <a href="#clicked" id="error">Do NOT Click Me!</a>

    <script>
      (function () {
        "use strict";

        const error = document.getElementById("error");

        error.addEventListener("click", () => {
          fired("click:: anchor element");
          throw Error("You should not have clicked me!!");
        });

        error.addEventListener("error", () => {
          fired("error:: anchor element");
        });

        document.body.addEventListener("error", () => {
          fired("error:: body event listener");
        });

        // the html element
        document.documentElement.addEventListener("error", () => {
          fired("error:: html event listener");
        });

        window.addEventListener("error", () => {
          fired("error:: window event listener");
        });
      })();
    </script>
  </body>
</html>
```

Here is the output you will see in the console after having clicked the link:

```html
fired called by click:: anchor element fired called by error:: body element
fired called by error:: window event listener Error: You should not have clicked
me!!
```

At first glance you might think hmmm 🤔 that looks fine but, let’s take a closer look 🕵️‍♀️ We actually have three registered event handlers that are never being called:

```javascript
error.addEventListener("error", () => {
  fired("error:: anchor element");
});

document.body.addEventListener("error", () => {
  fired("error:: body event listener");
});

// the html element
document.documentElement.addEventListener("error", () => {
  fired("error:: html event listener");
});
```

But wait! What?! There is an output in the console that states `fired called by error:: body element`. And here lies the difference. The `Error` that was thrown when clicking on the link does not bubble up from the element as we saw with the previous click event but, this event is thrown directly at the `window` object. Looking at the high-level DOM structure starting from the anchor element we can see that this means `a`, `body`, and `html` is skipped:

1. anchor
2. body
3. html
4. window

But there is that logged item there though? 😩 That resulted from the event handler registered as an attribute on the `body` element. Because `onerror` is Window-reflected, the `body` here is watching(or listening to) the `window` object and not the `body` resulting in it seeing(or hearing) the error event, and catching it. In other words, a window reflected event handler on the `body` listens for events on the `window` as opposed to the `body` element itself.

And there you have it, the `body` element in a nutshell. 🥜🌰 I hope you found this trip down, or should I see up, the body interesting and useful. Next up we will be looking at our first set of sectioning elements(the `body` being the sectioning root), the `article`, `section`, `nav`, and `aside` elements.

Until then, keep making the web awesome! 🌮

### Related Reading

- [Event Bubbling and Capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [onerror on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)

~..~
Schalk Neethling - [@schalkneethling](https://twitter.com/schalkneethling) pretty much everywhere :)
