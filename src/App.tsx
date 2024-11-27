import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextRecipe from './pages/TextRecipes';
import VideoRecipe from './pages/VideoRecipes';
import NewRecipe from './pages/NewRecipe';
import Home from './pages/Home';
import TextRecipeView from './pages/TextRecipeView';
import VideoRecipeView from './pages/VideoRecipeView';
import CcAndAd from './pages/CcAndAd';

export default function AppWrapper (){
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/text-recipe' element={ <TextRecipe/> }/>
        <Route path='/text-recipe-view' element={<TextRecipeView/>}/>
        <Route path='/video-recipe' element={ <VideoRecipe/> }/>
        <Route path='/video-recipe-view' element={<VideoRecipeView/>}/>
        <Route path='/new-recipe' element={ <NewRecipe/> }/>
        <Route path='/cc-ad' element={<CcAndAd/>}/>
      </Routes>
    </Router>
  )
}

 //export default App;
