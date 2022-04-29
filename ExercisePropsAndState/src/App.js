
import './App.css';
import Heading from './components/Heading';
import Booklist from './components/BookList';
import Counter  from './components/Counter';

const booksData =   [
  {title:'Harry Potter', description :'Wizards and stuff'},
  {title:'Programming for JS', description :'Guide ti programming'},
  {title:'The Bible', description :'Most important book'}
]

function App() {
  return (
  <div className="site-wrapper">
     <Heading />
     <Counter />
     <Booklist  books={booksData}/>
  </div> 

  );
}

export default App;
