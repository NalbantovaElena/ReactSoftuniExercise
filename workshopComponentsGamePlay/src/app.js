//Съдаваме state който да държи current state, коя е текущо селецтирания елемент
import { useState } from 'react'; //създаваме state,с kojto виждаме коя е текущо селектираната таблица
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CatalogGame from './components/CatalogGame/CatalogGame';
import CreateGame from './components/CreateGame';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import DetailsGame from './components/DetailsGame';

function App() {
  //setPage - функцията , която променя state-a
  //page не се променя 
  const [page,setPage] = useState('/home')//това е първата страница, коят отрябва да се '/home'
  
 //useState връща масив с два елемента ,които деструктурираме [page,setPage]
  //Трабва да се рендерира  компонента на база на някаква стойност
   //Как ще се вземе стойността от хелдлъра и да се подаде на компонента?
   //За целта app компонента(или parent елемента) , трябва да знае кой бутон от 
   // header елемента (т.е children елемента ) е натиснат и как children ще предаде инфомацията на parent-a
   //Начинът е app(parent) да подаде callback на header(children) , по който callback header(children) да върне информацията
  //Това ще стане като създадем една променлива navigationChangeHandler

  const navigationChangeHandler = (path)=>{
    
    //тук дефинираме пътя по който следва да дойде
    //и чрез setPage ще се сетне path-a, който е текущо селектирания,
    //така navigationChangeHendler ще го предаде от parent към children
    //console.log(`${path}-path`)
   setPage(path)
 
  }

 
//за да стигне navigationChangeHandler-a го подаваме на CatalogGame като props


 const router = (path)=>{
  
  let pathNames=path.split('/');
  
  let rootPath = pathNames[1];
  let argument = pathNames[2];

  const routes = {
    'home': <WelcomeWorld />,
    'games':<CatalogGame  navigationChangeHandler={navigationChangeHandler}/>, //подаваме navigationChangeHandler като  вграден props
    'create-game':<CreateGame />,
    'login':<Login />,
    'register':<Register />,
    'details':<DetailsGame id={argument} />
   }
  return routes[rootPath]
}

 

 
  return (
    <div id="box">
      <Header
      //подаваме callback-a на header(children)
      navigationChangeHandler={navigationChangeHandler}
      />
        <main id="main-content">
        {router(page) || <ErrorPage> Some Additional Info</ErrorPage>}
        </main>
    
       </div>
  );
}

export default App;
