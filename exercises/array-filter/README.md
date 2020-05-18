# array-filter

Creating a new array while excluding some elements.

### Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `Array.prototype.filter` useful for?

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-filter` directory in your terminal.

### Exercise

1. Review the variables given to you in `main.js`.
1. Read about [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) in the MDN Web Docs.
1. In `main.js`, create the following variables using `Array.prototype.filter` and log each of them to the console.
    - `evenNumbers` - all `numbers` that are divisible by `2`.
    - `overFive` - all `numbers` that are greater than `5`.
    - `startWithE` - all `names` that start with a `'E'`.
    - `haveD` - all `names` that include a `'D'` or a `'d'`.
1. Open `index.html` in your browser and check the values you logged to the console.

#### Tips!

- Zero is [considered to be an even number](https://en.wikipedia.org/wiki/Parity_of_zero).
- Divisibility can be checked with the [`%` remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()) operator.
- All `Strings` have an [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method.
- All `Strings` have a [`startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) method.
- All `Strings` have an [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method.


### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
