import TodoList from "./components/TodoList";
import Form from "./components/Form";
import {Flex} from "./components/Syles";
import React, {useState} from 'react';

export const  DataContext =React.createContext()

function App() {
    const [data,setData] = useState([])

  return (
    <div className="App">
        <DataContext.Provider value={{"data":data,"method":setData}}>
        <Flex justcont={'space-between'}>
<TodoList/>
<Form data={data} setData={setData} />
        </Flex>
        </DataContext.Provider>
    </div>
  );
}

export default App;
