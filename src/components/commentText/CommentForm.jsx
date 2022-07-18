import React, { useState } from "react";

import "./comment.style.css";

// const COMMENTS = [
//   { id: 1, date: "2022-07-17T22:41:00", comment: "Ahoj", name: "Lojza" },
//   { id: 2, date: "2022-07-17T22:42:00", comment: "Nazdar", name: "Peter" },
// ];

const CommentForm = (props) => {
  //   const [comments, setComments] = useState(COMMENTS);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(`TEXT: ${comment} ${name}  `);

    if (comment && name) {
      //   setComments((prevComments) => [{ id: Math.floor(Math.random() * 1000), date: new Date().toLocaleString(), comment, name }, ...prevComments]);
      setComment("");
      setName("");
    }
  };

  return (
    <div>
      <form className="commentsForm" onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)} />
        <textarea
          type="text"
          placeholder="add comment free to write how is "
          name="sendText"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button>add comment </button>
      </form>

      {/* {comments.map((a) => (
      <div className="article--c">
        <h4>{a.date}</h4>
        <h3 className="author">{a.name}</h3>
        <p>{a.comment}</p>
      </div>
      ))} */}
    </div>
  );
};

export default CommentForm;
