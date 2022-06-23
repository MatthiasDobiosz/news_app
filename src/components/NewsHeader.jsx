import React, { useEffect, useState } from "react";
import './NewsHeader.css';
//import general from "../../public/images/general.jpg";

const NewsHeader = (props) => {

    /*const[image, setImage] = useState('');

    useEffect(() => {
        setImage(props.imgsrc);
    },[props.imgsrc])*/

    return (
        <>
            <div className="news-header-container">
                <img className="news-header-image" src={`${props.imgsrc}`} alt={props.description}/>
                <h1 className="news-header-title">{props.title}</h1>
                <p className="news-header-text">{props.text}</p>
            </div>
        </>
    )

}

export default NewsHeader;