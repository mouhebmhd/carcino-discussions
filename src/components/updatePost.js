import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineEdit } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UpdatePost(props) {
    const item = useRef(null);
    const navigate = useNavigate();
    const [communities, setCommunities] = useState([]);
    const [postToUpdate, setPostToUpdate] = useState(props.post);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        axios.get("http://localhost:3030/communitiy/getAllCommunities/")
            .then(response => {
                setCommunities(response.data);
                console.log(response.data);
                 
            })
            .catch(error => {
                console.log(error);
            });

        // Pre-fill the post data
        if (props.post) {
            setPostToUpdate({
                ...props.post
            });
        }
    }, [props.post, user.userId, navigate]);

    const setPostData = (field, value) => {
        setPostToUpdate((prevValue) => ({
            ...prevValue,
            [field]: value,
        }));
    };

    const updatePost = () => {
        axios.put(`http://localhost:3030/Publication/updatePublication/${postToUpdate._id}`, postToUpdate)
            .then(response => {
                console.log(postToUpdate._id);
                console.log(response.data);
                item.current?.click(); 
                props.onUpdatePost();  
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
          

            <div className="modal modal-lg fade show d-block" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" id="updatePublicationModal" aria-labelledby="updatePublicationModalLabel">
                <div className="modal-dialog">
                    <form id="updatePublicationForm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updatePublicationModalLabel">Update Publication</h5>
                                <button type="button" onClick={props.onCloseModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="titrePublication" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titrePublication"
                                        name="titrePublication"
                                        value={postToUpdate.titrePublication || ''}
                                        onChange={(event) => { setPostData("titrePublication", event.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contenuPublication" className="form-label">Content</label>
                                    <textarea
                                        className="form-control"
                                        id="contenuPublication"
                                        name="contenuPublication"
                                        rows="3"
                                        value={postToUpdate.contenuPublication || ''}
                                        onChange={(event) => { setPostData("contenuPublication", event.target.value) }}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tagPublication" className="form-label">Community</label>
                                    <select
                                        className="form-select"
                                        id="tagPublication"
                                        name="tagPublication"
                                        value={postToUpdate.tagPublication || ''}
                                        onChange={(event) => {
                                            const selectedIndex = event.target.selectedIndex;
                                            const selectedText = event.target.options[selectedIndex].text;
                                            setPostData("tagPublication", event.target.value);
                                            setPostData("communityTag", selectedText);
                                        }}
                                        required
                                    >
                                        <option value="">Select a community</option>
                                        {communities.map((comm) => (
                                            <option key={comm.communauteId} value={comm.communauteId}>
                                                {comm.nomCommunaute}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button  type="button" className="btn btn-success" onClick={updatePost}>Save Changes</button>
                                <button type="button" ref={item} onClick={props.onCloseModal} className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
