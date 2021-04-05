# Day 8

Welcome to Day 8!

What's up next with `rel`? [Resource Hints](https://w3c.github.io/resource-hints/) 💡 These keywords are all about performance and through performance, improving user experience and accessibility. Before we dig into the various resource hints I want to be clear that this will be no means be a deep dive into resource hints. That is a topic all its own 😉 For today, we will get to know the various resource hints as well as go over the basics of what they are used for.

> Note: As the name suggests, these are hints we as developers provide to the browser so, for the most part, it is still up to the browser's implementation to decide whether to follow our hints or not.

At the end, I will provide some resources for further reading should you wish to explore this topic further.

## 🐢 `dns-prefetch`

DNS, or the **D**omain **N**ame **S**ervice along with the **I**nternet **P**rotocol(IP) is the core addressing system used to connect you to the website you wish to visit. The size of the internet is immense and dynamic with new IP addresses and domain names constantly being added.

Your browser needs to know the IP address of the domain name you typed into the address bar in order to connect to it. Because of the vastness of the internet, it is therefore not always a quick and simple process for your browser to get hold of this IP address. DNS is made up of an array of DNS zones and servers strewn across the globe. The closest one to you might not be the one that has the address and related IP address in its database. So, [the first DNS server may need to ask a second and a third](https://nlp.stanford.edu/IR-book/html/htmledition/dns-resolution-1.html) before getting hold of the IP address it needs to send back to the browser. Commonly a DNS lookup [takes between 20 - 120 milliseconds](https://www.keycdn.com/support/reduce-dns-lookups).

It is also very common these days for a single webpage to connect to multiple domain names in order to get external resource such as custom fonts, JavaScript libraries, etc. For each new domain the browser encounters, it needs to do an initial DNS lookup request. You can see how this can potentially add up.

This is then where `dns-prefetch` comes into play. If we know for example that we will be getting a JavaScript library from say [unpkg](https://unpkg.com/), we can get some of the leg work out of the way by telling the browser about the domain name, and asking it to pretty please do the DNS resolution/lookup as early as possible.

Using the UNPKG example domain above, we will add the following to our `head`:

```html
<link rel="dns-preconnect" href="https://unpkg.com/" />
```

## 🐭 `preconnect`

There is more to connecting to another server than just DNS though. DNS maintains a map of domain names to IP addresses and so, it can tell the browser the IP address at which the destination server exists but, that is where it ends. The next step is for the browser to initiate a connection to the IP address.

The first step in this process is what is known as the TCP(**T**ransmission **C**ontrol **P**rotocol) handshake. This is the process whereby the [client(browser) negotiates a connection with the server](https://www.youtube.com/watch?v=xMtP5ZB3wSk). Essentially, the client sends a request to the server saying, "Hey, can you please open a connection for me?". The server then responds with, "Hi there! Sure, could you also open one for me on your end?". To which the client responds, "Yup, done". A two way connection now exists between the client and the server.

If you are connecting to the other server via HTTPS(**H**yper **T**ext **T**ransfer **P**rotocol **S**ecure), which is very common and almost universal these days, there is an additional handshake that needs to happen after the TCP handshake completes. This is known as the TLS handshake. The process goes something like this. The client sends a "hello" message to the server. This time, it includes the TLS version and cipher suites it supports, as well as a string of random bytes(aka "client random"). The server responds with a "hello" which includes its [SSL certificate](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/), its chosen cipher suite, and the "server random". The browser verifies the SSL certificate and if verified, sends back one more string of random bytes knows as the "premaster secret". The server decrypts the "premaster secret". Both client and server generates session keys from the client random, server random and premaster secret. The client sends an encrypted "finish" message, the server replies with an encrypted "finish" message, the handshake completes and the connection continues using the session keys.

That is a **lot**! 🤯  Thankfully this entire process takes only milliseconds but it does add to the overall latency of getting the data your application needs and your user is interested in. Using `reconnect`, we are asking the browser to take _all_ of the above steps, including DNS lookup, as early as possible for the domain we specify. So, if that library you need to get from UNPKG is super critical and you want to reduce as much of the latency as much as possible, as early as possible, you want to reach for `reconnect` as opposed to just `dns-prefetch`. Let's change the above example to do a `reconnect`:

```html
<link rel="preconnect" href="https://unpkg.com/" />
```

## 🦅 `prefetch`

While the above is mainly concerned with the current page, prefetch and its close cousin `pretender` is concerned with resources used on the next navigation. The `prefetch` resource hint informs the browser of a resource that is highly likely to be required on a future navigation and as such, it would be beneficial to preemptively [fetch](https://fetch.spec.whatwg.org/#concept-fetch) and cache the resource.

> NOTE: While the browser might fetch and cache the resource, it will not process, parse or execute.

There are two optional attributes that can be used in combination with `prefetch`. These are `as` and `crossorigin`. We have covered `crossorigin` before and its use in this context is the same. While the `as` attribute is optional, it is useful in order to indicate the type of resource to `prefetch`. This allows the browser to optimise the fetching process by setting appropriate request headers, transport priority, etc.

Let's look at prefetching a JavaScript resource for example:

```html
<link rel="prefetch" href="https://unpkg.com/three" />
```

## 🐕 `prerender`

The next step up from `prefetch` is `prerender`. The first notable difference is that the browser will not only fetch the resource but, it will also execute it. But, `prerender` is only used for HTML documents. If you need to fetch a different type of resource, `prefetch` is your tool of choice. As such, the `as` and `crossorigin` attributes are not valid in this context.

> NOTE: What the browser does with regard to sub-resources(images, scripts, style, etc.) is implementation and context dependant.

```html
<link rel="prerender" href="https://example.com/search-results.html" />
```

## 🐈 `preload`

There is one more keyword that is related to the above resource hints. The `preload` keyword is different from the above in that it is not a hint, but an instruction to the browser to preload and cache the resource i.e. whereas the hints state that the browser _should_ take the action, `preload` indicates that the browser **must** take the action.

The syntax of `preload` is the same as that of `prefetch`

```html
<link rel="preload" href="https://unpkg.com/three" as="script" crossorigin="credentials" />
```

As with `prefetch` the browser will fetch and cache the resource but not execute. Preload is also only concerned with the current page is not to be used for resources that might be required later during subsequent navigation.

> NOTE: While the resource hints are well supported across modern browsers, `preload` is only supported by [Chromium](https://www.chromium.org/Home) based browsers

With that, we are almost through the various possible keywords of the `rel` attribute. Next we will look at the last four: `modulepreload`, `next`, `pingback`, and `search`.

### Related Reading

- [IP and DNS | Internet 101](https://www.youtube.com/watch?v=MwxMsaFFycg)
- [TCP](https://youtu.be/AYdF7b3nMto?t=254)
- [The TLS Handshake](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)
- [What is latency?](https://www.youtube.com/watch?v=TWoElF8NbWk)
- [Resource Hints](https://w3c.github.io/resource-hints/)
- [Preload](https://w3c.github.io/preload/)

Until tomorrow, keep making the web awesome! o/\o

~..~
Schalk Neethling - @schalkneethling pretty much everywhere :)