import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;

export const mongodbURL = process.env.MONGO_DB_URL;