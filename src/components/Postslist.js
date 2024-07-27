import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

function Postslist(props) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
 
  return (
    <> 
    <div className = "container">

        <div className = "post-container">
            {posts.map((post) => <Post author = {post.author} body = {post.body}/>)}
        </div>
        <div className = "new-post-container">
            <NewPost 
                newPostVisibility = {props.newPost}
                onCancel = {props.cancel}
                onAddPost = {addPostHandler}
            />
        </div> 

    </div> 
    
    </>
  );
}

export default Postslist;
