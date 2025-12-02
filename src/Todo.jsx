import "./index.css";
import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const[todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.toString().trim().length > 0){
            setTodos([...todos, input]);
            setInput("");
        }
    }

    const handleDelete = (index) => {
       const newTodos = todos.filter((i) => i !== todos[index]);
       setTodos(newTodos);

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

  return (
    <div className="todo-container">
      <form className="input-group" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Add a new todo" 
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="btn">Add Todo</button>
      </form>
        <ul>
            {todos.length === 0? (<span className="span">No todos available. Please add some tasks!</span>) : ( <span className="span">You now have <strong>{todos.length}</strong> todos</span>)}
            
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span>
                    <button type="button" onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
