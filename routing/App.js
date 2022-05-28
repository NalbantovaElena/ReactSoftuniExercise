
import { useState } from 'react'; 
import {Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import CatalogGame from './components/CatalogGame/CatalogGame';
import CreateGame from './components/CreateGame';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import DetailsGame from './components/DetailsGame';


function App() {
return (
    <div id="box">
      <Header />
        <main id="main-content">
       <Switch>
         <Route path="/" exact component={WelcomeWorld}/>
         <Route path="/games" exact component={CatalogGame}/>
         <Route path="/create-game" exact component={CreateGame}/>
         <Route path="/login" exact component={Login}/>
         <Route path="/register" exact component={Register}/>
       </Switch>
        </main>
    
       </div>
  );
}

export default App;
