import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const [view,setView]=useState(false)
    const { label, image, ingredients,url}=recipe.recipe;
    const onClick=()=>{
        setView(!view)
    }
    return (
        <div className="recipe">
            <h3>{label}</h3>
            <img src={image} alt={label}/>
            <a href={url} rel="noopener noreferrer" target="blank">URL</a>
            <button onClick={onClick}>INGREDIENTS</button>
            {view !==false && <RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe
