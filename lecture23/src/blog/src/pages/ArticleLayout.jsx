import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import ArticleTitle from '../components/ArticleTitle'

import "./ArticleLayout.css"
import ArticlePage from './ArticlePage'

const dummyArticle = {
    id: 1, 
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, porro, quae unde omnis sint iusto, quaerat odio quam laudantium tempore tempora eos obcaecati impedit? Sapiente animi laborum error recusandae ullam at quos assumenda adipisci, id temporibus necessitatibus, qui quae suscipit hic corporis illo cupiditate fuga neque dolorum harum? Quae.", 
    author: {
        name: "Ahmad", 
        avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
    }
}

export default function ArticleLayout(props) {
    const { id } = useParams()

    const [article, setArticle] = useState({})

  
    useEffect(function(){
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => res.json())
        .then(article => setArticle(article))
    })

  return (
    <>  
        <ArticleTitle article={article} />
        <div className="nav-buttons">
                <NavLink to={`/articles/${article.id}`} >
                    article
                </NavLink>

                <NavLink to={`/articles/${article.id}/comments`} >
                    comments
                </NavLink>
        </div>

        <Outlet />
        
    </>
  )
}
