
import { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EmployeeValues } from '../types/types';
import { departmets } from '../data-store/department';

const AddEmployee = ({ onAddUser }: { onAddUser: (values: EmployeeValues) => void }) => {
  const [values, setValues] = useState<EmployeeValues>({
    id: 0,
    name: '',
    department: '',
    salary: '',
  });

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setValues((prevValues) => ({
      ...prevValues,
      department: event.target.value,
    }));
  };

  const storeValues = () => {
    const newValues = { ...values, id: values.id + 1 };
    onAddUser(newValues);

    setValues({
      id: values.id + 1,
      name: '',
      department: '',
      salary: '',
    });
  };

  return (
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h6">Employee Details</Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          label="Enter Name"
          variant="outlined"
          name="name"
          value={values.name}
          onChange={handleTextFieldChange}
          sx={{ marginRight: '8px' }}
        />
        <Select
          value={values.department}
          onChange={handleSelectChange}
          name="value2"
          displayEmpty
          inputProps={{ 'aria-label': 'Select Department' }}
          variant="outlined"
          sx={{ marginRight: '8px' }}
        >
          <MenuItem value="" disabled>
            Select Department
          </MenuItem>
          {departmets.map((dept) => (
            <MenuItem value={dept} key={dept}>
              {dept}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Salary"
          variant="outlined"
          name="salary"
          value={values.salary}
          onChange={handleTextFieldChange}
          sx={{ marginRight: '8px' }}
        />
        <Button variant="contained" onClick={storeValues} sx={{ height: '30px' }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddEmployee;
