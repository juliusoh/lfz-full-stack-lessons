# array-manipulation-2

JavaScript array manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-manipulation-2` directory in your terminal.

### Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="images/failing-tests.png" alt="failing-tests">
</p>

Open `src/take.js` and `src/take.test.js` in your code editor and skim the code in `take.test.js`. As you add to or modify `take.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="images/passing-tests.png" alt="passing-tests">
</p>

1. ### `take(array, count)`

    #### Parameters

      - `array` - Any JavaScript `Array`
      - `count` - A positive integer `Number` of elements to "take" from the beginning of `array`

    #### Return Value

    A new `Array` containing the first `count` elements of `array`.

    #### CHALLENGE

    **Do not use `Array.prototype.slice` or `Array.prototype.splice` in your implementation.**

    #### Examples

    ```js
    take(['foo', 'bar', 'baz', 'qux'], 2);
    // -> ["foo", "bar"]
    take([1, 2, 3, 4, 5], 1);
    // -> [1]
    take([false, true, false, true], 3);
    // -> [false, true, false]
    take([], 7);
    // -> []
    ```

1. ### `drop(array, count)`

    #### Parameters

      - `array` - Any JavaScript `Array`
      - `count` - A positive integer `Number` of elements to "drop" from the beginning of `array`

    #### Return Value

    A new `Array` containing the elements of `array` after the first `count` elements.

    #### CHALLENGE

    **Do not use `Array.prototype.slice` or `Array.prototype.splice` in your implementation.**

    #### Examples

    ```js
    drop(['foo', 'bar', 'baz', 'qux'], 2);
    // -> ["baz", "qux"]
    drop([1, 2, 3, 4, 5], 1);
    // -> [2, 3, 4, 5]
    drop([false, true, false, true], 3);
    // -> [true]
    drop([], 7);
    // -> []
    ```

1. ### `includes(array, value)` 🚨

    🚨 **Do not use `Array.prototype.includes` in your implementation.**

    #### Parameters

      - `array` - Any JavaScript `Array`
      - `value` - The value to search for in `array`

    #### Return Value

    A `Boolean` indicating the presence of `value` at any index of `array`.

    #### Examples

    ```js
    includes(['foo', 'bar', 'baz', 'qux'], 'baz');
    // -> true
    includes(['foo', 'bar', 'baz', 'qux'], 'corge');
    // -> false
    includes([1, 2, 3, 4, 5], 2);
    // -> true
    includes([1, 2, 3, 4, 5], 7);
    // -> false
    includes([false, true, false, true], false);
    // -> true
    includes([false, true, false, true], null);
    // -> false
    includes([], true);
    // -> false
    includes([], 'foo');
    // -> false
    includes([], 7);
    // -> false
    ```

1. ### `takeRight(array, count)`

    #### Parameters

      - `array` - Any JavaScript `Array`
      - `count` - A positive integer `Number` of elements to "take" from the end of `array`.

    #### Return Value

    A new `Array` containing the last `count` elements of `array`.

    #### CHALLENGE

    **Do not use `Array.prototype.slice` or `Array.prototype.splice` in your implementation.**

    #### Examples

    ```js
    takeRight(['foo', 'bar', 'baz', 'qux'], 2);
    // -> ["baz", "qux"]
    takeRight([1, 2, 3, 4, 5], 1);
    // -> [5]
    takeRight([false, true, false, true], 3);
    // -> [true, false, true]
    takeRight([], 7);
    // -> []
      ```

1. ### `dropRight(array, count)`

    #### Parameters

    - `array` - Any JavaScript `Array`
    - `count` - A positive integer `Number` of elements to "drop" from the end of `array`.

    #### Return Value

    A new `Array` containing the elements of `array` before the last `count` elements.

    #### CHALLENGE

    **Do not use `Array.prototype.slice` or `Array.prototype.splice` in your implementation.**

    #### Examples

    ```js
    dropRight(['foo', 'bar', 'baz', 'qux'], 2);
    // -> ["foo", "bar"]
    dropRight([1, 2, 3, 4, 5], 1);
    // -> [1, 2, 3, 4]
    dropRight([false, true, false, true], 3);
    // -> [false]
    dropRight([], 7);
    // -> []
    ```

1. ### `chunk(array, size)`

    #### Parameters

    - `array` - Any JavaScript `Array`
    - `size` - A positive integer `Number` indicating the desired "chunk" size.

    #### Return Value

    A new `Array` of `Arrays`. Each sub-`Array` has a length equal to `size`. Remainder elements are gathered into a final sub-`Array`.

    #### CHALLENGE

    **Do not use `Array.prototype.slice` or `Array.prototype.splice` in your implementation.**

    #### Examples

    ```js
    chunk(['foo', 'bar', 'baz', 'qux'], 2);
    // -> [["foo", "bar"], ["baz", "qux"]]
    chunk([1, 2, 3, 4, 5], 1);
    // -> [[1], [2], [3], [4], [5]]
    chunk([false, true, false, true], 3);
    // -> [[false, true, false], [true]]
    chunk([], 7);
    // -> []
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
