import {IconButton, styled} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

const ListWithAllItems = ({ items, setItems }) => {
  const handleRemove = (items, index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  const Item = ({item, onRemove, onEdit}) => {
    const ItemWrapperStyled = styled('div')({
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        border: 'lightgrey solid 1px',
        marginBottom:10,
        borderRadius:15,
        boxShadow:'10px, 10px, 10px grey',
        padding:'5px 25px',
        textAlign:'left',
    });

    return (
      <React.Fragment>
        <ItemWrapperStyled>
          <p style={{width:'40%'}}>{item.name}</p>
          <p style={{ width: '40%' }}>{item.value}</p>
          <div style={{width:'20%'}}>
            <IconButton
              aria-label="close"
              onClick={onRemove}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </ItemWrapperStyled>
      </React.Fragment>
    )
  };

  return(
    <div>
      <HeaderWrapperStyled>
        <p style={{width:'40%'}}>Наименование</p>
        <p style={{width:'40%'}}>Значение</p>
        <div style={{width:'10%'}}></div>
      </HeaderWrapperStyled>
      {items?.map((item, index) => (
        <Item
          key={index}
          item={item}
          onRemove={() => handleRemove(items, index)} 
        />
      )
        )}
    </div>
  )
}

const HeaderWrapperStyled = styled('div')({
    display:'flex',
    alignItems:'center',
    textAlign:'left',
    padding:'5px 25px',
});

export default ListWithAllItems;