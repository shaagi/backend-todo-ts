import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true
        }
    }
);

export const Todo = mongoose.model('Todo', { name: String });