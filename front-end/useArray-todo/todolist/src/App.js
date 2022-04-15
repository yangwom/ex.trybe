import { useState } from 'react'
import useArray from './useArray'

function App() {
  const [ name, setName ] = useState('')
  const { todo, addTasks,  } = useArray()
  const hendleClick = () => {
    addTasks(name)
    setName('')
  }
  return (

    <header>
   <h1>ToDo List</h1>
    <input name="name" onChange={(e) =>setName(e.target.value)} value={name} />
    <ul>
      {todo.map((todosTasks) => <li>{todosTasks}</li>)}
    </ul>
    <button type='button'onClick={hendleClick}  >Add task</button>
    </header>
  );
}

export default App;
