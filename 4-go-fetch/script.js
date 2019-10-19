function randn(n) {
	// Random integer from [0, n)
    return Math.floor(Math.random() * n)
}

function randomDate() {
	// Construct a random data in YYYY-MM-DD format

    const year = (2010 + randn(10)).toString().padStart(4, '0')
    const month = (1 + randn(12)).toString().padStart(2, '0')
    const day = (1 + randn(28)).toString().padStart(2, '0')
    return year + '-' + month + '-' + day
}

function getRandomSpaceImageInfo() {
	const endpoint = 'https://api.nasa.gov/planetary/apod'

	const apiKey = 'DEMO_KEY'
	const date = randomDate()

	const query = `${endpoint}?api_key=${apiKey}&date=${date}`

	return fetch(query)
				.then((response) => response.json())
}

function getImageFromSpace() {
	getRandomSpaceImageInfo().then((imageInfo) => {
		const imageTitle = imageInfo.title
		const imageUrl = imageInfo.url

		// Update the text to be the image title
		const textElement = document.querySelector('p')
		textElement.innerText = imageTitle

		// Create a new image element from the url ...
		const imageElement = document.createElement('img')
		imageElement.src = imageUrl
		
		// ... and insert it in the document!
		const imageContainer = document.querySelector('.image-container')
		imageContainer.appendChild(imageElement)
	})
}

// A random number between 0 and 3000
const delay = Math.random() * 3000

// Wait `delay` milliseconds, then run the function `getImageFromSpace`
setTimeout(getImageFromSpace, delay)
