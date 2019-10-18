# Hello web!

Make a project directory and add an `index.html` file.

Filename: `1-hello-web/index.html`
```html
{{#include ../../1-hello-web/index.html}}
```

HTML is a descriptive language. Everything inside the `<body>...</body>` tags will be displayed to the user. Here, we greet them with an `<h1>` (level 1 header).

You can add other elements on the page with different tags:
- `<p>` is a paragraph element. Most text on a page uses this.
- `<button>` is a button!
- `<a>` is a link (anchor)
- And a [lot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) more.

## Serve output
You could find put the file path in your browser address bar, but I find it easier to *serve* the page locally. Go to your project directory and run:
- Python 3: `python -m http.server`
- Python 2: `python -m SimpleHTTPServer` [(you should really upgrade!)](https://www.python.org/doc/sunset-python-2/)

Now check out your first app at `localhost:8000` in your browser.

