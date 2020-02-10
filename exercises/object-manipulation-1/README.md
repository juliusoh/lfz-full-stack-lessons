# object-manipulation-1

JavaScript object manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/array-manipulation-1` directory in your terminal.

### Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="images/failing-tests.png" alt="failing-tests">
</p>

Open `src/get-value.js` and `src/get-value.test.js` in your code editor and skim the code in `get-value.test.js`. As you add to or modify `get-value.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="images/passing-tests.png" alt="passing-tests">
</p>

1. ### `getValue(object, key)`

    #### Parameters

      - `object` - Any JavaScript `Object`
      - `key` - A JavaScript `String`

    #### Return Value

      The value in `object` found at the `key` property.

    #### Examples

      ```js
      var dave = { firstName: 'David', lastName: 'Thomas' }
      getValue(dave, 'firstName'); // -> "Dave"
      getValue(dave, 'lastName'); // -> "Thomas"

      var learningFuze = { latitude: 33.6349, longitude: 117.7405 }
      getValue(learningFuze, 'latitude'); // -> 33.6349
      getValue(learningFuze, 'longitude'); // -> 117.7405

      var tim = { name: 'Tim', language: 'JavaScript' }
      getValue(tim, 'age'); // -> undefined
      getValue(tim, 'yearsExperience'); // -> undefined
      ```

1. ### `setValue(object, key, value)`

    #### Parameters

      - `object` - Any JavaScript `Object`
      - `key` - A JavaScript `String`
      - `value` - Any JavaScript value

    #### Return Value

      This function does not return anything (`undefined`)

    #### Examples

    ```js
    var dave = { firstName: 'David' };
    setValue(dave, 'lastName', 'Thomas');
    console.log(dave); // { firstName: "David", lastName: "Thomas" }

    var learningFuze = { latitude: 33.6349 };
    setValue(learningFuze, 'attitude', 'sanguine');
    console.log(learningFuze); // { latitude: 33.6349, attitude: "sanguine" }

    var tim = { name: 'Tim', language: 'JavaScript' };
    setValue(tim, 'language', 'PHP');
    console.log(tim); // { name: "Tim", language: "PHP" }
    ```

1. ### `getKeys(object)` 🚨

    **🚨 Do not use `Object.keys` in your implementation of `getKeys()`.**

    #### Parameters

      - `object` - Any JavaScript `Object`

    #### Return Value

      An `Array` of the `object`'s property keys.

    #### Examples

    ```js
    var dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    getKeys(dave); // -> ["firstName", "lastName"]

    var learningfuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    }
    getKeys(learningFuze); // -> ["latitude", "attitude", "longitude"]

    var tim = {}
    getKeys(tim); // -> []
    ```

1. ### `getValues(object)` 🚨

    ** 🚨 Do not use `Object.values` in your implementation of `getValues()`.**

    #### Parameters

      - `object` - Any JavaScript `Object`

    #### Return Value

      An `Array` of the `object`'s property keys.

    #### Examples

    ```js
    var dave = {
      firstName: 'David',
      lastName: 'Thomas'
    };
    getValues(dave); // -> ["David", "Thomas"]

    var learningfuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    }
    getValues(learningFuze); // -> [33.6349, "sanguine", 117.7405]

    var tim = {}
    getValues(tim); // -> []
    ```

1. ### `toObject(keyValuePair)`

    #### Parameters

      - `keyValuePair` - An `Array` containing two elements; a `String` key and any other JavaScript value.

    #### Return Value

      - And `Object` with one property consisting of the passed `keyValuePair`.

    #### Examples

    ```js
    toObject(['firstName', 'David']);      // -> { firstName: "David" }
    toObject(['isCool', true]);             // -> { isCool: true }
    toObject(['employer', 'LearningFuze']); // -> { employer: "LearningFuze" }
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
