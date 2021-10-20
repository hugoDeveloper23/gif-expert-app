import React,{useState, useEffect} from 'react'

const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        getGifs();
    }, []);

    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=kimetsu&limit=15&api_key=17xf3LBdTnGeYbEUwCz9V25SLYiNu997'
        const respuesta = await fetch(url);

       const {data} = await respuesta.json();

        const gifs = data.map( img =>{
            return{
                id: img.id,
                url: img.images?.original.url,
                title: img.title
            }
        })
        console.log(gifs)
    }

    const handleAdd = ()=>{
        setCount(count+1)
    }

    return (
        <>
            <li>{category}</li>
            <h3>{count}</h3>
            <button onClick={handleAdd}>+1</button>
        </>
    )
}

export default GifGrid
