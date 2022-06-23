import React from "react";
import './NewsCard.css'

const STYLES = ['card--primary'];

const SIZES = ['card--medium', 'card--large'];

const NewsCard = ({urltoimg, cardStyle, cardSize, title, author, description, newsSource, published}) => {

    const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];
    
    return( 
        <>
            <div className={`${checkCardStyle} ${checkCardSize}`}>
                <img className="card-image" src={urltoimg} alt="news"/>
                <div className="card-title">{title}</div>
                <div className="card-body">
                    <p>{author}, {newsSource}</p>
                    <p>{description}</p>
        	        <p>{published}</p>
                </div>
            </div>
        </>
    );
}

export default NewsCard;