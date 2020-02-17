# string-manipulation-1

JavaScript string manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/string-manipulation-1` directory in your terminal.

### Exercise

Remember, `String`s [are Array-like](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access) and have a lot of [useful methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2).

To begin, download the dependencies listed in `package.json` with the `npm install` command. Then examine the `"scripts"` included in `package.json`. `"test"` runs the [`mocha`](https://mochajs.org/) testing framework once; `"tdd"` runs `mocha` in `--watch` mode to automatically re-run tests when file changes are detected.

```bash
npm test

> mocha --reporter nyan

 0   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_,------,
 0   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_|   /\_/\
 43  -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-^|__( o .o)
     -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-  ""  ""

  0 passing (17ms)
  43 pending
```

Go to `test/get-first-char.test.js` in your code editor and change `describe.skip(` to simply `describe(`. Then run the `"test"` script again.

```js
// before
describe.skip('getFirstChar(string)', function () {
// after
describe('getFirstChar(string)', function () {
```

```bash
npm test

> mocha --reporter nyan

 0   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_,------,
 5   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_|   /\_/\
 38  -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-^|__( x .x)
     -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-  ""  ""

  0 passing (24ms)
  38 pending
  5 failing
```

Then, following the specifications below, complete each of the functions defined in the provided `.js` files. Before moving to the next function, remove the `.skip` from its corresponding test file in the `test` directory. Use the `"tdd"` script to automatically re-run tests when you save your files. `npm run tdd`

1. ### `getFirstChar(string)`

    #### Parameters

      - `string` - Any JavaScript `String`

    #### Return Value

    The first character of `string`.

    #### Examples

    ```js
    getFirstChar('LearningFuze') // -> "L"
    getFirstChar('paschal')      // -> "p"
    getFirstChar('HTML')         // -> "H"
    getFirstChar('code')         // -> "c"
    getFirstChar('String')       // -> "S"
    ```

1. ### `getLastChar(string)`

    #### Parameters

      - `string` - Any JavaScript `String`

    #### Return Value

    The _last_ character of `string`.

    #### Examples

    ```js
    getFirstChar('LearningFuze') // -> "e"
    getFirstChar('paschal')      // -> "l"
    getFirstChar('HTML')         // -> "L"
    getFirstChar('code')         // -> "e"
    getFirstChar('String')       // -> "g"
    ```

1. ### `capitalize(word)`

    #### Parameters

      - `word` - A single word as a JavaScript `String`

    #### Return Value

    The original `word`, but with its first character uppercased and the rest of its characters lowercased.

    #### Examples

    ```js
    capitalize('a')    // -> "A"
    capitalize('link') // -> "Link"
    capitalize('tO')   // -> "To"
    capitalize('ThE')  // -> "The"
    capitalize('pAsT') // -> "Past"
    ```

1. ### `isUpperCased(word)`

    #### Parameters

      - `word` - A single word as a JavaScript `String`

    #### Return Value

    A `Boolean` indicating whether or not all characters in `word` are **uppercased**.

    #### Examples

    ```js
    isUpperCased('LearningFuze') // -> false
    isUpperCased('JavaScript')   // -> false
    isUpperCased('HTML')         // -> true
    isUpperCased('css')          // -> false
    isUpperCased('PHP')          // -> true
    ```

1. ### `isLowerCased(word)`

    #### Parameters

      - `word` - A single word as a JavaScript `String`

    #### Return Value

    A `Boolean` indicating whether or not all characters in `word` are **lowercased**.

    #### Examples

    ```js
    isLowerCased('LearningFuze') // -> false
    isLowerCased('zip-ties')     // -> true
    isLowerCased('JavaScript')   // -> false
    isLowerCased('burgers')      // -> true
    isLowerCased('HTML')         // -> false
    ```

1. ### `isVowel(char)`

    #### Parameters

      - `char` - A single JavaScript `String` character

    #### Return Value

    A `Boolean` indicating whether or not `char` is a vowel. `isVowel` should handle both uppercase and lowercase characters.

    #### Examples

    ```js
    isVowel('L') // -> false
    isVowel('f') // -> false
    isVowel('Z') // -> false
    isVowel('a') // -> true
    isVowel('E') // -> true
    isVowel('I') // -> true
    isVowel('o') // -> true
    isVowel('u') // -> true
    ```

1. ### `getWords(string)`

    #### Parameters

      - `string` - A JavaScript `String` containing zero or more words, separated by spaces.

    #### Return Value

    An `Array` of JavaScript `String`. Each `String` is one of the words in the `string` parameter.

    #### Examples

    ```js
    getWords('LearningFuze')
    // -> ["LearningFuze"]
    getWords('Web Development')
    // -> ["Web", "Development"]
    getWords('Cascading Style Sheets')
    // -> ["Cascading", "Style", "Sheets"]
    getWords('European Computer Manufacturers Association')
    // -> ["European", "Computer", "Manufacturers", "Association"]
    getWords('')
    // -> []
    ```

1. ### `reverseWord(word)`

    #### EXTRA - Do not use [`String.prototype.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to complete this function.

    #### Parameters

      - `word` - A single word as a JavaScript `String`

    #### Return Value

    A JavaScript `String` containing the characters of `word` in reverse order.

    #### Examples

    ```js
    reverseWord('foo')          // -> "oof"
    reverseWord('rab')          // -> "bar"
    reverseWord('LearningFuze') // -> "ezuFgninraeL"
    reverseWord('tpircSavaJ')   // -> "JavaScript"
    reverseWord('racecar')      // -> "racecar"
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
