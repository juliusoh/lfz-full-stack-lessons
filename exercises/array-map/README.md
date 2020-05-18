# array-map

Creating a new array containing the transformed elements of another.

### Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `Array.prototype.map` useful for?

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-map` directory in your terminal.

### Exercise

1. Review the variables in `main.js`.
1. Read about [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) in the MDN Web Docs.
1. In `main.js`, create the following variables using `Array.prototype.map` and log each of them to the console.
    - `doubled` - all `numbers` multiplied by `2`.
    - `prices` - all `numbers` formatted into `"$0.00"` strings.
    - `upperCased` - all `languages` converted to uppercase.
    - `firstLetters` - the first letter of each `language`.
1. Open `index.html` in your browser and check the values you logged to the console.

#### Tips!

- All `Numbers` have a [`toFixed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method.
- All `Strings` have a [`toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) method.
- All `Strings` [can be indexed into](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access) like `Arrays`.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
