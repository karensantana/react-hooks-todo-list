import React, { useState } from 'react';

const TodoForm = ({addTodos}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;

        addTodos(value);
        setValue('');
    };

   return(
       <div>
           <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Add Todo</label>
                    <input type="text" name="first-name" placeholder="First Name" value={value} onChange={e => setValue(e.target.value)}/>
                </div>
                <button className="ui button" type="submit">Add</button>
            </form>
       </div>
   ); 
}

export default TodoForm;