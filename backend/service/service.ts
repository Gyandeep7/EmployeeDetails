import EmployeeModel from '../schema/schema';

const Postdata = (props:any) => {
  const data=new EmployeeModel(props);
  return data.save();
}
const Getdata = async() =>{
    return await EmployeeModel.find();
}

const Deletedata = async(props:any) =>{
    const {id}=props;
    await EmployeeModel.deleteOne({id:id})
}

export {Postdata,Getdata,Deletedata}
