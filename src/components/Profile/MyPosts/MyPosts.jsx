import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  //функція котра власне бере значення з state а саме state.profilePage.nePostText і додає до 
  //об'єкту state.profilePage.postData 
  let addPost = () => {
      //beremo funkciju addPost z naszoi componenty containera
      props.addPost();
  }

  //Атрибут onChange ловить спробу ввести якусь значення в textarea
  // і якщо така спроба відбулася, запускає, те що в {}б тобто нашу функцію
  //onPostChangeб а ця функція в фсою чергуб бере актуальне значення з  textarea
  //і передає у функці updateTextAreaб яка прийшла з файлу state.js

  let onPostChange = (event) => {
    let text = event.target.value;
    //my otrymujemo funkciju updateTextArea z componenty containera MyPostContainer
    props.updateTextArea(text);
  }

  //map приймає масив і за допомогою функції створє з даного масиву, новий масив
  let postElements = props.postData.map( p => <Post message={p.message} likeCounter={p.likeCounter} /> )
  
  return (
    <div className={c.MyPosts}>
      <div className={c.Textarea}>
        <textarea onChange={onPostChange} value={props.newPostText} name="NewPost" id="NewPost" cols="50" rows="3" placeholder="Something new?"/>
        <button onClick={addPost}>Submit</button>
      </div>
      <div className={c.posts}>
        { postElements }
      </div>
    </div>
  );
}

export default MyPosts;