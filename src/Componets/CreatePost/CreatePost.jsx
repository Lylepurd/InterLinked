import React from 'react';
import "./CreatePost.css";

export default function CreatePost(props) {
  ; return (props.trigger) ? (
    <>
    <div className='createPost'>
      <div className="popup-Inner">
        <div className="createPostPage">
        <div className="cpContainer">
          <h1>Create A Post</h1>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => props.setTrigger(false)}></button>
          <div className="inputGp">
            <label> Title:</label>
            <input
              placeholder="Title..."/>
          </div>
          <div className="inputGp">
            <label> Post:</label>
            <textarea placeholder="Post..."/>
          </div>

          <button className='btn btn-primary'> Submit Post</button>


          
        </div>
      </div>

      </div>
    </div>

    
    </>
  ) : "";
}

