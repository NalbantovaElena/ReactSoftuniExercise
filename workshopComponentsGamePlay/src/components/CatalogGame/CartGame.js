//взимаме данните от обекта чрез props, като деструкторираме
// navigationChangeHandler - от App.js до CatalogGame -> CartGame
//или използваме вече създадения hendler т.е navigationChangeHandler както в случая
//или правим в app.js нов handler който да прати callback до CartGame.js като имаме три нива
//които са CartGame, CatalogGame, App
const CartGame = ({
    game,
    navigationChangeHandler,
})=>{
const onDetailsClick = (e)=>{
e.preventDefault();
navigationChangeHandler(`/details/${game._id}`)
}
    return(
        //това е текущата игра , която рендерираме
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <a href={`details/${game._id}`} onClick = {onDetailsClick} className="details-button">Details</a>
            </div>

        </div>
       
    );
}

export default CartGame;
