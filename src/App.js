import MenuStyles from './MenuStyles.css';
import Coffees from './Coffees';
import Teas from './Teas';
import Pastries from './Pastries'; // Assuming Pastries component exists

function App() {
  return (
    <div className="menu-board">
      <Coffees />
      <Teas />
      <Pastries />
    </div>

  )
}

export default App;
