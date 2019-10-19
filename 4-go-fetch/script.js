function getRandomSpaceImageInfo() {
	const endpoint = 'https://api.nasa.gov/planetary/apod'

	const apiKey = 'DEMO_KEY'

	const query = `${endpoint}?api_key=${apiKey}&count=1`

	// Make the request
	return fetch(query)
				.then((response) => response.json())
}

function getImageFromSpace() {
	getRandomSpaceImageInfo().then((imageInfoList) => {
		const imageInfo = imageInfoList[0]

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
