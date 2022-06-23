import { useEffect } from "react";

const Counter = ({
    value //взимаме стойността през props
})=>{
    useEffect(()=>{
console.log(value);
return ()=>{
    console.log('Unmount')
    //useEffect e функция ,която може да върне друга функция
}
    },[value])
    return(
        <h3>{value}</h3>
    )
}

export default Counter;
