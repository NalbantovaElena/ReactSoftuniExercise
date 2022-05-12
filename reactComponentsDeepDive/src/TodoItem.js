//много често срещан pattern в react
//компонента, който представлява списък от неща - TodoItem
//и отделено компонент , който преставя по отделно всяко нещо от този списък
//в случая всяко <li> TodoList

//import {useEffect} from 'react';

function TodoItem ({
    // десктрукториране на todos
    todo,
    //тук може да е само text например , но ще вземем само text от масива, а ще ни трябва и id 
   
    //и ако има и други пропъртита става по-сложно
    //името на функцията ,която ще изтрие елемента, като му подадем id
    //т.е children елемента казва на parent-a, чийто state e TodoList, т.е там е parent-a ,че 
    // при клик изтрии точно точно този елемент с това Id и го прати на ondelete в TodoList
    onDelete
}){
//     useEffect(()=>{
//         console.log(`${id} - mount`);
// return ()=>{
//     console.log(`${id} - unmount`);
// }
//     },[]);

    return(
         //ако е само text , тук ще трябва да бъде само text
         //children-а подава ръчно id-to на parrent-a 
          <ul>{todo.text}<button onClick={()=>onDelete(todo.id)}>x</button></ul>
          )
}

export default TodoItem;


