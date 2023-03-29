import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header>
        <label>Logo</label>
        <FontAwesomeIcon icon={faCartShopping} />
      
      </header>
     
    </div>
  );
}

export default App;
