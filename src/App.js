import {useState, useRef} from "react";
import TodoList from "./TodoList";
import FetchHello from './components/FetchHello';
import { useNavigate } from "react-router-dom";

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from "./components/InputForm";
import TelSelect from "./components/TelSelect";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/tel" element={<TelSelect />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   const [todos, setTodos] = useState([{id: 1, name: "Todo1", completed: true}]);

//   const todoNameRef = useRef();

//   const handleAddTodo = () => {
//     // タスク追加
//     const name = todoNameRef.current.value;
//     setTodos((prevTodos) => {
//       return [...prevTodos, {id:"1", name: name, completed: false }];
//     });
//   };

//   const toggleTodo = (id) => {
//     const newTodos = [...todos];
//     const todo = newTodos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     setTodos(newTodos);
//     };
  
//   const handleClear = (id) => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   } ;

//   return(
//     <div>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input type="text" ref={todoNameRef} />
//       <button onClick={handleAddTodo}>タスクを追加</button>
//       <button onClick={handleClear}>完了タスクの削除</button>
//       <div>残タスク：{todos.filter((todo) => !todo.completed).length}</div>
//     </div>
//   );
// }

// function API() {
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchData = () => {
//     setLoading(true);
//     // JSONPlaceholderのモックAPIを使用
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(data => setMessage(data.title))  // 投稿のタイトルを表示
//       .catch(error => console.error('Error fetching data: ', error))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div>
//       <button onClick={fetchData} disabled={loading}>
//         {loading ? '読み込み中...' : 'APIを呼び出す'}
//       </button>
//       {message && <p>APIからのメッセージ: {message}</p>}
//     </div>
//   );
// }
// export default API;