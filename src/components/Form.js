import React, {useState,useRef} from 'react';
import {ColorDiv, Flex, StyledForm} from "./Syles";
import {v4} from "uuid";

const Form = ({data,setData}) => {


    const inputEl = useRef(null)

    const handleClick = (e)=>{
      const input=  document.querySelector('#content')
        const priority = document.querySelectorAll('.inputRadio')
        const defaultValue = document.querySelector('#lowPriority').checked
        for (let radio of priority) {
            if (radio.checked) {
                console.log(radio.value);
                // radio.value !=1 ?setIsChecked(!isChecked):setIsChecked(isChecked)
            }
        }

        e.preventDefault()

        setData([...data,{'id':v4(),"value":input.value}])

input.value=``


    }
    return (
        <StyledForm name={'priority'}>
            <h2>Add to list</h2>
            <Flex justcont={'left'}>
           <ColorDiv color={'red'}>
               <input defaultChecked={true} ref={inputEl} name={'priority'} className={'inputRadio'} id={'lowPriority'} value={1} type={"radio"} />
           </ColorDiv>
        <ColorDiv color={'yellow'}>
               <input name={'priority'} className={'inputRadio'} id={'middlePriority'} value={2} type={"radio"} />
        </ColorDiv>
        <ColorDiv color={'green'}>
               <input name={'priority'} className={'inputRadio'} id={'hightPriority'} value={3} type={"radio"} />
        </ColorDiv>
            </Flex>

            <input id='content'/>
            <button onClick={handleClick}>click</button>
        </StyledForm>
    );
};

export default Form;