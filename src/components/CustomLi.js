import React, {useContext} from "react";
import {UlContext} from "./TodoList";
import {ListElem,Button} from "./Syles";

const CustomLi=()=>{



    return(
        <UlContext.Consumer>
            {  ({data,method})=> (


                <> {
                    data.length==0 ?

                 <h1>add something</h1>:
                        data.map((i,ii)=>{
                            return(<ListElem id={i.id} key={i.id}>{i.value} <Button onClick={(e)=>{
                                console.log(method)
                 const     deletedId=     e.currentTarget.parentNode.id

                                method(data.filter(obj => obj.id !=deletedId));


                            }}>delete</Button></ListElem>)
                        })


                }</>


            )
            }
        </UlContext.Consumer>
    )

}

export default CustomLi