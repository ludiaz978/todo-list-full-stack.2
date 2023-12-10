// require express
const express = require('express');
const cors = require('cors');
//create the express app
const app = express();
 //setup MIDDLEWARE


// CORS middleware
app.use(cors());

// logging midleware
app.use((req, res, next) => {
// examples req.method: get, post, put, delete, req.url: /api/users
    console.log('${req.method} ${req.url}');
//next() is a function that we call to move on to the next middleware
next();
})

// JSON parsing middleware
app.use(express.json());

//create local storage array for todos
let todos = [{id: 1, task: "wash dishes"}];

// create a get handler to the path/todos that sends back the todos
app.get('/todos', (req, res) => {
//sends back todos in JSON format
res.json(todos);
})

  //create a post handler to the path/ todos that is used for adding a new to do
  // to the todos array
  //doconn't forget to create a new id for the todo
app.post('/todos', (req, res) => {
  //create the new todo object from the request and store in a variable
  //be sure to add in an id
const newTodo = { id: Date.now(), ...req.body }
//add the new todo to the todo array
todos.push(newTodo);
//send back a 201 status code along with the new todo
res.status(201).json(newTodo);
});

//difine a port
const PORT = 3001;
//tell the app to listen at the port
app.listen(PORT, () => {
 console.log ('Server running on port: ${PORT}');  
})