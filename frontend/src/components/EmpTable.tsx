import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { EmployeeValues } from '../types/types';

export const EmployeeTable = ({ employees, onDelete }: { employees: EmployeeValues[]; onDelete: (id: number) => void }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => {
            if (employee.name || employee.department || employee.salary) {
              return (
                <TableRow key={index}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>
                    <DeleteOutlineIcon onClick={() => onDelete(employee.id)} />
                  </TableCell>
                </TableRow>
              );
            }
            return null; 
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
