// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/list';

function App() {
  const [inputText, setInutText]= useState("");
  const [todos, setTodos]= useState([]);
  
  return (
    <div className="App">
     <header><h1>Todo List</h1></header>
     <Form 
     inputText={inputText}
     todos={todos} 
     setTodos={setTodos}
      setInutText={setInutText}/>
     <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
