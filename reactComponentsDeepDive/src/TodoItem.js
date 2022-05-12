//създаваме TodoItem и го импортваме в TodoList

function TodoItem ({todo}){
    return(
     <ul>{todo.text}</ul>
    )
}

export default TodoItem;
