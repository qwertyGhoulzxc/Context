import React from 'react';
import CustomLi from "./CustomLi";
export const UlContext = React.createContext()

const TodoList = () => {

    return (
        <>
            <UlContext.Provider value={{id:[321312312,123123123,1231231,1111,'ewqeqweqwe']}}>
                {
                    <ul>
                        <CustomLi/>
                    </ul>
                }
            </UlContext.Provider>
        </>
    );
};

export default TodoList;