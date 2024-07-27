import { useState } from "react";

function NewPost({onCancel,newPostVisibility, onAddPost}){

    let isVisible = newPostVisibility;

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(e){
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e){
        setEnteredAuthor(e.target.value);
    }


    function submitHandler(e){
        e.preventDefault();
        const postData = {
            body : enteredBody,
            author : enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <div className = "form" style = {{display : isVisible ? 'none' : 'block'}}  > 
        <form onSubmit = {submitHandler}>
            <p>
                <label htmlFor = "body">Text</label>
                <textarea id = "body" required rows = {3} onChange = {bodyChangeHandler}/>
               
            </p>

            <p>
                <label htmlFor = "name">Your name</label>
                <input type = "text" id = "name" required onChange = {authorChangeHandler}></input>
            </p>
            <div className = "btn-container">
            <button type = "button" onClick = {onCancel}>cancel</button>
            <button>submit</button>
            </div>
        </form>
        </div>
    );
}

export default NewPost;