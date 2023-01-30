import {Button, styled} from "@mui/material";
import {useState} from "react";

const Form = ({ setItems }) => {
  const InputStyled = styled('textarea')({
      display:'block',
      border:'1px solid black',
      padding:10,
      borderRadius:5,
      marginTop:10,
  });

  const [formState, setFormState] = useState({
    name: '',
    value: '',
  });
  
  const handleInputChange = (event) => {
    setFormState(prevState => (
      { ...prevState, [event.target.name]: event.target.value }
    ));
  }

    const handleSubmit = () => {
      setItems(prevState => {
        return [...prevState, formState]
    });
    }
  
  return(
    <div style={{borderBottom:'1px solid black', marginBottom:'30px'}}>
      <form action="#" style={{display:'flex', justifyContent:'space-between', alignItems: 'end', marginBottom:'30px'}}>
        <label htmlFor="name">
          Наименование
          <InputStyled onChange={handleInputChange} value={formState.name} type="text" name='name'/>
        </label>
        <label htmlFor="value">
          Значение
          <InputStyled onChange={handleInputChange} value={formState.value} type="text" name='value'/>
        </label>
        <Button sx={{ height: '38px' }} variant='outlined' type='submit' onClick={handleSubmit}>Сохранить</Button>
      </form>
    </div>
  )
}

export default Form;