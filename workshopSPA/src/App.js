import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header'
import MyPets from './components/MyPets/MyPets';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Register from './components/Register/Register';

function App() {
  return (
    <div id="container">
  <Header />
<main id="site-content">
  <Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/my-pets" element={<MyPets />} />
<Route path="/create" element={<Create />} />
 </Routes>
</main>
<footer id="site-footer">
        <p>@PetMyPet</p>
    </footer>

</div>
  );
}

export default App;
