import {Link,NavLink} from 'react-router-dom';
const Header = () =>{
    let activeLinkStyles = {
        backgroundColor:'red',
        textDecoration:'underline'
    }
return(
    <header>
        <h1><NavLink activeStyle ={activeLinkStyles} className="home" to="/">GamesPlay</NavLink></h1>
    <nav>
        <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink>
      
        <div id="user">
            <NavLink activeStyle={activeLinkStyles} to="/create-game">Create Game</NavLink>
            <Link to="/logout">Logout</Link>
        </div>
      
        <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>   
         
    </header>
   
)
};

export default Header;
