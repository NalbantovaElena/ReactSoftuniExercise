
const baseUrl = 'http://softunicustomserver.herokuapp.com/jsonstore';
export const getAll = async()=>{
   let responce = await fetch(`${baseUrl}/pets`);
   let pets = await responce.json();
   let result = Object.values(pets);
   return result;
}

export const create = async(petData) =>{
   let responce = await fetch(`${baseUrl}/pets`,{
      method: "POST",
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(petData)
   });

   let result = await responce.json();
   return result;
}
