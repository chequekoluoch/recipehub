import React, { useState} from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Recipe from './components/Recipe';
import Alert from './components/Alert';

function App() {
  const [query, setQuery]=useState("");
  const [recipes, setRecipes]=useState([]);
  const [alert, setAlert]=useState("");

const APP_ID="fd7fe0be"
const APP_KEY="dd16c7b75539f4d9166456ae792c40a0"
const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

 
const getData=async()=>{
  if(query !==""){
    
  const result=await Axios.get(url);
  if(!result.data.more){
    return setAlert("No food with such name")
  }
  console.log(result.data.hits)
  setRecipes(result.data.hits)
  setQuery("");
  setAlert("");
  }else{
    setAlert("Please fill the form ")
  }
}
const onChange=e=>{
  setQuery(e.target.value)
}
const onSubmit=(e)=>{
  e.preventDefault();
  getData();
}

  return (
    <div className="App">
  <h1 >Recipe Search App</h1>
  <form onSubmit={onSubmit} className="search-form">
    {alert !=="" && <Alert alert={alert}/>}
    <input type="text" placeholder="Search"
    placeholder="Search"
    autoComplete="off"
    value={query}
    onChange={onChange}/>
    <input type="submit"/>
  </form>
<div className="recipes">
  {recipes !==[] && recipes.map(recipe=><Recipe key={uuidv4()} recipe={recipe}/>)}
</div>
    </div>
  );
}

export default App;
