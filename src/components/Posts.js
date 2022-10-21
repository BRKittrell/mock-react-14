import PostItem from './PostItem'

const Posts = ({posts}) => {
    return posts.map((post) => (
        <PostItem post={post} />
    ))
}

export default Posts