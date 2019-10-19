# Go fetch

We will update the `getImageFromSpace` to get a random image each time it is called.

Filename: `4-go-fetch/script.js`
```js
{{#include ../../4-go-fetch/script.js}}
```

The new function `getRandomSpaceInfo` does the `GET` request from before, and also asks for the image for a random day so that we get a different one each time.

