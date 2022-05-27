import { useEffect, useState } from "react";
//чрез useEffect ще заредим само веднъж данните от сървъра , a не при всяко рендериране на компонента
import * as ServiceGame from '../../services/ServiceGame';
import CartGame from "./CartGame";
//navigationChangeHandler - трябва да го подадем до всички game картички, за да могат всички да имат достъп до него
const CatalogGame = ({
navigationChangeHandler,
})=>{
    const[games, setGames] = useState([]);//отново със useState запазваме текущата игра
    //като този път default-ната стойност е празен масив
   //console.log(games)
  useEffect(()=>{
   ServiceGame.getAll()
        .then(result=>{
      
        setGames(result)//и тук сетваме стойностите
       
    })
},[])

//празния масив означава ,че това ще се изпълни само веднъж
    return(
        <section id="catalog-page">
        <h1>All Games</h1>
        {/* подаваме целия обект на CartGame  */}

        {games.length > 0
        //ако expretion-a e дълъг, не като този се изнася като променлива извън JSX синтаксиса и в него се 
        //подава само променливата
        //games e нашия state, който в началото сме задали като празен масив  const[games, setGames] = useState([])
        ?games.map(x=><CartGame key={x._id} game={x} navigationChangeHandler={navigationChangeHandler}/>)//взимаме games от useState-a
       //поставяме navigationChangeHandler-a като props, директно в CartGame в JSX, так ще има достъп до всички
       //картички
        :<h3 className="no-articles">No articles yet</h3>
    }
        
    </section>
    )
}

export default CatalogGame;
