import TitleAvatar from "../TitleAvatar"

import "./styles.css"

const dummyComment = {
    id: 1, 
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    author: {
        name: "Ahmad", 
        avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
    }
}


export default function CommentCard(props){
    const comment = props.comment || dummyComment
    return (
        <div className="card" style={{display: "flex", justifyContent: "space-between", maxWidth: "600px", padding: 20, marginLeft: "auto", marginRight: "auto", marginBottom: 10}}>
            <TitleAvatar user={comment.author}/>
            <p>{comment.body}</p>
        </div>
    )
}