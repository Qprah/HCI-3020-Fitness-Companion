import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MuscleGroupSelector from './components/muscleGroup/MuscleGroupSelector';
import Feed from './components/feed/Feed';
import Navbar from "./components/navBar/Navbar";
//import Nav from './components/nav/Nav';
import { Grid } from '@mui/material';
import { getExercises } from './db.js';

// Styled Paper component for consistent styling
// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [exercises, setExercises] = useState([]);


  useEffect(() => {
    console.log("muscle: " + selectedMuscle);
    console.log("cate: " + selectedCategory);
    console.log("diff: " + selectedDifficulty);
    const exercisesArray = getExercises(selectedMuscle, selectedCategory, selectedDifficulty);
    setExercises(exercisesArray);
  }, [selectedCategory, selectedDifficulty, selectedMuscle]);

return (

  <div className="App">

  <div className="nav-bar">
       <Navbar />
  </div>

  <div className="content-S">

  <div className="muscle-selector">
        <MuscleGroupSelector onCategorySelected={setSelectedCategory}
              onDifficultySelected={setSelectedDifficulty}
              onMuscleSelected={setSelectedMuscle} />
  </div>

  <div className="feed">
  <Feed exercises={exercises} size={exercises.length}></Feed>
  </div>      

  </div>
  </div>
);
}

export default App;
