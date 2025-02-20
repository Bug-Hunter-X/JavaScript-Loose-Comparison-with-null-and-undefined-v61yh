# JavaScript Loose Comparison with null and undefined

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose comparison (==) when checking for null and undefined values.  The example code appears to handle null and undefined correctly, yet it can still produce unexpected results.

## The Problem

JavaScript's loose comparison operator (==) does not always behave as intuitively expected.  When comparing against null or undefined, it can lead to unexpected type coercion.

## The Solution

The solution is to use strict equality (===) to avoid type coercion and ensure that the comparison is accurate.