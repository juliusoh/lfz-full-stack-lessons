# array-manipulation-1

JavaScript array manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-manipulation-1` directory in your terminal.

### Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="images/failing-tests.png" alt="failing-tests">
</p>

Open `src/head.js` and `src/head.test.js` in your code editor and skim the code in `head.test.js`. As you add to or modify `head.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="images/passing-tests.png" alt="passing-tests">
</p>

1. ### `head(array)`

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    The first element of `array`.

    #### Examples

    ```js
    head(['foo', 'bar', 'baz'])      // -> "foo"
    head([1, 2, 3, 4, 5])            // -> 1
    head([false, true, false, true]) // -> false
    head([])                         // -> undefined
    ```

1. ### `last(array)`

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    The last element of `array`.

    #### Examples

    ```js
    last(['foo', 'bar', 'baz'])      // -> "baz"
    last([1, 2, 3, 4, 5])            // -> 5
    last([false, true, false, true]) // -> true
    last([])                         // -> undefined
    ```

1. ### `tail(array)`

    🚨 **Do not use `Array.prototype.slice()` or `Array.prototype.splice()` in your implementation of `tail`.**

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    A new array containing all elements of `array` after the first.

    #### Examples

    ```js
    tail(['foo', 'bar', 'baz'])      // -> ["bar", "baz"]
    tail([1, 2, 3, 4, 5, 6])         // -> [2, 3, 4, 5, 6]
    tail([true, false, false, true]) // -> [false, false, true]
    tail([])                         // -> []
    ```

1. ### `initial(array)`

    **Do not use `Array.prototype.slice()` or `Array.prototype.splice()` in your implementation of `initial`.**

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    A new array containing all elements of `array` except the last.

    #### Examples

    ```js
    initial(['foo', 'bar', 'baz'])      // -> ["foo", "bar"]
    initial([1, 2, 3, 4, 5, 6])         // -> [1, 2, 3, 4, 5]
    initial([true, false, false, true]) // -> [true, false, false]
    initial([])                         // -> []
    ```

1. ### `reverse(array)`

    **Do not use `Array.prototype.reverse()` in your implementation of `reverse`.**

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    A new array containing all elements of `array` in reverse order.

    #### Examples

    ```js
    reverse(['foo', 'bar', 'baz'])      // -> ["baz", "bar", "foo"]
    reverse([1, 2, 3, 4, 5])            // -> [5, 4, 3, 2, 1]
    reverse([false, true, false, true]) // -> [true, false, true, false]
    reverse([])                         // -> []
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
