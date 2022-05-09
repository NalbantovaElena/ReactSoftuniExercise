import './App.css';


function App() {
  let numbers = [1,2,3,4,5,6]
  // let mappedNumbers = numbers.map(number=><li>{number}</li>)
  return (
    <div className="App">
      <ul>
        {numbers.map(number=><li>{number}</li>)}
         {/* {mappedNumbers} */}
      </ul>
   
    </div>
  );
}

export default App;
