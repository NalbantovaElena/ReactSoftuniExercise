const PetCart =({
    pet
}) =>{
return(
    <li className="otherPet">
    <h3>Name: {pet.name}</h3>
    <p>Type: {pet.type}</p>
    <p className="img"><img src={pet.imageurl} /></p>
    <a className="button" href="#">Details</a>
</li>
)
}

export default PetCart;
