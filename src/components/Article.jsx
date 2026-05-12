import React from "react";

function Article({ title, preview, date}) {
    const displayDate = date || "January 1, 1970";
    return (
        <article>
            <h3>{title}</h3>
            <p>{preview}</p>
            <small>{date}</small>
        </article>
    );
} 
export default Article;