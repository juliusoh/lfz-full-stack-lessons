# array-reduce

Combining the elements of an array into a single value.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-reduce` directory in your terminal.

### Exercise

1. Review the variables in `main.js`.
1. Read about [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) in the MDN Web Docs.
1. In `main.js`, create the following variables using `Array.prototype.reduce` and log each of them to the console.
    - `sum` - all `numbers` added together
    - `product` - all `numbers` multiplied together
    - `balance` - a number that is the result of combining all transactions in `account`
    - `composite` - an object that is the result of combining all properties of the objects within `traits`

#### Tips!

- An account balance is the result of adding all deposits and subtracting all withdrawals.
- [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) copies properties from one or more sources to a target before returning the target.
- If you leave out the `initialValue` argument when calling `reduce()`, it treats the first value as the initial value.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is `Array.prototype.reduce` useful for?
