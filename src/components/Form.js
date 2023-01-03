import React, {useState} from 'react';
import {StyledForm} from "./Syles";

const Form = ({data,setData}) => {



    const handleClick = (e)=>{
      const input=  document.querySelector('#content')
        e.preventDefault()

        setData([...data,input.value])

input.value=``

    }
    return (
        <StyledForm>
            <h2>Add to list</h2>
            <input id='content'/>
            <button onClick={handleClick}>click</button>
        </StyledForm>
    );
};

export default Form;