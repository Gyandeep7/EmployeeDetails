import mongoose,{Document, Schema} from 'mongoose'

interface user extends Document{
    id:number;
    name:string;
    department:string;
    salary:string
}

const Users= new Schema<user>({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    department:{type:String,required:true},
    salary:{type:String,required:true},
})

const EmployeeModel=mongoose.model<user>('Employees',Users);

export default EmployeeModel;