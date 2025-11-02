import "./index.css";
import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const[todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if(input) {
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
      <div className="input-group">
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Add a new todo" 
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit} className="btn">Add Todo</button>
      </div>
        <ul>
            {todos.length === 0 && <p>No todos available. Please add some tasks!</p>}
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
