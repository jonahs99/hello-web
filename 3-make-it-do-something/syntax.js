// Two slashes indicate a comment
// The browser ignores these lines

// Declare a variable that will not change with `const`
// ( You can use `let` if you must )
const name = 'techx'

// Format strings with this funny syntax
const greeting = `Hello ${name}!`

// Print text to the console with `console.log`
console.log(greeting)

// Define a function like this
function add(x, y) {
	return x + y
}

// Or like this
const imReallyTheSame = (x, y) => x + y

// Calling functions
console.log('1 + 2 =', add(1, 2))
console.log('3 + 4 =', imReallyTheSame(3, 4))

// An `Object` is a key-value store that maps really nicely to JSON
const asteroid = {
	key: 'value',
	id: 123,
	size: 'big',
}

// Access object values with `object.key`
console.log('the asteroid is', asteroid.size)
