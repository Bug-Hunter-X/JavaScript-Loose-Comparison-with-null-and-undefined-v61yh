function foo(a, b) {
  if (a === null || b === null) {
    return null; // This is fine
  }

  if (a === undefined || b === undefined) {
    return undefined; //This is also fine
  }
  // ... rest of the function
}