import React, {useState} from "react";

//Display descriptive data for each image (for example: title, date, description, etc.)
function Post(props) {
  const [isLiked, setIsLiked] = useState(false);

  function clickLike(){
    setIsLiked(!isLiked);
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
                <div onClick={clickLike} className={`postLinkImg ${isLiked ? "starFill" : "starOutline"}`}></div>
                <div className = "postLinkImg shareImageIcon"></div>
            </div>
            
        </div>
    </div>
  );
}

export default Post;