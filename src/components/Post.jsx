import React, {useState} from "react";

function Post(props) {
  const [isLiked, setIsLiked] = useState(false);

  function clickLike(){
    setIsLiked(!isLiked);
  }

  function copyImgLink(url){
    navigator.clipboard.writeText(url)
  }

  return (
    <div className="card post">
        <img className="postImg" src = {props.image} />
        <div className="postDescription">
            <p className="postTitle">{props.title}</p>
            <p className = "postText">{props.text}</p>
        </div>
        <div className="postFooter">
            <p>{props.date}</p>
            <div className = "postLinks">
                <button onClick={clickLike} className={`postLinkImg ${isLiked ? "starFill" : "starOutline"}`}></button>
                <div class = "tooltip">
                  <button onClick={() => copyImgLink(props.image)} className = "postLinkImg shareImageIcon"></button>
                  <span class="tooltiptext">Copy Link!</span>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Post;

