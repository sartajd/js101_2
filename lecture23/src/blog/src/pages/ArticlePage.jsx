import { useParams } from "react-router-dom"

const dummyArticle = {
    id: 1, 
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, porro, quae unde omnis sint iusto, quaerat odio quam laudantium tempore tempora eos obcaecati impedit? Sapiente animi laborum error recusandae ullam at quos assumenda adipisci, id temporibus necessitatibus, qui quae suscipit hic corporis illo cupiditate fuga neque dolorum harum? Quae.", 
    author: {
        name: "Ahmad", 
        avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
    }
}


export default function ArticlePage(props){
    const params = useParams()
    const article = props.article || dummyArticle
    return (
        <div className="article-page">
            <h1>Article Page {params.id}</h1>
            <p>{article.body}</p>
        </div>
    )
}
