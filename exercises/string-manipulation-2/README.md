# string-manipulation-2

JavaScript string manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/string-manipulation-2` directory in your terminal.

### Exercise

Remember, `String`s [are Array-like](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access) and have a lot of [useful methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2).

To begin, download the dependencies listed in `package.json` with the `npm install` command. Then examine the `"scripts"` included in `package.json`. `"test"` runs the [`mocha`](https://mochajs.org/) testing framework once; `"tdd"` runs `mocha` in `--watch` mode to automatically re-run tests when file changes are detected.

1. ### `truncate(length, string)`

    Cuts `string` down to at most `length` characters long and appends an ellipsis (`...`).

    #### Parameters

    - `length` - an integral JavaScript `Number`
    - `string` - any JavaScript `String`

    #### Return Value

    - A shortened version of `string`, plus in an ellipsis.

    #### Examples

    ```js
    truncate(8, 'All Code All Day')              // -> "All Code..."
    truncate(15, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, Java..."
    truncate(1, 'React')                         // -> "R..."
    truncate(3, 'Angular')                       // -> "Ang..."
    truncate(5, '')                              // -> "..."
    truncate(20, 'LearningFuze')                 // -> "LearningFuze..."
    ```

1. ### `capitalizeWord(word)`

    #### Parameters

    - `word` - A single word as a JavaScript `String`

    #### Return Value

    Returns `word` with its first character uppercased and the rest of its characters lowercased. For this function, **JavaScript** is _always_ cased as **JavaScript**.

    #### Examples

    ```js
    capitalizeWord('foo')        // -> "Foo"
    capitalizeWord('BAR')        // -> "Bar"
    capitalizeWord('bAZ')        // -> "Baz"
    capitalizeWord('qUx')        // -> "Qux"
    capitalizeWord('jaVAsCrIPt') // -> "JavaScript"
    capitalizeWord('javaScript') // -> "JavaScript"
    capitalizeWord('JavascRipt') // -> "JavaScript"
    ```

1. ### `ransomCase(string)`

    #### Parameters

    - `string` - any JavaScript `String`

    #### Return Value

    Returns `string` with every-other character uppercased.

    #### Examples

    ```js
    ransomCase('foo')          // -> "fOo"
    ransomCase('QUUX')         // -> "qUuX"
    ransomCase('WaldO')        // -> "wAlDo"
    ransomCase('JavaScript')   // -> "jAvAsCrIpT"
    ransomCase('LearningFuze') // -> "lEaRnInGfUzE"
    ```

1. ### `capitalizeWords(string)`

    #### Parameters

    - `string` - any JavaScript `String`

    #### Return Value

    Returns `string` with every word capitalized.

    #### Examples

    ```js
    capitalizeWords('needs solution')
    // -> "Needs Solution"
    capitalizeWords('Add string manipulation practice.')
    // -> "Add String Manipulation Practice."
    capitalizeWords('aLl CoDe aLl DaY')
    // -> "All Code All Day"
    capitalizeWords('HTML, CSS, JavaScript, PHP, SQL')
    // -> "Html, Css, Javascript, Php, Sql"
    ```

1. ### `numVowels(string)`

    #### Parameters

    - `string` - any JavaScript `String`

    #### Return Value

    The `Number` of vowel characters in `string`.

    #### Examples

    ```js
    numVowels('All Code All Day')             // -> 5
    numVowels('HTML, CSS, JavaScript, React') // -> 5
    numVowels('React')                        // -> 2
    numVowels('Angular')                      // -> 3
    numVowels('')                             // -> 0
    numVowels('LearningFuze')                 // -> 5
    ```

1. ### `firstChars(length, string)`

    #### Parameters

    - `length` - an integral JavaScript `Number`
    - `string` - any JavaScript `String`

    #### Return Value

    The first `length` characters of `string`.

    #### Examples

    ```js
    firstChars(8, 'All Code All Day')              // -> "All Code"
    firstChars(15, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, Java"
    firstChars(1, 'React')                         // -> "R"
    firstChars(3, 'Angular')                       // -> "Ang"
    firstChars(5, '')                              // -> ""
    firstChars(20, 'LearningFuze')                 // -> "LearningFuze"
    ```

1. ### `lastChars(length, string)`

    #### Parameters

    - `length` - an integral JavaScript `Number`
    - `string` - any JavaScript `String`

    #### Return Value

    The last `length` characters of `string`.

    #### Examples

    ```js
    lastChars(8, 'All Code All Day')              // -> " All Day"
    lastChars(15, 'HTML, CSS, JavaScript, React') // -> "vaScript, React"
    lastChars(1, 'React')                         // -> "t"
    lastChars(3, 'Angular')                       // -> "lar"
    lastChars(5, '')                              // -> ""
    lastChars(20, 'LearningFuze')                 // -> "LearningFuze"
    ```

1. ### `swapChars(firstIndex, secondIndex, string)`

    #### Parameters

    - `firstIndex` - an integral JavaScript `Number`
    - `secondIndex` - an integral JavaScript `Number`
    - `string` - any JavaScript `String`

    #### Return Value

    `string` with the characters at `firstIndex` and `secondIndex` swapped.

    #### Examples

    ```js
    swapChars(0, 1, 'lodash')                         // -> "oldash"
    swapChars(0, 4, 'React')                          // -> "teacR"
    swapChars(6, 7, 'complete')                       // -> "compleet"
    swapChars(0, 8, 'LearningFuze')                   // -> "FearningLuze"
    swapChars(11, 23, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, RavaScript, Jeact"
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
