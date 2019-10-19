# Wait a second

Now we'll add some code to show an image. We include code in our app by putting a `<script>` tag within the `<body>` of our html document:

```html
<body>
	...
{{#include ../../3-make-it-do-something/index.html:15}}
</body>
```

Make a new file `script.js` and see that it runs when the page loads by adding a friendly greeting to the script.

```javascript
console.log('hello from javascript')
```

The internet is pretty quick, so if we wanted we could load an image immediately and provide instant gratification. To build anticipation though, let's add a delay to simulate a trip from space.

Filename: `3-make-it-do-something/script.js`
```javascript
{{#include ../../3-make-it-do-something/script.js}}
```

The `setTimeout` function asks the browser to please run the function we give it after a delay, which is exactly what we wanted.

That's a nice picture of Jupiter, but it would be nice if we could get a new image every time. To do that, we'll need to reach outside our own app. We'll see how that works next.
