import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/BooksRoute.js';
import cors from 'cors';

const app = express();

app.use(cors());
// app.use(cors({
//     origin: "localhost:300",
//     methods: ['GET', 'PUT', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-type'],
// }));
// 
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack");
});

app.use('/books', booksRoute);

mongoose.connect(mongodbURL)
    .then(() => {
        console.log("connected to database")
        app.listen(PORT, () => {
            console.log(`app listening on port: http://localhost:${PORT}`);
            })
    })
    .catch((error)=> {
        console.log(error);
    });