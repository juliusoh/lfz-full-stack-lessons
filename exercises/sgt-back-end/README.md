# sgt-back-end

Building a simple JSON API.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sgt-back-end` directory in your terminal.

### Tips!

- Bookmark all of the links in this lesson and be prepared to refer back to them!
- You can force database failures by sending malformed SQL queries to the database.

### Challenge

For this challenge you will be creating a small back end API using Node.js and PostgreSQL. Each endpoint that you make should be thoroughly tested with the HTTPie command line client.

Before you begin, be sure to create a new database named `studentGradeTable` from the command line like this:

```bash
createdb studentGradeTable
```

Import the provided `schema.sql` from the command line like this:

```bash
psql -d studentGradeTable -f schema.sql
```

Import the sample `data.sql` from the command line like this:

```bash
psql -d studentGradeTable -f data.sql
```

You'll need to create an `index.js` file to build an Express.js server in. You need a `package.json` file as well, just like in your previous `express` lessons.

In addition to the `express` package, you'll also be using the [`pg` package](https://www.npmjs.com/package/pg). The `pg` documentation is hosted on a dedicated website [here](https://node-postgres.com/).

When using the `pg` package, you'll need to create a database connection object like this:

```js
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
```

The above example should work fine, but here are links to the full documentation for [connecting to Postgres](https://node-postgres.com/features/connecting) and [connection pool objects](https://node-postgres.com/api/pool).

You only need to create this object once at the top of your file. You can then use it in each of your [Express.js routes](https://expressjs.com/en/starter/basic-routing.html). The most important part of the documentation is probably [how to send SQL queries to the database with the `query()` method](https://node-postgres.com/features/queries).

Once you've created a `pg.Pool`, you can [use its `query()` method](https://node-postgres.com/api/pool#pool.query) to send SQL to PostgreSQL and receive results.

Here is an example route for `GET`ing a `grade` by its `gradeId`. Read through the code very slowly. You will be following this pattern fairly closely for many of your own routes.

```js
app.get('/api/grades/:gradeId', (req, res, next) => {
  const { gradeId } = req.params;
  if (!parseInt(gradeId, 10)) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  // review the documentation on parameterized queries here:
  // https://node-postgres.com/features/queries#Parameterized%20query
  // you'll be using this information to prevent SQL injection attacks
  // https://www.youtube.com/watch?v=_jKylhJtPmI
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
})
```

You will be implementing the following endpoints. Be sure to use appropriate [status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). **You should include useful error messages in failure scenarios**. The error message should clearly communicate what went wrong. Imagine that you are trying to help the client do the right thing. See the example above.


- `GET /api/grades` returns all grades from the `"grades"` table. The client should receive an array of objects.

    The result could be a `200` or a `500`.
    - `200` because the query may succeed
    - `500` because the query may fail

- `POST /api/grades` inserts a new grade into the `"grades"` table and returns the created grade. The client should receive an object, not an array.
    The result could be a `201`, `400`, or `500`.
    - `201` because the grade may be successfully inserted,
    - `400` because the client may supply an invalid `grade`,
    - `500` or the query may fail.

- `PUT /api/grades/:gradeId` updates a grade in the `"grades"` table and returns the updated grade. The client should receive an object, not an array.

    The result could be a `200`, `400`, `404`, or `500`.
    - `200` because the grade may be successfully updated,
    - `400` because the client may supply an invalid `grade` or `gradeId`,
    - `404` because the target `grade` may not exist in the database,
    - `500` or there may be an error querying the database.

- `DELETE /api/grades/:gradeId` deletes a grade from the `"grades"` table.

    The result could be a `204`, `400`, `404`, or `500`.
    - `204` because the grade may be successfully deleted,
    - `400` because the client may supply an invalid `gradeId`,
    - `404` because the target `grade` may not exist in the database,
    - `500` or there may be an error querying the database.

### Tips

- Use [parameterized queries where necessary](https://node-postgres.com/features/queries#Parameterized%20query) to avoid [SQL Injection attacks!](https://www.youtube.com/watch?v=_jKylhJtPmI)
- Use ES6 template strings for your SQL so that you can indent them for readability.
- Don't forget to add the `express.json()` middleware to parse JSON request bodies.
- If the client successfully creates or updates a `grade`, then return them the _entire_ `grade` including any auto-generated values.
- No matter what happens, be sure to always respond to the client, even if there's an error querying the database.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
