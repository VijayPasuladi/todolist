const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todo.db");
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL 
    );
`;

db.run(createTableQuery, function (err) {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Table todo created successfully.");
  }

  // Close the database connection
  db.close((err) => {
    if (err) {
      console.error("Error closing database:", err.message);
    } else {
      console.log("Database connection closed.");
    }
  });
});

const insertUserQuery = `
    INSERT INTO todos (id, title,description)
    VALUES (
        ?,?,?
    );
`;

const data = [
  {
    id: 1,
    title: " Learn ReactJs ",
    description:
      "React.js is a popular JavaScript library for building user interfaces with a component-based architecture.",
  },
  {
    id: 2,
    title: " Learn HTML ",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications, defining the structure and content of a webpage.",
  },
  {
    id: 3,
    title: " Learn Python ",
    description:
      "Python is a versatile and readable high-level programming language used for web development, data analysis, AI, and more.",
  },
  {
    id: 4,
    title: " Learn CSS ",
    description:
      "CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of web pages.",
  },
  {
    id: 5,
    title: " Learn Node JS ",
    description:
      "Node.js is an open-source runtime environment that executes JavaScript code outside a web browser, making it suitable for server-side applications.",
  },
  {
    id: 6,
    title: " Learn Express JS ",
    description:
      "Express.js is a minimal, fast, and flexible Node.js web application framework for building web apps and APIs.",
  },
];

db.run(insertUserQuery, [data], function (err) {
  if (err) {
    console.error("Error inserting data:", err.message);
  } else {
    console.log(`User todo inserted successfully.`);
  }
});

db.close((err) => {
  if (err) {
    console.error("Error closing database:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});
