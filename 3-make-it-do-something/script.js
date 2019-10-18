const userKey = 'NASA_API_KEY'

function randn(n) {
	return Math.floor(Math.random() * n)
}

function randomDate() {
	const year = (2010 + randn(10)).toString().padStart(4, '0')
	const month = (1 + randn(12)).toString().padStart(2, '0')
	const day = (1 + randn(28)).toString().padStart(2, '0')
	return year + '-' + month + '-' + day
}

function fetchRandomImage() {
	const url = `https://api.nasa.gov/planetary/apod?api_key=${userKey}&date=${randomDate()}`
	console.log(`fetching ${url}...`)
	fetch(url)
		.then(response => response.json())
		.then(json => {
			const { url, title } = json

			if (url.slice(-4) !== '.jpg') {
				setInterval(fetchRandomImage, 1000)
				return
			}

			const img = new Image()
			img.src = url
			document.querySelector('.image-container').append(img)

			document.querySelector('p').innerText = title
		})
}

// Wait some time before loading the image
setTimeout(fetchRandomImage, Math.random() * 2000)
