import './MenuStyles.css';
import Coffees from './Coffees';
import Teas from './Teas';
import Pastries from './Pastries'; // Assuming Pastries component exists
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="menu-board">
      <Dashboard />
      <Coffees />
      <Teas />
      <Pastries />
      
    </div>

  )
}

export default App;
