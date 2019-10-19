function getImageFromSpace() {
	const imageUrl = 'https://apod.nasa.gov/apod/image/1910/JupiterShadow_JunoGill_3535.jpg'
	const imageTitle = 'Io Eclipse Shadow on Jupiter from Juno'

	// Update the text to be the image title
	const textElement = document.querySelector('p')
	textElement.innerText = imageTitle

	// Create a new image element from the url ...
	const imageElement = document.createElement('img')
	imageElement.src = imageUrl
	
	// ... and insert it in the document!
	const imageContainer = document.querySelector('.image-container')
	imageContainer.appendChild(imageElement)
}

// A random number between 0 and 3000
const delay = Math.random() * 3000

// Wait `delay` milliseconds, then run the function `getImageFromSpace`
setTimeout(getImageFromSpace, delay)
