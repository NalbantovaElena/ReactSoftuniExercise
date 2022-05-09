// import uniqid from 'uniqid';

function TodoList(){

    const todos =[
        {id:1,text:'Clean my room'},
        {id:2,text:'Wash the dishes'},
        {id:3,text:'Go to the gym'},
    ];

    return(
        <ul>
            {/* {todos.map(todo=><li key={todo.id}>{todo.text}</li>)}  */}
             {todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)}
        </ul>
      
    )
}

export default TodoList;
