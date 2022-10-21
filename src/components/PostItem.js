const PostItem = ({post}) => {
    return(
        <div className="listItem">
            <h1>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

