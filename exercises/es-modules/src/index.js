const TodoApp = require('./components/todo-app');

const container = document.querySelector('#app');

const nextId = 4;

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
});

app.start();
