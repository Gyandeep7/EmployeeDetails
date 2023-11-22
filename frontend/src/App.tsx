
import { useState } from 'react';
import AddEmployee from './components/CreateEmp';
import { EmployeeTable } from './components/EmpTable';
import { EmployeeValues } from './types/types';
import axios from 'axios';

const App = () => {
  const [employees, setEmployees] = useState<EmployeeValues[]>([]);

  const handleAddUser = async (newEmployee: EmployeeValues) => {
  
    await axios.post('http://localhost:3000/post', newEmployee);

    getAllEmployees();
  };

  const getAllEmployees = async () => {

    const response = await axios.get('http://localhost:3000/get');

    setEmployees(response.data);

  };

  const handleDelete = async (id: number) => {

    await axios.delete(`http://localhost:3000/delete/${id}`);

    getAllEmployees();

  };

  
  getAllEmployees();
 

  return (
    <>
      <AddEmployee onAddUser={handleAddUser} />

      <EmployeeTable employees={employees} onDelete={handleDelete} />
    </>
  );
};

export default App;
