import React, {useState} from 'react';
import {StyledForm} from "./Syles";
import {v4} from "uuid";

const Form = ({data,setData}) => {



    const handleClick = (e)=>{
      const input=  document.querySelector('#content')
        e.preventDefault()

        setData([...data,{'id':v4(),"value":input.value}])

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