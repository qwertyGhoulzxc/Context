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
                            return(<ListElem id={ii} key={ii}>{i} <Button onClick={(e)=>{
                                console.log(method)
                 const     numb=     e.currentTarget.parentNode.id

                                console.log('dsadsasdasd',data)
                              let newData = data.splice(numb,1)
                                console.log('new data',newData)
                                console.log('data',data)
method(newData)

                            }}>delete</Button></ListElem>)
                        })


                }</>


            )
            }
        </UlContext.Consumer>
    )

}

export default CustomLi