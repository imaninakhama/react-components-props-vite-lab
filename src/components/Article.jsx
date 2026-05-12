import React from "react";

function Article({ title, preview, date="May 11th 2026"}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{preview}</p>
            <small>{date}</small>
        </article>
    );
} 
export default Article;