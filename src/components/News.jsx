import React, { useEffect, useState } from "react";
import { getNewsData } from "../services/NewsApi";
import NewsCard from "./NewsCard";
import NewsHeader from "./NewsHeader";
import Sidebar from "./sidebar";
import './News.css';

function truncDate(date){
    let out='';
    for(let i = 0; i < date.length; i++){
        if(date.charAt(i)==="T"){
            break;
        }
        else{
            out+=date.charAt(i);
        }
    }
    return out;
}

const News = (props) => {

    const [news, setNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [newsFilter, setNewsFilter] = useState([]);
    const [authorFilter, setAuthorFilter] = useState([]);

    useEffect(() => {
        getNewsData(props.newsCategory).then((response)=>{
            setAllNews(response.news);
            setNews(response.news);
        })
    },[props.newsCategory])

    const addNewsFilter = (newSources) => {
        setNewsFilter(newSources);
    }

    const addAuthorsFilter = (newAthors) => {
        setAuthorFilter(newAthors);
    }



    return(
        <>
            <NewsHeader 
            imgsrc={props.headerImg} 
            description={props.headerDescription} 
            title={props.headerTitle} 
            text={props.headerText}
            />
            <Sidebar news={news} addNewsFilter={addNewsFilter} addAuthorsFilter={addAuthorsFilter}/>
            <div className="article-container">
            {
            news.map((article, index) =>{
                let size = (index%3===0 && index!==18)?'card--large':'card--medium';
                let name = index%3===0?'news-card-large':'news-card-medium';
                return(
                    <NewsCard 
                    key={index} 
                    className={name}
                    cardStyle='card--primary' 
                    cardSize={size}
                    title={article.title}
                    urltoimg={article.urlToImage}
                    author={article.author}
                    description={article.description}
                    newsSource={article.source.name}
                    published={truncDate(article.publishedAt)}
                    />
                )
                })}
            </div>
        </>
    )
}

export default News;