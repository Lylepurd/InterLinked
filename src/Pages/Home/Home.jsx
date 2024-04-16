import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import CreatePost from "../../Componets/CreatePost/CreatePost";

export function Home() {

  const [createPost, setCreatePost] = useState(false);


  return(
    <>

    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">InterLinked</a>
        
          <span>NewsFeed</span>
        

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">InterLinked</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item createPost-nav">
                <a className="nav-link active" href="#" data-bs-dismiss="offcanvas" aria-current="page" onClick={() => setCreatePost(true)}>Create Post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
                
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
          </div>
        </div>
      </div>
    </nav>


    <div className="main-wrapper">
      <div className="side-bar-home">

        <button className="btn btn-info" onClick={() => setCreatePost(true)}>Create Post</button>
        




      </div>
    </div>


    <CreatePost trigger={createPost} setTrigger={setCreatePost}/>
    </>
  )
}