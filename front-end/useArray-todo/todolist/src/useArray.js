import { useState } from "react";



function useArray() {
const [todo, setTodo ] = useState([])
  const addTasks = (newTaks) => {
    setTodo((state)=> [...state,  newTaks  ] )
   
  }
return {
    todo,
    addTasks,
}

}
    



export default useArray;