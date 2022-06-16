import {useState, useEffect} from 'react';
import PetCart from "../Dashboard/PetCart/PetCart";
import *as petService from "../../service/petService";
const Dashboard = ()=>{
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        petService.getAll()
        .then(result=>{
            console.log(result)
            setPets(result);
        })
    },[])
    return(
   
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        
        <ul className="other-pets-list">
            {pets.map(x=><PetCart key = {x._id} pet ={x}/>)}
        </ul>
       
        <p className="no-pets">No pets in database!</p>
    </section>
    )
}

export default Dashboard;
