import React from "react";

import "./commentArticle.style.css";

function CommentArticleSceleton(props) {
  const myDate = new Date(props.date);
  const dateTime = `${myDate.toLocaleString()} `;
  return (
    <div className="article">
      <h2>{props.author}</h2>
      <p>{props.text}</p>
      <h4>{dateTime}</h4>
    </div>
  );
}

export default CommentArticleSceleton;
