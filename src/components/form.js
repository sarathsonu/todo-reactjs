import React from "react";

const Form =({setInutText,todos, setTodos, inputText})=>{
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInutText(e.target.value);
    }
    const submitTodoHandler = (e) =>{
        console.log("hey");
        e.preventDefault();
        setTodos([...todos, {text:inputText,completed:false, id : Math.random()*100}]);
        setInutText("");
       
    }
return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      
    </form>
);
}
export default Form;