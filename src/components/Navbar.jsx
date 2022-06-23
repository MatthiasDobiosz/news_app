import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    
    const [selectedCategory, setSelectedCategory] = useState("");

    function isSelected(category){
        if(selectedCategory === category){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <>
            <div className="navbar-container">
                <Link to ="/" className="navbar-title" onClick={() => setSelectedCategory("")}>News MD <i className="fas fa-newspaper"></i></Link>
                <ul className="category-list">
                    <li>
                        <Link 
                        to='/top-news' 
                        className={isSelected('top-news')?"nav-category-selected":"nav-category"} 
                        onClick={() => setSelectedCategory("top-news")}
                        >
                            Top News
                        </Link>
                    </li>
                    <li>
                        <Link to='/business' 
                        className={isSelected('business')?"nav-category-selected":"nav-category"}
                        onClick={() => setSelectedCategory("business")}
                        >
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='/sports' 
                        className={isSelected('sports')?"nav-category-selected":"nav-category"}
                        onClick={() => setSelectedCategory("sports")}
                        >
                            Sports
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='/health' 
                        className={isSelected('health')?"nav-category-selected":"nav-category"}
                        onClick={() => setSelectedCategory("health")}
                        >
                            Health
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='/science' 
                        className={isSelected('science')?"nav-category-selected":"nav-category"}
                        onClick={() => setSelectedCategory("science")}
                        >
                            Science
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to='/technology' 
                        className={isSelected('technology')?"nav-category-selected":"nav-category"}
                        onClick={() => setSelectedCategory("technology")}
                        >
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;