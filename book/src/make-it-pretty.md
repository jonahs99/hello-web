# Make it pretty

That's a start, but we need a bit more.

We'll update our `index.html` with a few changes:
- We nest some of our content in `<div>` elements. This let's us style the layout of the page.
- We add a `<p>` text element for what will be the image title.
- There's a `<head>` section outside of the `<body>` now. This section does not get displayed.

Filename: `2-make-it-pretty/index.html`
```html
{{#include ../../2-make-it-pretty/index.html}}
```

The `<link href="style.css" rel="stylesheet"/>` tells the browser to find the file `style.css` and apply those styles to our page.

Remember changing the colors with the dev tools? The styles are describes with CSS. Instead of applying styles to individual elements, we can group style rules together into a stylesheet to apply to the whole document.

So we should add the styles in a new file `style.css`.

Filename: `2-make-it-pretty/style.css`
```css
{{#include ../../2-make-it-pretty/style.css}}
```

Each section applies to some of the elements in the document. The `body` section applies to the `<body>` and all its children (that's everything!). The `.full-screen` sections applies to anything with `class="full-screen"` in our HTML.

Try adding or changing the styles. What does `background: #333` do?

What a cliff hanger!
