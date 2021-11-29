import './App.css';
import allCountryScores from './Score';
import ScoresTable from './components/ScoresTable';
import Header from './components/Header';


function App() {
  return ( 
  
    <div className = "App"> 
    <Header/>
 {
   allCountryScores.map(({name, scores}, index) => {
     return  <ScoresTable key={index} name={name} scores={scores} />
    })
  }
  </div> 
  );  
}

export default App;
