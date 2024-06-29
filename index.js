import express from "express";
import 'dotenv/config';

const app = express();

app.get('/', (request, response) => {
    console.log('test');
    return response.status(234).send('Welcome todo backend');
});

app.listen(process.env.PORT, () => {
    console.log(`App is listening to port: ${process.env.PORT}`);
});