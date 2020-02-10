# sql-delete

Remove rows from SQL tables using `delete` statements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-delete` directory in your terminal.

#### Basic Syntax and Example

An SQL `delete` statement is how rows get removed from tables. Consider the following `"products"` table:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To delete from this table, we might execute the following command:

```sql
delete from "products";
```

💀💀💀💀 **WE JUST DELETED EVERYTHING FROM THE TABLE!** and _there is no undo_. 😢

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|

Are you awake? 😈

You must be _extremely_ careful when deleting things from a table as it cannot be undone. Let's try that again. We only want to delete the ShakeWeight because, well, it's ridiculous. We can target specific rows to delete by including a `where` clause.

```sql
delete from "products"
 where "productId" = 24;
```

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

#### Complex `where` Clauses With `and`

A `where` clause does not have to refer to only one column. In fact, multiple criteria can be specified using the `and` keyword.

Let's "reset" the example table...

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 100   | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

If we wanted to `delete` all `"products"` in the `'cleaning'` category that are cheaper than `20`, we would:

```sql
delete from "products"
 where "category" = 'cleaning'
   and "price"    < 20
```

You can use `and` just about anywhere that logically makes sense in SQL. If you want multiple things to be true to meet your criteria, simply list them out using `and`.

### Exercise

For this exercise, you will be authoring queries in individual `.sql` files in the exercise directory and then executing them against the `pagila` DVD Rental database. If you have not set up the `pagila` database, then you probably skipped the [`postgres-database`](../postgres-database) lesson.

Before you can begin, it's important to confirm that the PostgreSQL database server is running. The status should be **`online`**. You can check with the following command:

```bash
sudo service postgresql status
```

If your database server is not online, then you can start it with the following command:

```bash
sudo service postgresql start
```

To start the `pgweb` GUI tool for PostgreSQL, run the following command in a separate terminal session, then visit `http://localhost:8081` in your browser:

```bash
pgweb --db=pagila
```

You can execute each `.sql` file that you write with the following command and its results will be printed to STDOUT (your terminal):

```bash
psql -d pagila -f name-of-file.sql
```

1. `diplomat.sql`

    Delete the address with the `addressId` of `161`.

1. `bizarre.sql`

    Delete the city of `'Pyongyang'`.

1. `sanction.sql`

    Delete the country with the `countryId` of `70`.

1. `puritanical.sql`

    Delete all films that are not rated `'G'`. This should produce an error.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How do you delete rows from a database table?
- How do you accidentally delete all rows from a table?
