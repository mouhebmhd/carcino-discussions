import React, { useEffect, useState } from "react";
import "../styles/commentBoardStyle.css"; 
import axios from "axios";
import { FaPen } from "react-icons/fa";
import { MdLocalPostOffice, MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const CommentBoard = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  const [author, setAuthor] = useState({});
  const comment = props.comment;

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.contenuCommentaire);

  const deleteComment = async () => {
    try {
      const response = await axios.delete(`http://localhost:3030/Commentaire/deleteCommentaire/${comment._id}`);
      console.log("Comment deleted:", response.data);
      if (props.onDelete) {
        toast.success("Interaction Removed!");

        props.onDelete(comment.commentaireId);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Interaction Can't be Removed due to an error !");

    }
  };

  const updateComment = async () => {
    if (!editedContent.trim()) return;

    const updatedComment = {
      ...comment,
      contenuCommentaire: editedContent,
      dateCommentaire: new Date().toISOString(),
    };

    try {
      const response = await axios.put("http://localhost:3030/Commentaire/updateCommentaire/"+comment._id, updatedComment);
      console.log("Comment updated:", response.data);
      setIsEditing(false);
      props.onUpdate(response.data.commentaireId,response.data);

    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/Utilisateur/getUtilisateurById/${comment.authorId}`)
      .then((response) => setAuthor(response.data))
      .catch((error) => console.log(error));
  }, [comment]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${day} ${month} ${year} ${hours}h${minutes}:${seconds}s`;
  };

  return (
    
    <div className="aa0">
      <ToastContainer />
      <div className="ah2">
        <div className="ah0">
          <div className="af9">
            <div className="af7">
              <div className="ag5">
                <div className="commentIconContainer"><MdLocalPostOffice /></div>

                <div className="ac2">
                  <div className="ac4">{author.nom+ " " + author.prenom}</div>

                  {isEditing ? (
                    <div className="ac5">
                      <input
                        type="text"
                        className="form-control"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                      />
                      <button className="btn btn-sm btn-primary mt-2" onClick={updateComment}>Save</button>
                      <button className="btn btn-sm btn-secondary mt-2 ms-2" onClick={() => {
                        setIsEditing(false);
                        setEditedContent(comment.contenuCommentaire);
                      }}>Cancel</button>
                    </div>
                  ) : (
                    <div className="ac5">{comment.contenuCommentaire}</div>
                  )}

                  {userId == comment.authorId && (
                    <div className="actions d-flex mt-2">
                      <button className="deleteComment me-2" onClick={deleteComment}><MdDelete /></button>
                      <button className="updateComment" onClick={() => setIsEditing(true)}><FaPen /></button>
                    </div>
                  )}
                </div>

                <div className="ag6" />
                <div className="ag7">{formatDate(comment.dateCommentaire)}</div>
                <div className="ag8" />
                <div className="ag9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBoard;
