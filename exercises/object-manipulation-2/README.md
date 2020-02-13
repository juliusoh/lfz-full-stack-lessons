# object-manipulation-2

JavaScript object manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/object-manipulation-2` directory in your terminal.

### Exercise


For this exercise you will be implementing several generic object manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

Open `src/pick.js` and `src/pick.test.js` in your code editor and skim the code in `pick.test.js`. As you add to or modify `pick.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

1. ### `pick(source, keys)`

    Creates an object composed of the picked `source` properties.

    #### Parameters

      - `source` - Any JavaScript `Object`
      - `keys` - An array of JavaScript `String`s

    #### Return Value

      A new `Object` containing all of the properties of `source` listed in `keys`. If a key is listed in `keys`, but is not defined in `source`, then that property is not added to the new `Object`.

    #### Examples

      ```js
      pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) // -> { foo: 1, baz: 3 }
      pick({ qux: 4, corge: 5 }, ['bar', 'grault'])    // -> {}
      pick({ bar: 2 }, ['foo', 'bar', 'baz'])          // -> { bar: 2 }
      ```

1. ### `omit(source, keys)`

    The opposite of `pick`; this method creates an object composed of properties of `source` not listed in `keys`

    #### Parameters

      - `source` - Any JavaScript `Object`
      - `keys` - An array of JavaScript `String`s

    #### Return Value

      A new `Object` containing all of the properties of `source` that _are not_ listed in `keys`. If a key is listed in `keys`, then it should not be included in the new `Object`.

    #### Examples

      ```js
      omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) // -> { bar: 2 }
      omit({ qux: 4, corge: 5 }, ['bar', 'grault'])    // -> { qux: 4, corge: 5 }
      omit({}, ['foo', 'bar', 'baz'])                  // -> {}
      ```

1. ### `invert(source)`

    Creates an object composed of the inverted keys and values of `source`.

    #### Parameters

      - `source` - Any JavaScript `Object`

    #### Return Value

      A new `Object` containing all properties of `source`, but with the keys and values inverted.

    #### Examples

      ```js
      invert({ age: NaN, occupation: 'programmer', language: 'JavaScript' })
      // -> { NaN: 'age', programmer: 'occupation', JavaScript: 'language' }
      invert({ accountId: 'axbxcx', amount: 1000, type: 'withdrawal' })
      // -> { axbxcx: 'accountId', '1000': 'amount', withdrawal: 'type' }
      invert({ name: 'ada', type: 'cat', breed: 'bengal', age: 1.5 })
      // -> { ada: 'name', cat: 'type', bengal: 'breed', '1.5': 'age' }
      invert({})
      // -> {}
      ```

1. ### `defaults(target, source)`

    Assigns properties of `source` object to the `target` object for all properties that are not defined on `target`.

    #### Parameters

      - `target` - Any JavaScript `Object`
      - `source` - Any JavaScript `Object`

    #### Return Value

      This function does not return anything, but it does modify `target`.

    #### Examples

    ```js
    const target = {};
    const source = {
      foo: 1,
      bar: 2,
      baz: 3
    };
    defaults(target, source);
    console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3
    };
    const source = {
      bar: 2
    };
    defaults(target, source);
    console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3
    };
    const source = {
      foo: 4,
      bar: 2,
      baz: 5
    };
    defaults(target, source);
    console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3
    };
    const source = {};
    defaults(target, source);
    console.log(target) // -> { foo: 1, baz: 3 }
    ```



### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
