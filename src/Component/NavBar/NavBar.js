import { Link, useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
      const navigate = useNavigate();

    
  function navigateTo() {
    // navigate('/contacts', );
    navigate('Cart/Cart', {replace: true})
  }

    return(
        <div className='header'>
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
                <button onClick={navigateTo}><FontAwesomeIcon icon={faCartShopping} size="2xl" /></button>
          </div>
        </div>
    )
}

export default NavBar;