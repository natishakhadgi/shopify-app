import React, {useState} from "react";
import Header from "./Header";
import Blurb from "./Blurb";
import Post from "./Post";
import Footer from "./Footer";

import Masonry from "masonry-layout";
import Placeholder from "./Placeholder";

window.onload = () =>{
  const gallery = document.querySelector('.wrapper');
  const masonry = new Masonry(gallery, {
    gutter: 20
  });
}

/*
Color Scheme: https://www.colorcombos.com/color-schemes/275/ColorCombo275.html
https://docs.google.com/document/d/1QlC6htA5SXEl3YruAOkJWj2-0W3w-n0UOzGuJ1EcktQ/edit#

Fetch data from one of NASA’s APIs and display the resulting images (more details under Technical Requirements)
Display descriptive data for each image (for example: title, date, description, etc.)
Like an image
Unlike an image

Search results should come from NASA’s free APIs, for which you’ll need a free API key from https://api.nasa.gov - 
We’ve provided screenshots below of demo apps we built using the Astronomy Picture of the Day or Mars Rover Photos APIs (along with Shopify’s open source React component library: Polaris). 
Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
Each image can be “liked”, and a user should be able to undo their “like”
The HTML that ends up being served client-side should be accessible and semantic (MDN reference)

*/

// Use Masonry to create Masonry/Mosaic Effect for Gallery
function App() {
  return (
    <div>
      <Header />
      <div className = "wrapper">
        <Blurb />
        { 
          Placeholder.map((post) => (
            <Post 
            key = {post.title}
            image = {post.image}
            title = {post.title}
            text = {post.text}
            date = {post.date}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
