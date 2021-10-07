import Navcomp from './components/Navbar/Navcomp'
import Articles from '../src/components/API/Articles'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navcomp />
      <Articles />
    </div>
  );
}

export default App;
