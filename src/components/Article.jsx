function Article({ title, content, date="May 11th 2026"}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>welcome to our app!</p>
            <small>{date}</small>
        </article>
    );
} 
export default Article;