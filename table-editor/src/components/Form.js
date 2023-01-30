import {Button, styled} from "@mui/material";
import React, { useState } from "react";

const InputStyled = styled('input')({
  display:'block',
  border:'1px solid black',
  padding:10,
  borderRadius:5,
  marginTop:10,
});

const Form = ({ setItems }) => {
  const [formName, setFormName] = useState('');
  
  const handleNameChange = (event) => {
    setFormName(event.target.value);
  }
  
  const [formValue, setFormValue] = useState('');
  
  const handleValueChange = (event) => {
    setFormValue(event.target.value);
  }

  const handleSubmit = () => {
    setItems(prevState => {
      return [...prevState, { value: formValue, name: formName }];
  });
  }
  
  return(
    <div style={{borderBottom:'1px solid black', marginBottom:'30px'}}>
      <form action="#" style={{display:'flex', justifyContent:'space-between', alignItems: 'end', marginBottom:'30px'}}>
      <label htmlFor="name">
        Наименование
        <InputStyled onChange={handleNameChange} value={formName} type="text" name='name' />
        </label>
        <label htmlFor="value">
        Значение
        <InputStyled onChange={handleValueChange} value={formValue} type="text" name='value' />
      </label>
        <Button sx={{ height: '38px' }} variant='outlined' type='submit' onClick={handleSubmit}>Сохранить</Button>
      </form>
    </div>
  )
}

export default Form;