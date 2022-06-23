import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Accordion from "./Accordion";
import "./sidebar.css";

const Sidebar = (props) => {

    const[filteredSource, setFilteredSources] = useState([]);
    const[sourceCounts, setSourceCounts] = useState([]);

    const[filteredAuthors, setFilteredAuthors] = useState([]);
    const[authorCounts, setAuthorCounts] = useState([]);

    useEffect(() => {
        const sourceList = () => {
            let filteredArray = [];
            props.news.forEach(article => {
                filteredArray.push(article.source.name);
            })
            let counts = {};
            for (const num of filteredArray) {
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
           filteredArray = filteredArray.filter((word, pos) => {
                return filteredArray.indexOf(word) === pos;
            })
            setFilteredSources(filteredArray);
            setSourceCounts(counts);
        }

        const authorList = () => {
            let filteredArray = [];
            props.news.forEach(article => {
                filteredArray.push(article.author);
            })
            let counts = {};
            for (const num of filteredArray) {
                counts[num] = counts[num] ? counts[num] + 1 : 1;
            }
           filteredArray = filteredArray.filter((word, pos) => {
                return filteredArray.indexOf(word) === pos;
            })
            setFilteredAuthors(filteredArray);
            setAuthorCounts(counts);
        }

        sourceList();
        authorList()
    }, [props.news])


    return(
        <div className="sidebar">
            <Accordion title="News Sources" filter={filteredSource} counts={sourceCounts} addFilter={props.addNewsFilter}/>
            <Accordion title="Authors" filter={filteredAuthors} counts={authorCounts} addFilter={props.addAuthorsFilter}/>
        </div>
    );
}

export default Sidebar;