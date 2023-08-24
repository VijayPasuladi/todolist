const express = require("express");
const { request } = require("http");
const app = express();

app.use(express.json());

const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname, "todo.db");

let db = null;

const initialDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(7000, () => {
      console.log("Server running at http://localhost:7000/");
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

initialDBAndServer();

// GET todos API
app.get("/todos/", async (request, response) => {
  const getQuary = `
    SELECT * 
    FROM todos
    ORDER BY id;
    `;

  const todosArray = await db.all(getQuary);
  response.send(todosArray);
});

// GET todo API

app.get("/todos/:todoId", async (request, response) => {
  const { todoId } = request.params;
  const getTodo = `
    SELECT * 
    FROM todos
    WHERE 
    id = '${todoId}';
    `;
  const todo = await db.get(getTodo);
  response.send(todo);
});

// ADD todo API

app.post("/todos/", async (request, response) => {
  const todoDetails = request.body;
  const { id, title, description } = todoDetails;

  const addTodo = `
    INSERT INTO 
      todos(id,title,description)
      VALUEs (
        '${id}',
        '${title}',
        '${description}'
      );
    `;

  const addTodos = await db.run(addTodo);
  const todoId = addTodos.lastID;
  response.send({ todoId: todoId });
});

// UPDATE todo API

app.put("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;

  const { id, title, description } = todoDetails;

  const updateQuary = `
    UPDATE
        todos
    SET
        id = '${id}',
        title = '${title}',
        description = '${description}'
    WHERE 
        id = '${todoId};'
    `;
  await db.run(updateQuary);
  response.send("Todo update Successfully.");
});

//DELETE todo API

app.delete("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;
  const deleteQuary = `
    DELETE FROM todos
    WHERE id = '${todoId}';
    `;

  await db.run(deleteQuary);
  response.send("Todo Deleted Successfully.");
});
