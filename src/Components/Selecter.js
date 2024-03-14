import * as React from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';



const Selecter =()=>{

  return (
    <FormControl fullWidth>
    <InputLabel id="dropdown-label">Please Select</InputLabel>
    <Select
      labelId="dropdown-label"
      id="dropdown"  
    
    
    >
      {/* Menu items */}
      <MenuItem value="name">Name</MenuItem>
      <MenuItem value="quantity">Quantity</MenuItem>
      <MenuItem value="price">Price </MenuItem>
    </Select>
  </FormControl>

  );

}
export default Selecter