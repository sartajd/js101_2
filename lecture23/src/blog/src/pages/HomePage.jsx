import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

import QuoteSection from "../components/QuoteSection";
import "./HomePage.css"


export default function HomePage(props){
    const [posts, setPosts] = useState([])

    useEffect(function(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => setPosts(posts))
    })

    return (
        <div>
            <QuoteSection />
            <div className="article-container">
                {
                    posts.map(a => <ArticleCard article={a}/>)
                }
            </div>
        </div>
    )
}