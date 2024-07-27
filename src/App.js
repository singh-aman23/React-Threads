import { useState } from "react";
import Postslist from "./components/Postslist";
import Header from "./components/Header";

function App(){

  const [newPostVisibility, setnewPostVisibility] = useState('false');

  function handleClick(){
    setnewPostVisibility(!newPostVisibility);
  }

  function cancelForm(){
    setnewPostVisibility('false');
  }

  return <>
    <Header
      click = {handleClick}
    />
    <Postslist
      newPost = {newPostVisibility}
      cancel = {cancelForm}
    />
  </>
}
  

export default App;
