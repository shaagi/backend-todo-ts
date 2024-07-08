import express from "express";
import 'dotenv/config';
import mongoose from 'mongoose';
import { Todo } from "./models/todoModel.js";

const app = express();

//middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log('test');
    return response.status(234).send('Welcome todo backend');
});

// Route for saving a new todo
app.post('/todos', async (request, response) => {
    try {
        if (!request.body.title || request.body.completed === null || undefined) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newTodo = {
            title: request.body.title,
            completed: request.body.completed
        };
        const todo = await Todo.create(newTodo);
        return response.status(201).send(todo);
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

mongoose.connect(process.env.mongoDbURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });