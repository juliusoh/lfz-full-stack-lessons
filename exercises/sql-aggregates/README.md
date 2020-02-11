# sql-aggregates

Answering interesting questions about data using aggregate functions.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-aggregates` directory in your terminal.

#### Basic Syntax and Examples

Sometimes it's useful to answer a question about a set of rows in a table or result set. Take our example `"products"` table (imagine there were many, many products in the table).

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

 We may want to know the highest price in the entire table. We'd use the `max()` aggregate function. It's not strictly required that you alias an aggregate (with `as`), but it's good practice because it communicates your intent more clearly.

```sql
select max("price") as "highestPrice"
  from "products";
```

| highestPrice |
|--------------|
| 30           |

If we wanted to know the average price, there's an `avg()` aggregate function for that:

```sql
select avg("price") as "averagePrice"
  from "products";
```

| averagePrice |
|--------------|
| 20           |

Or maybe we just want to know the number of rows in the `"products"` table. We'd use the `count()` aggregate function:

```sql
select count(*) as "totalProducts"
  from "products";
```

| totalProducts |
|---------------|
| 3             |

There are [many aggregate functions](https://www.postgresql.org/docs/10/functions-aggregate.html) available to you in SQL, including `min()`, `sum()`, and `every()`.

#### Grouping Rows in Aggregate

With aggregate functions, SQL becomes an incredibly powerful reporting language. But sometimes you don't want to ask a question about _every_ row in a table altogether. Instead, you want to separate rows into groups and perform aggregate functions on those groups of rows. This is done with a `group by` clause.

For example, if we wanted to know the average price of each product `"category"`, we'd do:

```sql
select "category",
       avg("price") as "averagePrice"
  from "products"
 group by "category";
```

| category | averagePrice |
|----------|--------------|
| fitness  | 30           |
| cleaning | 15           |

Here we've shown that, on average, our `'fitness'` products are more expensive than our `'cleaning'` products.

We can even `count()` the number of products per category:

```sql
select "category",
       count(*) as "totalProducts"
  from "products"
 group by "category";
```

| category | totalProducts |
|----------|---------------|
| fitness  | 1             |
| cleaning | 2             |

It's even possible to aggregate across joins. Suppose we had a table of `"suppliers"` and also wanted to know how many of their products were in the `"products"` table:

**`products`**

| productId | name        | description                | price | category | supplierId |
|-----------|-------------|----------------------------|-------|----------|------------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning | 1          |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  | 2          |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning | 1          |

**`suppliers`**

| supplierId | name     | city          | state      |
|------------|----------|---------------|------------|
| 1          | ScrubHub | Springfield   | Kentucky   |
| 2          | Fidnezz  | Newport Beach | California |
| 3          | Jitters  | Seattle       | Washington |

```sql
select "s"."name" as "supplier",
       count("p".*) as "totalProducts"
  from "suppliers" as "s"
  join "products" as "p" using ("supplierId")
 group by "s"."supplierId";
```

| supplier | totalProducts |
|----------|---------------|
| Fidnezz  | 1             |
| ScrubHub | 2             |

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

1. `average-cost.sql`

    Find the average `"replacementCost"` of all of the `"films"` in the database.

1. `total-dvds.sql`

    Find the total number of physical DVDs that the store keeps in `"inventory"`.

1. `on-the-map.sql`

    List the number of "cities" per country in the "countries" table. There should be 35 in the United States, for example.

1. `starring-in.sql`

    List the categories of movies (and how many) that `'Lisa Monroe'` appeared in. She appeared in a lot of films! Your results should include 3 Sports films and 2 Sci-Fi films, plus a lot more!

1. `movie-maniacs.sql`

    List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending. Karl Seal should be first with $221.55 paid.

1. `profit-margin.sql` (Bonus Challenge)

    List the 5 most profitable DVD titles in inventory. Profit is the amount of money made past the replacement cost.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What are some examples of aggregate functions?
- What is the purpose of a `group by` clause?
