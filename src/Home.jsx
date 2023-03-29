import { Outlet, Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import "./Home.css";
const Home = () => {
    return(
      <div>
              <header className='header'>
        <label style={{fontSize: '30px'}}>Logo</label>
        <div className='Browserroutes'>
            <ul className="navBarul">
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="About/About">About</Link>
                </li>
                <li>
                  <Link >Contact</Link>
                </li>
                <li>
                  <Link >No</Link>
                </li>
              </ul>
        <button><FontAwesomeIcon icon={faCartShopping} size="2xl" /></button>
        </div>
      </header>
        <Outlet />
      </div>
    )
}

export default Home;