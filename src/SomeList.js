import { useEffect, useState } from "react";
import { films } from "./data";


function SomeList({categoryId}) {
    const [counter, setCounter] = useState(0);
    const [filteredFilms, setFilteredFilms] = useState([]);


    useEffect(()=>{
        const filteredFilms = films.filter(film => film.categoryId === categoryId)
        setFilteredFilms(filteredFilms)
        console.log("Filtering films");

        return () => {
            
        }
    }, [categoryId])

    return (
        <div>
            {filteredFilms.map(film=> <Film film={film} />)}
            <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        </div>
    )
}

export default SomeList;

function Film({film}) {
    const [isLiked, setIsLiked] = useState(false)


   return(<div>{film.name} {film.rating} <button onClick={()=>setIsLiked(!isLiked)}>{isLiked ? 'Dislike':'Like'}</button></div>)
}
