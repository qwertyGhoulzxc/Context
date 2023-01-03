import React from "react";
import {UlContext} from "./TodoList";

const CustomLi=()=>{
    return(
        <UlContext.Consumer>
            {  ({id})=> (


                <>{id.map(i=>{
                   return(<div key={i}>{i}</div>)
                })}</>


            )
            }
        </UlContext.Consumer>
    )

}

export default CustomLi