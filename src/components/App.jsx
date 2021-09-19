import React, {useEffect, useState} from "react";
import Header from "./Header";
import Blurb from "./Blurb";
import Post from "./Post";
import Error from "./Error";
import Footer from "./Footer";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

function App() {

const [isLoading, setLoading] = useState(true);
const [posts, setPosts] = useState(null);
const [isError, setError] = useState(false);

function getLast20(){
  let start = new Date();
  start.setDate(start.getDate() - 20);
  start = start.toISOString().slice(0, 10);
  return start;
}

function toDate(date){
  let formattedDate = new Date(date);
  formattedDate = formattedDate.toDateString();
  return formattedDate;
}

useEffect(() => {
  async function getNasaContent(){
    let API_KEY = "vxAMHnkcijmbHV6jJcYo03hbQfxbNV4cAceWLWbd";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${getLast20()}`);
    let data = await response.json();
    setPosts(data);
  }
  try {
    getNasaContent();
} catch (e) {
    setError(true);
    console.log(e);
    throw e;
}
},[])

useEffect(() => {
  if(posts){
    setPosts(posts.reverse());
    setLoading(false);
    imagesLoaded( document.querySelector('.wrapper'), function() {
      console.log('all images are loaded');
      const gallery = document.querySelector('.wrapper');
      const masonry = new Masonry(gallery, {gutter: 20});
    });  
  }
})

  return (
    <div>
      <Header />
      {isLoading ? (<div class = "content"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>)
      : isError ? <Error />
        : (<div className = "wrapper">
            <Blurb />
          { 
            posts.map((post) => {
              if(post.media_type === "image")
                return <Post 
                key = {post.title}
                image = {post.url}
                title = {post.title}
                text = {post.explanation}
                date = {toDate(post.date)}
                />
            }
          )}
        </div>)
      }
      <Footer />
    </div>
  );
}

export default App;
