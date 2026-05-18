// Shiki Diff Highlighting Example
// ===============================
// This file demonstrates how to use Shiki's diff notation in Docco Next.
// You can use `// [!code ++]` to mark a line as added (green)
// and `// [!code --]` to mark a line as removed (red).

function greet(name) {
  // Log a greeting
  console.log('Hi ' + name) // [!code --]
  console.log(`Hello, ${name}!`) // [!code ++]
}

// Run the greeting
greet('World')
