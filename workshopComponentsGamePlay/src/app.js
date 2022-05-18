
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CatalogGame from './components/CatalogGame';
import CreateGame from './components/CreateGame';

function App() {

  //Трабва да се рендерира  компонента на база на някаква стойност
   //Как ще се вземе стойността от хелдлъра и да се подаде на компонента?
   //За целта app компонента(или parent елемента) , трябва да знае кой бутон от 
   // header елемента (т.е children елемента ) е натиснат и как children ще предаде инфомацията на parent-a
   //Начинът е app(parent) да подаде callback на header(children) , по който callback header(children) да върне информацията
  //Това ще стане като създадем една променлива navigationChangeHandler
   const routes = {
    '/home': WelcomeWorld,
    '/games':CatalogGame,
    '/create-game':CreateGame,
  }

  const navigationChangeHandler = (path)=>{
    //тук дефинираме пътя по който следва да дойде
    console.log(path)
  }
  return (
    <div id="box">
      <Header
      //подаваме callback-a на header(children)
      navigationChangeHandler={navigationChangeHandler}
      />
        <main id="main-content">
        <WelcomeWorld/>
        </main>
    
       </div>
  );
}

export default App;
