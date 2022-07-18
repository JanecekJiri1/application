import React from "react";
import articleMainText from "./articleMainText";
import CommentTextSceleton from "./CommentArticleSceleton";

function CommentArticle(props) {
  const articleText = articleMainText.map((text) => {
    return <CommentTextSceleton key={text.id} date={text.date} author={text.author} text={text.text} />;
  });

  return <div>{articleText}</div>;
}

export default CommentArticle;
