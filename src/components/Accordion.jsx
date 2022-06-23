import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = (props) => {

    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion__icon");

    const [activeItems, setActiveItems] = useState([]);

    const content = useRef(null);

    const toggleActive = () => {
        setActive(active===""?"active":"");
        setHeight(active==="active"?"0px":`${content.current.scrollHeight}px`);
        setRotate(active===""?"accordion__icon rotate":"accordion__icon");
    }

    const toggleActiveItems = (index) => {
        setActiveItems(activeItems.includes(index)?activeItems.filter(item=>item!==index):[...activeItems, index]);
        props.addFilter(activeItems);
    }

    return(
        <div className="accordion-container">
            <button className={`accordion ${active}`} onClick={toggleActive}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={rotate} height="20px" width="10px"/>
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
                <div className="accordion__list">
                    {props.filter.length > 0 && 
                    props.filter.map((item, index) => {
                        return(
                            <div 
                                key={index}
                                className={`sidebar-item ${activeItems.includes(item)?"active-item":""}`}
                                onClick={() => toggleActiveItems(item)}
                            >
                                {item} {`(${props.counts[item]})`}
                                <i className="far fa-square"></i>
                                <i className="fas fa-check"></i>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
} 

export default Accordion;