import  React, {useState} from 'react';
import Todos from './Todos';
import TodoForm from './TodoForm'

const App = () => {
    const [todos, setTodos] = useState(['AWS Training']);

    const addTodos = (todoTitle) => {
        setTodos([...todos, todoTitle])
    }

    return(
        <div className='ui segment'> 
            <div className='ui container'>
                <TodoForm addTodos= {addTodos}/>
                <Todos todos = {todos}/>
            </div>
        </div>
    );
}

export default App;