function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return undefined; // Use strict equality
  }
  // ... rest of the function
} 