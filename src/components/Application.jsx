import React from "react";

import CommentArticle from "./commentArticle/CommentArticle";
import CommponentForm from "./commentText/CommentForm";

function Application(props) {
  return (
    <div>
      <CommentArticle />
      <CommponentForm />
    </div>
  );
}

export default Application;
