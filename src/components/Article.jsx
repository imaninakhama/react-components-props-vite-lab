function Article({ title, content, date }) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <small>{date}</small>
        </article>
    );
} 
export default Article;