# array-manipulation-3

JavaScript array manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-manipulation-3` directory in your terminal.

### Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="images/failing-tests.png" alt="failing-tests">
</p>

Open `src/equal.js` and `src/equal.test.js` in your code editor and skim the code in `equal.test.js`. As you add to or modify `equal.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="images/passing-tests.png" alt="passing-tests">
</p>

1. ### `equal(first, second)`

    #### Parameters

      - `first` - Any JavaScript `Array`
      - `second` - Any JavaScript `Array`

    #### Return Value

    A `Boolean` indicating whether or not `first` and `second` are equal to each other, index-for-index.

    #### Examples

    ```js
    equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz'])
    // -> true
    equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'qux'])
    // -> false
    equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    // -> true
    equal([1, 2, 3, 4, 5], [1, 2, 3, 3, 5]);
    // -> false
    equal([false, true, false, true], [false, true, false, true]);
    // -> true
    equal([false, true, false, true], [true, false, true, false]);
    // -> false
    equal([], []);
    // -> true
    ```

1. ### `flatten(array)` 🚨

    🚨 **Do not use `Array.prototype.flat` in your implementation.**

    #### Parameters

    - `array` - Any JavaScript `Array`

    #### Return Value

    A new `Array` with any direct child `Arrays` unwrapped. This function should only "flatten" `array` by one level.

    #### Examples

    ```js
    flatten([['foo', 'bar'], ['baz', 'qux']]);
    // -> ["foo", "bar", "baz", "qux"]
    flatten([[1], [2], 3, 4, [5]]);
    // -> [1, 2, 3, 4, 5]
    flatten([false, [true, [false]], [true]]);
    // -> [false, true, [false], true]
    flatten([]);
    // -> []
    ```

    #### Hint

    Test whether a value is an `Array` with [`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).

1. ### `zip(first, second)`

    #### Parameters

      - `first` - Any JavaScript `Array`
      - `second` - Any JavaScript `Array`

    #### Return Value

    An `Array` of `Arrays`. Each sub-`Array` is a pair containing an element from `first`, and an element from `second`, each from the same index of their respective source `Array`. The "zipped" result is only as long as the shorter of `first` and `second`.

    #### Examples

    ```js
    zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]);
    // -> [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]
    zip(
      ['dog', 'lion', 'hawk', 'tiger'],
      ['cat', 'lamb', 'dove']
    )
    // -> [["dog", "cat"], ["lion", "lamb"], ["hawk", "dove"]]
    zip([1, 3, 5], [2, 4, 6, 8])
    // -> [[1, 2], [3, 4], [5, 6]]
    zip(['l', 'e', 'a', 'r', 'n', 'i'], ['n', 'g', 'f', 'u', 'z', 'e'])
    // -> [["l", "n"], ["e", "g"], ["a", "f"], ["r", "u"], ["n", "z"], ["i", "e"]]
    ```

1. ### `unique(array)`

    #### Parameters

      - `array` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing only the unique elements of `array`, in the order they first appear in `array`.

    #### Examples

    ```js
    unque(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
    // -> ["foo", "bar", "baz", "qux", "corge"]
    unque([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
    // -> [1, 3, 2, 5, 4]
    unique([false, true, false, true]);
    // -> [false, true]
    unque([]);
    // -> []
      ```

1. ### `difference(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) between `first` and `second`. That is, elements are included if they are found in one `Array`, but not the other. The result values are unqiue and their order is determined by the order they occur.

    #### Examples

    ```js
    difference([2, 1], [2, 3]);
    // -> [1, 3]
    difference(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
    // -> ["html", "javascript", "php", "sql"]
    difference(
      ['a', 'link', 'to', 'the', 'past'],
      ['the', 'adventure', 'of', 'link']
    )
    // -> ["a", "to", "past", "adventure", "of"]
    ```

1. ### `intersection(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing **unique** values found in both `first` and `second`. The order of result values is determined by the order they occur.

    #### Examples

    ```js
    intersection([2, 1], [2, 3]);
    // -> [2]
    intersection(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
    // -> ["css"]
    intersection(
      ['a', 'link', 'to', 'the', 'past'],
      ['the', 'adventure', 'of', 'link']
    )
    // -> ["link", "the"]
    ```

1. ### `union(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing **unique** values from both `first` and `second` in the order they appear.

    #### Examples

    ```js
    union([2, 1], [2, 3]);
    // -> [2, 1, 3]
    union(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
    // -> ["html", "css", "javascript", "php", "sql"]
    union(
      ['a', 'link', 'to', 'the', 'past'],
      ['the', 'adventure', 'of', 'link']
    )
    // -> ["a", "link", "to", "the", "past", "adventure", "of"]
    ```


### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
