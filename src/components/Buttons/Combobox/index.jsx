import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({listData, id, label, fnSetList, disabled, val}) {
  let fn = fnSetList
  if (!fnSetList) {
    fn = ()=>{}
  }

  return (
    <Autocomplete
      disablePortal
      id={id}
      options={listData}
      sx={{ width: 300 }}
      value = {val}
      onChange={(e, value)=>fn(e, value)}
      disabled={disabled || false} 
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}
