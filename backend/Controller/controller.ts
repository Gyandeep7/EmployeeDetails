import EmployeeModel from "../schema/schema";
import { Deletedata, Getdata, Postdata } from "../service/service";
import { Request,Response } from "express";

const postdata = (req:Request,res:Response) => {
    const data=req.body;
    const result=Postdata(data)
    res.json(result)
}
const getdata = async(req:Request,res:Response)=>{
    const data =await EmployeeModel.find();
    res.json(data)
}

const deletedata = (req:Request,res:Response) =>{
    const id=req.params;
    const data=Deletedata(id);
    res.json(data)
}
export {postdata,getdata,deletedata}
