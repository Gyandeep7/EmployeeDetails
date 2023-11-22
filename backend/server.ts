import express from 'express'
import { Request,Response } from "express";
import mongoose from 'mongoose'
import { deletedata, getdata, postdata } from './Controller/controller';
import cors from 'cors'
import EmployeeModel from './schema/schema';

const app=express();
app.use(express.json());
app.use(cors())

app.post('/post',postdata);
app.get('/get',getdata);
app.delete('/delete/:id',deletedata)
  

app.listen(3000,()=>{
    console.log('server running');
    mongoose.connect('mongodb://127.0.0.1:27017/EmployeeTask').then(
        ()=>{console.log('db connected')}
    )
})