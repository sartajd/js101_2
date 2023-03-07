import CommentCard from "../components/CommentCard"

const dummyComments = [
    {
        id: 1, 
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        author: {
            name: "Ahmad", 
            avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
        }
    }, 
    {
        id: 2, 
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        author: {
            name: "Ali", 
            avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
        }
    }, 
    {
        id: 3, 
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
        author: {
            name: "Abdullah", 
            avatar_url: `https://ui-avatars.com/api/?name=Ahmad`
        }
    }
]

export default function CommentsPage(props){

    const comments = props.comments || dummyComments

    return (
        <div>
            <h3>Comments</h3>
            <hr />
            {
                comments.map(comment => <CommentCard comment={comment}/>)
            }
            
        </div>
    )
}