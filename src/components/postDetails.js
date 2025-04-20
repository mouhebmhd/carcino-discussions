import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaHeartCrack } from "react-icons/fa6";
import "../styles/postsStyle.css";
import { IoIosSend } from "react-icons/io";
import CommentBoard from "./commentBoard";
import axios from 'axios';

export default function PostDetails(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newCommentAdded, setNewCommentAdded] = useState(false);

  const post = props.post;

  useEffect(() => {
    if (!post?.publicationId) return;
    axios.get(`http://localhost:3030/Commentaire/getCommentaireByPostId/${post.publicationId}`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
        setNewCommentAdded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post, newCommentAdded]);

  const reactions = [
    { label: "Upvote", emoji: <FaHeart className='fs-5 text-danger' />, field: "upVotes" },
    { label: "DownVote", emoji: <FaHeartCrack className='fs-5 text-muted' />, field: "downVotes" },
    { label: "Signals", emoji: <FaHeartCrack className='fs-5 text-warning' />, field: "signals" },
  ];

  const submitNewComment = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!newComment || !user) return;

    const Comment = {
      contenuCommentaire: newComment,
      dateCommentaire: new Date().toISOString(),
      authorId: user.userId,
      publicationId: post.publicationId,
    };

    axios.post("http://localhost:3030/Commentaire/postCommentaire/", Comment)
      .then((response) => {
        console.log(response.data);
        setNewComment(""); // Clear input
        setNewCommentAdded(true); // Trigger refresh
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addInteraction = (interaction) => {
    if (typeof post[interaction] !== 'number') {
      post[interaction] = 0;
    }
    post[interaction] += 1;

    axios.put(`http://localhost:3030/Publication/updatePublication/`, post)
      .then(response => {
        console.log("Updated successfully:", response.data);
      })
      .catch(error => {
        console.error("Update failed:", error);
      });
  };

  return (
    <div className="modal modal-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="staticBackdropLabel">Post Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <h5>{post.titrePublication}</h5>
            <p>{post.contenuPublication}</p>
            {reactions.map((reaction, index) => (
              <button key={index} className="btn rounded-pill px-3 me-1 py-1" onClick={() => addInteraction(reaction.field)}>
                <span className='mx-1'>{reaction.emoji}</span>
                <span className='mx-1'>{reaction.label}</span>
                <span className='mx-1'>{post[reaction.field]}</span>
              </button>
            ))}
          </div>

          <div className="newcomment p-2">
            <h5 className='text-center'>New Comment</h5>
            <input
              type="text"
              className='commentInput'
              placeholder='Your Comment Text here'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className='btn btn-success mt-2' onClick={submitNewComment}>
              <span className="mx-1 fs-5"><IoIosSend /></span> 
            </button>
          </div>

          <h5 className="modal-title text-center">Comments</h5>
          {comments.length > 0 ? (
  comments.map((comment) => (
    <CommentBoard
      key={comment.commentaireId}
      comment={comment}
      onUpdate={(commentId, updatedComment) => {
        setComments(prev =>
          prev.map(c =>
            c.commentaireId === commentId ? updatedComment : c
          )
        );
      }}
      onDelete={(deletedId) => {
        setComments(prev => prev.filter(c => c.commentaireId !== deletedId));
      }}
    />
  ))
) : (
  <p className='fs-5 text-center'>Sorry, no comments for this post!</p>
)}


          
        </div>
      </div>
    </div>
  );
}
