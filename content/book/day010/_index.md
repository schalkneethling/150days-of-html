---
title: Chapter 10 | The integrity attribute
keywords: html, html standard, how-to, learn html
description: In this chapter we are moving onward and looking at the integrity attribute of the link element.
menu:
  book:
    weight: 10
---

# Chapter 10 | The integrity attribute

In this chapter we are moving onward and looking at the `integrity` attribute of the `link` element. To be clear, as with many of the other attributes we have discussed, the `integrity` attribute is not only used on the link element. For our immediate purpose though, we will focus on the `link` element.

When we talked about the `crossorigin` attribute I touched on the fact that these days very few sites load all of their dependencies from the same origin. We use a combination of third-party services, content delivery networks, etc., and pretty much trust that the resource we requested will be the one that is delivered.

With hacking techniques such as [man-in-the-middle attacks](https://www.cloudflare.com/learning/security/threats/man-in-the-middle-attack/), [DNS spoofing, and DNS cache poisoning](https://security.stackexchange.com/questions/33257/dns-spoofing-vs-dns-cache-poisoning)(among others), simply trusting is not enough, especially for critical applications that involve user data, payments, or other sensitive operations. This is where the `integrity` attribute can help. 🔏

The `integrity` attribute is part of a larger standard known as subresource integrity. While TLS(**T**ransport **L**ayer **S**ecurity)/SSL(**S**ecure **S**occer **L**ayer) is concerned with validating that the server you connect to is the server you intended to connect to, it does not authenticate the content sent by the server. Subresource integrity is concerned with the latter of the two.

## How-To 👩‍🏫

The details of this are beyond our current scope but, here is how you would use it in practice.

Let’s say we have the following CSS file: `main.css`

```css
body {
  background-color: #212121;
  color: #fff;
  font: 18px/1.5 sans-serif;
}
```

We host this file on a CDN but wish to ensure that the content we get is the content we expect. Our first step is to generate a [cryptographic hash](https://en.wikipedia.org/wiki/SHA-1) from the above content. Here I will be using [OpenSSL’s tools](https://www.openssl.org/) to generate the hash from the command line.

```bash
cat main.css | openssl dgst -sha384 -binary | openssl base64 -A | pbcopy
```

Let's break the above down: 🍕

- We use the [`cat` command](https://www.cyberciti.biz/faq/howto-use-cat-command-in-unix-linux-shell-script/) to get the contents of the file
- We pipe(send) the contents of the file to openSSL's `dgst` function which generates a `sha384` hash
- We pipe the result of this to OpenSSL's base64 encoder
- And send the result of all of this to [`pbcopy`](https://osxdaily.com/2007/03/05/manipulating-the-clipboard-from-the-command-line/) (you can [use `clip` on Windows](https://superuser.com/questions/472598/pbcopy-for-windows))

The above produced the following:

```bash
4hBPy0fGoBuzDFFsZtTQy1Q1bIB7lDCym68dTqs29bO+CB8fz7xvzBXt47SrOqlf
```

We then use the above as the value for our `integrity` attribute as follows:

```html
<link
  rel="stylesheet"
  href="https://mycdn.com/main.css"
  integrity="sha384-4hBPy0fGoBuzDFFsZtTQy1Q1bIB7lDCym68dTqs29bO+CB8fz7xvzBXt47SrOqlf"
  crossorigin="anonymous"
  media="screen"
/>
```

With the above in place, your browser can verify that the contents received from the CDN are the contents you expect and _only_ parse/execute/apply the code to the current context if verifications pass

> You can use the same mechanism with `preload` and `modulepreload` which we discussed previously.

That is it! 💥 You now have the means to securely load your content from a third party 🎉

### Related Reading

- [Subresource integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [Using OpenSSL](https://opensource.com/article/19/6/cryptography-basics-openssl-part-1)
- [OpenSSL](https://www.openssl.org/)
- [Install OpenSSL on Windows](https://tecadmin.net/install-openssl-on-windows/)
- [OpenSSL on macOS](https://medium.com/@timmykko/using-openssl-library-with-macos-sierra-7807cfd47892)
- [OpenSSL on Linux](https://ubuntuforums.org/showthread.php?t=2110429)
