# npm-intro

This lesson introduces `npm`, the _de facto_ package manager for both Node.js and front end web applications.

### Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
- What is a package?
- How can you create a `package.json` with `npm`?
- What is a dependency and how to you add one to a package?
- What happens when you add a dependency to a package with `npm`?

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/npm-intro` directory in your terminal.

### Exercise

1. Read about the NPM website, CLI, and registry at [npmjs.com](https://docs.npmjs.com/about-npm/) and watch the video. Yes, read then watch!
2. [Create a `package.json`](https://docs.npmjs.com/creating-a-package-json-file#creating-a-default-packagejson-file) in `exercises/npm-intro` using the `npm` command.
3. Install the [`jquery`](https://www.npmjs.com/package/jquery) package as a dependency [using the `npm install` command](https://docs.npmjs.com/cli/install.html).
4. Check that your `package.json` has been updated to include `jquery` as a dependency.
5. Notice that a `node_modules` directory was created within `exercises/npm-intro`. **Note:** Your code editor (such as VS Code) may not immediately display this directory in its file explorer. The directory should show up if you use the `ls` command. In the case of VS Code, there is a small "Refresh Explorer" button at the top of the file explorer.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
