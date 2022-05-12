// import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

function TodoList(){

    const todos =[
        {id:1,text:'Clean my room'},
        {id:2,text:'Wash the dishes'},
        {id:3,text:'Go to the gym'},
    ];

    return(
        <ul>
            {/* {todos.map(todo=><li key={todo.id}>{todo.text}</li>)}  */}
             //след импорта на TodoItem го използваме в <ul> елемента, като key e тук в TodoItem
             {todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)}
        </ul>
      
    )
}

export default TodoList;
