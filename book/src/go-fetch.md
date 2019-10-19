# Go fetch

We will update the `getImageFromSpace` function to get a random image each time it is called.

Filename: `4-go-fetch/script.js`
```js
{{#include ../../4-go-fetch/script.js}}
```

The new function `getRandomSpaceInfo` does the `GET` request from before, and also asks for the image for a random day so that we get a different one each time.

Why all these nested functions? There are steps in our program that cannot happen immediately, because they have to wait for things to happen:

- When we `fetch`, we have to wait for NASA to get back to us
- Then when we get the message, we have to wait for the browser to parse the JSON
- Then we can load the image

When we want to wait for something to happen and then do something else, we wrap the later steps in a function and use `then` to call it with the result of what we were waiting on. This requires the function we're calling to be designed to allow this, by returning a `Promise`.

This is a really important use of functions in web development. They allow us to specify something to do *before* actually executing it.
