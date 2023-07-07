import './App.css';
import Header from './components/Header/Header.jsx';
import Categories from "./components/Categories/Categories"; 
import { Routes, useLocation, Route } from 'react-router-dom';
import Recipes from "./components/Recipes/Recipes";
import React, { useEffect, useState } from "react";
import Picture from "./components/Picture/Picture";
import OneRecipe from './components/OneRecipe/OneRecipe';
import ReadRecipe from "./components/ReadRecipe/ReadRecipe";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import SearchResult from './components/SearchResult/SearchResult'; 

function App() {

  const [categories, setCategories] = useState([]); 

    const URL = "https://www.themealdb.com/api/json/v1/1/"
    function getCategories () {
      fetch(URL + "categories.php").then(res =>res.json()).then(res => setCategories(res.categories))
    }

    useEffect(()=> {getCategories ()}, []) //функция getCategories() вызывается единожды; [] - массив зависимостей
  
    console.log(categories)

//прокрутка

    const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

///////////////////////////



  return (
    <div className="App">
      <Header/>
      
      
      <Routes>
        <Route path="/" element={<div>  <Picture/>
        <Search/>
          <Categories info={categories}/>
          <Footer/>
          </div>
        }/>
        
       

        <Route path='/categories/:category' element={
          <Recipes/>
        }
        />
        <Route path='/recipes/:recipe' element={<ReadRecipe />}/>

        <Route path='/about/' element={<About/>}/>

        <Route path='/search/:query' element={<SearchResult/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
