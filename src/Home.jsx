import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import FormInput from "./Component/FormInput/FormInput";
import "./Home.css";

const Home = () => {
  const items = [
    {
      id:1,
      name: "item1",
      description: "This is the first item",
      price: 25
    },    
    {
      id:2,
      name: "item2",
      description: "This is the second item",
      price: 40
    },    
    {
      id:3,
      name: "item3",
      description: "This is the third item",
      price: 50
    },    
    {
      id:4,
      name: "item4",
      description: "This is the Four item",
      price: 10
    }
  ]

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
          {items.map((item) => (
            <FormInput
            key={item.id} 
            {...item}
            />
          ))}
      </div>
    )
}

export default Home;