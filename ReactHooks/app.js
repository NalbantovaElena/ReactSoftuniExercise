import { useState, useEffect } from 'react';
import './App.css';
//Кога се пререндерира един компонент?
//Initial Render
//Parent re renders
//Props Changed
//Hooks Changed
function App() {
 //state- a държи някакъв низ. Това връща масив.
  const [stateValue, setStateValue] = useState(''); //stateValue - стойността на стринга, setStateValue e ф-ция
  //console.log(stateValue,setStateValue)

  //за да изпълним фунцията setStateValue ще използваме useEffect, да променим стринга в движение
  const [count, setCount] = useState(0);
  //useState при по-сложни структури
  const [info,setInfo] = useState({
    name:'Pesho',
    age:'30',
    hobbies:['first','second','third']
  })
  useEffect(()=>{ // с useEffect app-a се рендерира веднъж
      setTimeout(()=>{ //след това изпълнява ф-цията setTimeout с която се сменя state-a 
  //и понеже хуковете работят така че при промяна на даден state , отново компонента се пререндерира
setStateValue('Pesho');
setInfo(oldState=>({
  ...oldState,
  age:31,
}))
},1500)
  },[])
  return (
    <div className="App">
     <h1>{!stateValue ? 'Loading...': stateValue}</h1>
     <h2>{info.age}</h2>
     <h3>{count}</h3>
     <button onClick = {()=>setCount(x=>x+1)}>+</button>
    </div>
  );
}

export default App;
