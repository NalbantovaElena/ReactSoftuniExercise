
import Book from './Book';

function BookList(props){

    return(
        <ul className="book-list">
            <h2>Our Book Collection</h2>
            {props.books.map(x => {
               // console.log(x)
            return <Book title={x.title} description ={x.description}/>
            })}

        </ul>
    )

  

}

export default BookList;
