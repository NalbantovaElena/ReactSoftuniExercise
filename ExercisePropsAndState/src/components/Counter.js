import { Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count:11,
            collectionName: 'Petar'
        }
    }

    render(){
        return(
            <div className="counter">
                <button onClick={(e)=>this.setState({count: this.state.count - 1})}>-</button>
               
                //със setState променяме state-a,презаписва се само този state, който сме казали да се презапише,
                // в случая count, не подаваме collectionName,  ако искаме и той да се презапише(защото не изчезва, както в JS)
               //трябва да подадем и него, т.е трябва да стане следното
               {/* onClick={(e)=>this.setState({count: this.state.count - 1},collectionName:'Elena')} */}
               //ако не се подаде, не се променя стойността ,остава си същата ,без да се припокрива и не се изтрива.
                <button onClick={(e)=>this.setState((oldState)=>({count: oldState.count - 1}))}>-</button>
                //Т.е на setState подаваме функция ,която променя стойността на стария State, a не на this.state
                //Защото е асинхронна функция
               
                <span>{this.state.count}</span>
                <button onClick={(e)=>this.setState({count: this.state.count + 1})}>+</button>
                //в onClick можем да зададем функция, която да се изпълнява при всеки click
            </div>
        )
    }
}

export default Counter;



// import {Component} from 'react';

// class Counter extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             count:11
//         }
//     }

//     render(){
//         return(
//             <div className="counter">
//                 <button onClick={(e)=>this.setState({count: this.state.count - 1})}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={(e)=>this.setState({count: this.state.count + 1})}>+</button>
//             </div>
//         )
//     }
// }

// export default Counter;
