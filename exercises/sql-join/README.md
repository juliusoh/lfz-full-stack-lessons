# sql-join

Unlocking the power of relational databases by joining tables.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-join` directory in your terminal.

#### Foreign Keys Between Tables

An SQL `join` clause is a way of combining data from two different database tables into one result set. Consider the following two tables:

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

The data in this fictitious database has been split into two tables. One table is responsible for storing products, while the other stores information about suppliers of those products. This helps keep data organized so that updates can be made independently to either table. In general, splitting out database data into different tables is a good thing.

Notice how each row in the `"products"` table has a `"supplierId"` column. That column specifically refers to values in the `"supplierId"` column of the `"suppliers"` table. This in known as a **foreign key**. Instead of putting _all_ of the supplier information for a product into the product row itself, there is instead just _one_ column that links the `"products"` table to the `"suppliers"` table.

#### Joining Tables

It's possible to combine the data from each of these tables into one _mega_ result set:

```sql
select *
  from "products"
  join "suppliers" using ("supplierId");
```

Before we look at the example result, here are a few things to note about the above `select` statement:

- We are selecting _all_ columns from _both_ the `"products"` table and the `"suppliers"` table.
- The `join` clause follows the `from` clause.
- The `join` clause is instructing the database server to link the two tables by their `"supplierId"` column.

| productId | name        | description                | price | category | supplierId | name     | city          | state      |
|-----------|-------------|----------------------------|-------|----------|------------|----------|---------------|------------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning | 1          | ScrubHub | Springfield   | Kentucky   |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  | 2          | Fidnezz  | Newport Beach | California |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning | 1          | ScrubHub | Springfield   | Kentucky   |

That is a lot of information! 🤔 And there's some weird stuff in here too. There are **two** `"name"` columns. What does that even mean? It's not common to use database tables this way. The result set is kind of confusing. Typically we pick and choose which columns should be included in the results.

#### Column and Table Aliasing

Sometimes, a column's original name doesn't make sense for a desired result set. This can be for one of two reasons:

1. The column has the same name as another table in the joined results.
1. The column name doesn't really communicate enough information about the data in the column outside of the context of the table.

In order to address either of theses scenarios, we can **alias** column names. For example, if we want the product `"name"` and the supplier `"name"` to both appear in the same result set, we can do this:

```sql
select "products"."name" as "product",
       "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");
```

In this example we're selecting the `"name"` column from both the `"products"` table and the `"suppliers"` table, but then _renaming_ them just for the result set using the `as` keyword. The column names are not changed in the tables themselves.

| product     | supplier |
|-------------|----------|
| ShamWow     | ScrubHub |
| ShakeWeight | Fidnezz  |
| OxyClean    | ScrubHub |

It's also common for table names to be aliased in the `from` and `join` clauses of the statement. Sometimes, we need to select more than just a couple of columns and re-typing the table names can get tedious.

```sql
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId");
```

| product     | category | supplier | state      |
|-------------|----------|----------|------------|
| ShamWow     | cleaning | ScrubHub | Kentucky   |
| ShakeWeight | fitness  | Fidnezz  | California |
| OxyClean    | cleaning | ScrubHub | Kentucky   |

It's possible to filter a joined result set with a `where` clause too:

```sql
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId")
 where "p"."category" = 'cleaning'
   and "p"."price"    < 20;
```

| product     | category | supplier | state      |
|-------------|----------|----------|------------|
| OxyClean    | cleaning | ScrubHub | Kentucky   |

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

1. `big-spenders.sql`

    Select the 10 largest payment amounts, including the first and last name of the customer who paid.

1. `where-are-they.sql`

    Generate a list of all addresses in the system that includes their `"line1"`, `"city"."name"`, and `"district"`. Bragging rights if you get the name of the country in there too.

1. `what-and-when.sql`

    Use two joins to select the `"releaseYear"` and `"categories"."name"` of the film with the `"title"` `'Boogie Amelie'`. There is a special table in the database named `"filmCategory"` for this purpose.

1. `sassy-cast.sql`

    Use two joins to select the `"firstName"` and `"lastName"` of all actors that starred in the film `'Jersey Sassy'`. There is a special table in the database named `"castMembers"` for this purpose.

1. `magic-mallrats.sql`

    Find the first and last name of every customer who rented `'Magic Mallrats'`. Hint: you'll need three joins.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is a foreign key?
- How do you join two SQL tables?
- How do you temporarily rename columns or tables in a SQL statement?
