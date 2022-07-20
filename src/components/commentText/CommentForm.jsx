import React, { useState } from "react";
import "./comment.style.css";
import CommentMap from "./CommentMap";
import articleCommentsText from "./articleCommentsText";

const COMMENTS = [];

const CommentForm = (props) => {
  const [comments, setComments] = useState(COMMENTS);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment && name) {
      setComments((prevComments) => [{ id: Math.floor(Math.random() * 1000), date: new Date().toLocaleString(), comment, name }, ...prevComments]);
      setComment("");
      setName("");
    }
  };

  return (
    <div>
      <form className="commentsForm" onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)} />
        <textarea type="text" placeholder="add your comment" name="sendText" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button>add comment </button>
      </form>

      {comments.map((a) => (
        <div className="commentStyle">
          <div className="commentStyle--top">
            <h3 className="author">{a.name}</h3>
            <h4>{a.date}</h4>
          </div>
          <p>{a.comment}</p>
        </div>
      ))}
      <CommentMap />
    </div>
  );
};

export default CommentForm;
