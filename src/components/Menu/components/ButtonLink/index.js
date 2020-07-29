import React from "react";

function ButtonLink(props) {
    // props => { classname: "o que eu colocar ", href: "/"}
    
    return(
        <a href={props.href} className={props.className}>
           {props.children}   
        </a>
    );
}

export default ButtonLink;