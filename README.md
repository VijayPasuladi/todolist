# Todo Application

Given an `app.js` file and an empty database file `todo.db`.

Create a table with the name `todos` with the following columns,

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| title     | TEXT    |
| description | TEXT    |


and write APIs to perform operations on the table `todos`,

### API 1

#### Path: `/todos/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
    ```
    /todos
    ```
  - **Description**:

    Returns a list of all todos.

  - **Response**

    ```
    [
      {
        id: 1,
        title: "Learn Python",
        description: "Python is a versatile and readable high-level programming language used for web development, data analysis, AI, and more.",
      },
      ...
    ]
    ```
### API 2

#### Path: `/todos/:todoId/`

#### Method: `GET`

#### Description:

Returns a specific todo based on the todo ID

#### Response

```
{
  id: 2,
  title: "Learn Python",
  description: "Python is a versatile and readable high-level programming language used for web development, data analysis, AI, and more.IGH",
  }
```

### API 3

#### Path: `/todos/`

#### Method: `POST`

#### Description:

Create a todo in the todo table,

#### Request

```
{
  id: 2,
  title: "Learn Python",
  description: "Python is a versatile and readable high-level programming language used for web development, data analysis, AI, and more.IGH",
  }
```

#### Response

```
Todo Successfully Added
```

### API 4

#### Path: `/todos/:todoId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific todo based on the todo ID

- **Scenario 1**
  - **Request**
    ```
    {
      "title": "Learn React Js"
    }
    ```
  - **Response**

    ```
    Todo Updated
    ```

### API 5

#### Path: `/todos/:todoId/`

#### Method: `DELETE`

#### Description:

Deletes a todo from the todo table based on the todo ID

#### Response

```
Todo Deleted
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
