import express from 'express';
import route from './routes';
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.json())
app.use(route);


app.listen(3333, ()=>{
  console.log('rodando na porta 3333')
});