# Web Requests

So far, we haven't made much use of the web in our web app.

When you go type `localhost:8000` in your browser address bar, the browser asks the internet

> please, could you get `localhost:8000` for me?

It's called a `GET` request, and in this case, the same computer was listening, and responds by sending the `index.html` file so it can be displayed.

`GET` requests aren't only for web pages though. Depending on who you ask, you get different things back. NASA has a computer somewhere listening for computers to ask it for links to astronomy images. Try typing this address in your browser bar

```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

The NASA computer responds with some info including a link to the image. The format is JSON:

```json
{
	"date": "2019-10-18",
	"explanation": "After the 2017 detecton of 1I/'Oumuamua... ",
	"title": "Interstellar Interloper 2I/Borisov",
	"url": "https://apod.nasa.gov/apod/image/1910/STSCI-H-p1953b_1024.jpg",
	...
}
```

In the next section we will have our app request a random image from NASA each time the page loads.
