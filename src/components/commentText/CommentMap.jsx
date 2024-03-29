import React, { useState } from "react";
import articleCommentsText from "./articleCommentsText";
import "./comment.style.css";

function CommentMap(props) {
  const [comments, setComments] = useState(document.__comments);
  const [show, setShow] = useState(true);

  const sortedComments = [...comments].sort((a, b) => new Date(b.date) - new Date(a.date));

  const loadComment = sortedComments.map((com) => {
    const myDate = new Date(com.date).toLocaleString("cs-CZ", { timeZone: "Europe/Prague" });

    return (
      <div className="commentStyle" key={com.coment}>
        <div className="commentStyle--top">
          <h3 className="author"> {com.author} </h3> <h4 className="author">{myDate}</h4>
        </div>
        <p>{com.text}</p>
      </div>
    );
  });

  const handleClick = () => {
    let newCom = document.__moreComments;
    let comarr = comments.concat(newCom);
    setComments(comarr);
    setShow(false);
  };

  return (
    <div className="container">
      {loadComment}
      {show ? <button onClick={handleClick}>Show more</button> : null}
    </div>
  );
}

export default CommentMap;
