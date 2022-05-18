//всички неща,които са подадени като html атрибути пристигат като props
//в случая в app на <header  navigationChangeHandler={ navigationChangeHandler}/>
const Header = ({
    //така е когато е деструкторирано
    navigationChangeHandler,
    //или props.navigationChangeHandler без {} , ако не е деструктурирано
}) =>{
    const onHeaderClick =(e) =>{
e.preventDefault()
if(e.target.tagName == 'A'){
    //console.log(e.target.href)
    let url = new URL(e.target.href);
    console.log(url.pathname)
    //изпълни това като ми подадеш pathname
    navigationChangeHandler(url.pathname)
     //Как ще се вземе стойността от този хелдлър и да се подаде на компонента?
}
    }
return(
    <header onClick={onHeaderClick}>
        <h1><a className="home" href="/home">GamesPlay</a></h1>
    <nav>
        <a href="#">All games</a>
      
        <div id="user">
            <a href="/create-game">Create Game</a>
            <a href="/logout">Logout</a>
        </div>
      
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    </nav>   
         
    </header>
   
)
};

export default Header;
