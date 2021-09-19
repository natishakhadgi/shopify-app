import React, {useEffect, useLayoutEffect, useState} from "react";
import Header from "./Header";
import Blurb from "./Blurb";
import Post from "./Post";
import Footer from "./Footer";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

/*
Color Scheme: https://www.colorcombos.com/color-schemes/275/ColorCombo275.html
https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#

TO DO:
Place Loading
onClick: link copied only!
*/

function App() {

const [isLoading, setLoading] = useState(true);
const [posts, setPosts] = useState(null);
const [isError, setError] = useState(false);
const [areImagesLoaded, setImagesLoaded] = useState(false);

let start = new Date();
start.setDate(start.getDate() - 20);
start = start.toISOString().slice(0, 10);

function toDate(date){
  console.log("original: " + date);
  let formattedDate = new Date(date);
  formattedDate = formattedDate.toDateString();
  return formattedDate;
}

useEffect(() => {
  async function getNasaContent(){
    let API_KEY = "vxAMHnkcijmbHV6jJcYo03hbQfxbNV4cAceWLWbd";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start}`);
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
      {isLoading ? (<div class="lds-ring"><div></div><div></div><div></div><div></div></div>)
      : isError ? <div>it be an error</div>
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
        </div>)}
      <Footer />
    </div>
  );
}

export default App;
