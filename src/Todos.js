import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
    return(
        <div>
          <ul>
              {todos.map((item) => (
                <li> 
                    <TodoItem todo={item}/>
                </li>)   
              )}
          </ul>
        </div>
    );
}

export default Todos;