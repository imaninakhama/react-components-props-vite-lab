import React from "react";
import About from "./About"
import Header from "./Header";
import ArticleList from "./ArticleList"

function Blog({ name, image, about, posts}){
return (
    <div>
        <Header name={name}/>
        <About image={image} about={about} />
        <ArticleList posts={posts}/>
    </div>
)
}
export default App;
