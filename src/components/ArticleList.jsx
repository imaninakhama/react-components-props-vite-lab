import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                />
            ))}
        </div>
    );
}
export default ArticleList;