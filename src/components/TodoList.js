import React from 'react';
import {useContext} from "react";
import CustomLi from "./CustomLi";
import {List} from "./Syles";
import {DataContext} from "../App";

export const UlContext = React.createContext()



const TodoList = () => {

    return (
        <>
            <DataContext.Consumer>
                {  ({data,method})=> (
            <UlContext.Provider value={{data,method}}>

                {
                    <List>
                        <CustomLi/>
                    </List>
                }
            </UlContext.Provider>
                    )}
            </DataContext.Consumer>
        </>
    );

};

export default TodoList;