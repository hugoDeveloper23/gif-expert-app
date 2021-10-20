import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = ()=>{

    //const categories = ['One punch Man', 'Dragon Ball', 'Samurai X'];
    const [categories, setCategories] = useState(['One punch Man'])

    // const handleAdd = ()=>{
    //     setCategories(['Kimetsu', ...categories])
    // }
 

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { categories.map((category)=>{
                    return <GifGrid category={category} key={category}/>
                }) }
            </ol>
        </>
    )
}

export default GifExpertApp;