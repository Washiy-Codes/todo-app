import "./index.css";
import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const[todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if (input.trim() === "") return;
        setTodos([...todos, input]);
        setInput("");
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

  return (
    <div className="todo-container">
        <input 
          type="text" 
          value={input} 
          onChange={handleChange} 
          placeholder="Add a new todo" 
        />
        <button type="button" onClick={handleSubmit} className="btn">Add Todo</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo}</span><button type="button" onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
