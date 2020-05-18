# node-process-argv

This exercise goes a little deeper into how node programs are executed to start processes on your computer. You'll be learning about a very important global variable present in all Node.js programs. In particular, you'll be learning how to access command-line arguments from within JavaScript programs.

### Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
- How do you access the `process` object in a Node.js program?
- What is the data type of `process.argv` in Node.js?

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/node-process-argv` directory in your terminal.

### Exercise

1. Visit the [`Process`](https://nodejs.org/docs/latest-v10.x/api/process.html) documentation in the official Node.js documentation (for version 10) and skim through the list of properties that exist on the global `process` object. Read the first sentence describing the `process` object.
1. Within `process.js`, use `console.log()` to print the entire `process` object to the terminal.
1. Test your code by executing `process.js` with the `node` command.
1. Read about [`process.argv`](https://nodejs.org/docs/latest-v10.x/api/process.html#process_process_argv) in the official Node.js documentation.
1. Within `all-arguments.js` use `console.log()` to print the `.argv` property of the `process` object to the terminal.
1. Test your code by executing `all-arguments.js` with the `node` command.
1. Within `echo.js` only print the message that the user types when executing your program with node.
    > For example typing `node echo.js 'Hello'` should print `hello` to your terminal.
    > Typing `node echo.js 'Command line arguments' should print `Command line arguments` to your terminal.
    > Any string sent to `node echo.js` should be "echoed" back to the terminal.
1. Test your code by executing `echo.js` with the `node` command.

<p align="middle">
  <img src="images/process-argv.png">
</p>

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
