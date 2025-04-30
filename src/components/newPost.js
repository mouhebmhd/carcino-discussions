import React, { useEffect } from 'react'
import { MdOutlinePublish } from "react-icons/md";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NewPost(props) {
    const item = useRef(null);
    const navigate=useNavigate()
    const [communities,setCommunities]=useState([])
    const [newPost,setNewPost]=useState([])
    const user=JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
        axios.get("http://localhost:3030/communitiy/getAllCommunities/")
        .then(response=>{
            setCommunities(response.data)
            console.log(response.data)
            
        })
        .catch(error=>{
            console.log(error)
        })
    },[user.userId])
    const setNewPostData = (field, value) => {
        setNewPost((prevValue) => ({
            ...prevValue,
            [field]: value,
        }));
    };
    

    const addNewPost=()=>{
        
        newPost["signals"]=0;
        newPost["upVotes"]=0;
        newPost["downVotes"]=0;
        newPost["publisherId"]=user.userId;
        axios.post("http://localhost:3030/Publication/postPublication/",newPost)
        .then(response=>{
            console.log(response.data)
            item.current?.click(); 
            props.onAddPost()
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
    <>
    <div className="newPost mb-2 d-flex align-items-baseline justify-content-end">
          
          <button className='btn  mt-2'  data-bs-toggle="modal" data-bs-target="#publicationModal" >
          <MdOutlinePublish className='mx-1 fs-5'/> Publish New Post
          </button>
          <Link className='btn btn-warning  mt-2 mx-2' to="/analyse"  >
          <MdOutlinePublish className='mx-1 fs-5'/> Analyse An Image
          </Link>
     </div>

<div className="modal modal-lg fade"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"  id="publicationModal"   aria-labelledby="publicationModalLabel" >
  <div className="modal-dialog">
    <form id="publicationForm">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="publicationModalLabel">Add New Publication</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          
        
          
          <div className="mb-3">
            <label htmlFor="titrePublication" className="form-label">Title</label>
            <input type="text" className="form-control" id="titrePublication" name="titrePublication" required 
            onChange={(event)=>{setNewPostData("titrePublication",event.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="contenuPublication" className="form-label">Content</label>
            <textarea className="form-control" id="contenuPublication" name="contenuPublication" rows="3" required
            onChange={(event)=>{setNewPostData("contenuPublication",event.target.value)}}
            ></textarea>
          </div>
          <div className="mb-3">
  <label htmlFor="tagPublication" className="form-label">Community</label>
  <select
    className="form-select"
    id="tagPublication"
    name="tagPublication"
    required
    onChange={(event) => {
      const selectedIndex = event.target.selectedIndex;
      const selectedText = event.target.options[selectedIndex].text;
      setNewPostData("tagPublication", event.target.value);
      setNewPostData("communityTag", selectedText); // Set the visible name
    }}
  >
    <option value="">Select a community</option>
    {communities.map((comm,index) => (
      <option key={index} value={comm.communauteId}>
        {comm.nomCommunaute}
      </option>
    ))}
  </select>
</div>


          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" onClick={addNewPost}>Save</button>
          <button type="button" ref={item} className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</div>
    </>

  )
}
