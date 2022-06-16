const baseUrl = 'http://softunicustomserver.herokuapp.com/jsonstore';
export const getAll = async()=>{
   let responce = await fetch(`${baseUrl}/pets`);
   let pets = await responce.json();
   let result = Object.values(pets);
   return result;
}
