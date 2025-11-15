import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API = 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(`${API}/todos`)
      .then(res => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    if (!text) return;
    const res = await axios.post(`${API}/todos`, { text });
    setTodos([...todos, res.data]);
    setText('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todos/${id}`);
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
