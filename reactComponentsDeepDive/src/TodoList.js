
// import uniqid from 'uniqid';
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(){
    //добавяне на todos масива в state-a, като default- на стойност на нашите todo-та
    //вече ще има възможност да ги променяме
    const [todos, setTodos] = useState(
        [
              {id:1,text:'Clean my room'},
             {id:2,text:'Wash the dishes'},
            {id:3,text:'Go to the gym'},
        ]);
        console.log('render')
       //проверявам дали се маунтва поне веднъж ,като изплозваме празния масив
        useEffect(()=>{
            console.log('Mounted')
        })
   
    // const todos =[
    //     {id:1,text:'Clean my room'},
    //     {id:2,text:'Wash the dishes'},
    //     {id:3,text:'Go to the gym'},
    // ];
const onTodoInputBlur = (e) =>{
     
    let todo = {
        //като новия елемент има id , kоето е дължината масива + 1 , защото първата му стойност е 1
        id:todos.length +1,
        // текстът ще е това, което е изписано в input полето
        text:e.target.value,
    }
    // да сетне елемент новото todo в масива todos
    //setTodos приема функция и стойност
    //!!!OldTodos е state. State винаги трябва да се променя чрез нов масив , а не по референция
    setTodos(oldTodos=>[
        //oldTodos - e  стария масив,  който трябва да променяме
        //като създавам нов масив (със спред оператора ... ) със старите данни 
        ...oldTodos,
        // и в него добавям новото todo, което е извлечено току що
        todo
    ])
}
    return(
        <>  
        <label htmlFor="todo-name">Add Todo</label>
        <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo"/>
        <ul>
           
             {/* {todos.map(todo=><li key={todo.id}>{todo.text}</li>)}  */}
             {/* //след импорта на TodoItem го използваме в <ul> елемента, като key e тук в TodoItem */}
             {/* , като е важно да се знае ,че пропъртито си го кръщаваме както искаме */} 
             {todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)}
        </ul>
        </>
       
      
    )
}

export default TodoList;

