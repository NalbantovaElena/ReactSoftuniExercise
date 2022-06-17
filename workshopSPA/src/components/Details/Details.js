
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";//useParams когато трябват параметрите
import *as petService from "../../service/petService";
const Details =()=>{
    const [pet,setPet] = useState({});//по default е празен обекс
    const {petId} = useParams(); //petId e деструкторирано от params
    console.log(petId)
    useEffect(() => {
        async function check(){
        let petResult = await petService.getOne(petId);
        setPet(petResult)
        }
        check()
    },[])
    petService.getOne(petId)
    .then(result=>{

    })
return(
    <section id="details-page" className="details">
    <div className="pet-information">
        <h3>Name: {pet.name}</h3>
        <p className="type">Type: {pet.type}</p>
        <p className="img"><img src={pet.imageUrl} /></p>
        <div className="actions">
     
            <a className="button" href="#">Edit</a>
            <a className="button" href="#">Delete</a>
            
         
            <a className="button" href="#">Like</a>
          
            <div className="likes">
    <img className="hearts" src="/images/heart.png" />
    <span id="total-likes">Likes: {pet.likes}</span>
  </div>
 
        </div>
    </div>
    <div className="pet-description">
        <h3>Description:</h3>
        <p>{pet.description}</p>
    </div>
</section>
)
}

export default Details;
