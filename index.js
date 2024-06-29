import express from "express";
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, response) => {
    console.log('test');
    return response.status(234).send('Welcome todo backend');
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