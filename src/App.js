
import './App.css';
import Home from './components/Home';
import Home2 from './components/Home2';
import FoodRecipe from './foodrecipe/FoodRecipe';


function App() {

  const town = 'Buguma'
  const lga = 'Asaritoru'
  const babe = 'Victoria Renner'

  return (
    <div className="App">
      {/* <h1>Food App App From Umanah</h1> */}
      <FoodRecipe />
    </div>
  );
}

export default App;
