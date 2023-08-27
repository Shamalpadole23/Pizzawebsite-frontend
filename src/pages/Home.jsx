import React from "react"
import { Link } from "react-router-dom";
import HeroImage from './pizz.jpg';
import '../styles/Home.css'

function Home(){
    return(
      <div className="home" style={{ backgroundImage:`url(${HeroImage})`}}>
        <div className="headerContainer"> 
            <h1>The Pizza Dine</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to ="menu">
            <button>ORDER NOW</button>
            </Link>
        </div>
      </div>
    );
}
export default Home; 