import React from "react";
import "../styles/Comments.css";
const comments = [
  { name: "Reena Pawar", date: "26 déc. 2024", text: "@Muhammad Anas Thank you Muhammad", img: "/avat2.jpg" },
  { name: "Muhammad Anas", date: "26 déc. 2024", text: "This is amazing", img: "/avat3.jpg" },
  { name: "Reena Pawar", date: "18 avr. 2022", text: "@Ashitosh Phalake Thank you very much", img: "/avat2.jpg" },
  { name: "Ashitosh Phalake", date: "18 avr. 2022", text: "Perfect UX case study", img: "/avat4.jpg" },
  { name: "Reena Pawar", date: "17 févr. 2022", text: "Thanku Sunil for appreciating my work", img: "/avat2.jpg" },
  { name: "svjadhav 111", date: "17 févr. 2022", text: "Very nicely structured.....", img: "/avat.jpg" },
];

const Comments = () => {
  return (
    <div className="comments-container">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <img src={comment.img} alt="user" className="comment-img" />
          <div className="comment-content">
            <strong>{comment.name}</strong> - <span className="comment-date">{comment.date}</span>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;