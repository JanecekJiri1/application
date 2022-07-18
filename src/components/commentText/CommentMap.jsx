import React, { useState } from "react";
import articleCommentsText from "./articleCommentsText";
import "./comment.style.css";

function CommentMap(props) {
  const [addCommenta, setAddComenta] = useState(document.__comments);

  const loadComment = addCommenta.map((com) => {
    const myDate = new Date(com.date);
    const dateTime = `${myDate.toLocaleString("cs-CZ")} `;

    return (
      <div className="commentStyle" key={com.coment}>
        <div className="commentStyle--top">
          <h3 className="author"> {com.author} </h3> <h4 className="author"> {dateTime}</h4>
        </div>
        <p> {com.text}</p>
      </div>
    );
  });

  const handleClick = () => {
    let newCom = document.__moreComments;

    let comarr = addCommenta.concat(newCom[0]);

    setAddComenta(comarr);
  };

  return (
    <div className="container">
      {loadComment}
      <button onClick={handleClick}>Show more</button>
    </div>
  );
}

export default CommentMap;
