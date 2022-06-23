import { useState, useEffect } from 'react';
import './App.css';
//Кога се пререндерира един компонент?
//Initial Render
//Parent re renders
//Props Changed
//Hooks Changed
function App() {
 //state- a държи някакъв низ. Това връща масив.
  const [stateValue, setStateValue] = useState('Pesho'); //stateValue - стойността на стринга, setStateValue e ф-ция
  //console.log(stateValue,setStateValue)

  //за да изпълним фунцията setStateValue ще използваме useEffect, да променим стринга в движение
  const [count, setCount] = useState(0);
  //useState при по-сложни структури
  const [info,setInfo] = useState({
    name:'Pesho',
    age:'30',
    hobbies:['first','second','third']
  })
    //component didUpdate
    useEffect(()=>{ // с useEffect app-a се рендерира веднъж
      setTimeout(()=>{ //след това изпълнява ф-цията setTimeout с която се сменя state-a 
  //и понеже хуковете работят така че при промяна на даден state , отново компонента се пререндерира
setStateValue(oldState=>oldState+'o');//при всяка промяна на count към стойността на state-a се добавя 'о'
setInfo(oldState=>({
  ...oldState,
  age:31,
 hobbies: [...oldState.hobbies,'forty']

}))

},1500)
  },[count])//при промяна на count пререндерира
//   //component didMount
//   useEffect(()=>{ // с useEffect app-a се рендерира веднъж
//       setTimeout(()=>{ //след това изпълнява ф-цията setTimeout с която се сменя state-a 
//   //и понеже хуковете работят така че при промяна на даден state , отново компонента се пререндерира
// setStateValue('Pesho');
// setInfo(oldState=>({
//   ...oldState,
//   age:31,
//  hobbies: [...oldState.hobbies,'forty']

// }))

// },1500)
//   },[])//с празния масив компонента се пререндерира веднъж 

  const hobbi = []
  info.hobbies.forEach((data) => {
    hobbi.push(<h2>{data}</h2>)
    console.log(hobbi)
  })

  return (
    
    <div className="App">
     <h1>{!stateValue ? 'Loading...': stateValue}</h1>
     {/* <h2>{info.age}</h2> */}
    
     <h2>{hobbi}</h2>
     <h3>{count}</h3>
     <button onClick = {()=>setCount(x=>x+1)}>+</button>
    </div>
  );
}

export default App;
