import React from 'react'
import * as bootstrap from 'bootstrap';
import { FaHeart } from "react-icons/fa";
import { MdOutlinePublish } from "react-icons/md";

import { FaHeartCrack } from "react-icons/fa6";
import "../styles/postsStyle.css"
import PostDetails from '../components/postDetails.js';
import { RiExpandDiagonalLine } from "react-icons/ri";
import NavbarN from '../components/Navbar.js';
import SidebarS from '../components/Sidebar.js';
import axios from 'axios';
import { useState,useEffect } from 'react';
import NewPost from '../components/newPost.js';
export default function Home() {
  
  const user=localStorage.getItem("user")
  const [communities,setCommunties]=useState([]); 
  const [posts,setPosts]=useState([]);
  const [targetPost,setTargetPost]=useState({});
  const loadData=()=>{
    axios.get("http://localhost:3030/communitiy/getAllCommunities/")
    .then(response=>{
      console.log(response.data)
      setCommunties(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
    axios.get("http://localhost:3030/Publication/getAllPublication/")
    .then((response)=>{
      setPosts(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const openModal = (post) => {
    const modalElement = document.getElementById('staticBackdrop');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    console.log(post)
  };
  
  useEffect(()=>{
   loadData()
  },[user])
  const addInteraction = (post, interaction) => {
    // Initialize the interaction count if it's undefined
    if (typeof post[interaction] !== 'number') {
      post[interaction] = 0;
    }
  
    post[interaction] += 1;
  
    axios.put(`http://localhost:3030/Publication/updatePublication/`, post)
      .then(response => {
        console.log("Updated successfully:", response.data);
        loadData()
      })
      .catch(error => {
        console.error("Update failed:", error);
      });
  };
  
  const reactions = [
    { label: "Upvote", emoji: <FaHeart className='fs-5 text-danger'/> ,field:"upVotes"},
    { label: "DownVote", emoji: <FaHeartCrack className='fs-5 text-muted' /> ,field:"downVotes"},
    { label: "Signals", emoji: <FaHeartCrack className='fs-5 text-warning' /> ,field:"signals"},

  ];
  
  return (
    
    <>
 <div className="community-page">
      <NavbarN />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar column */}
          <div className="col-md-2 bg-light sidebar">
            <SidebarS />
          </div>
          
          {/* Main content column */}
          <div className="col12 p-4 main-content">
          <NewPost onAddPost={()=>{loadData()}}></NewPost>
          
            <div className="postsContainer">
           {posts.map((post,index)=>{
            return(
              <div className="card postCard mb-4 border-0 shadow-sm" key={post._id}>
             <div className="card-body d-flex">
               <div className="me-3">
                 <img 
                   src="avat3.jpg" 
                   alt="Ideas For Wealth Generation" 
                   className="rounded-circle" 
                   width="75" 
                   height="75" 
                 />
               
               </div>
               <div className="flex-grow-1">
                 <div className="d-flex justify-content-between align-items-start">
                   <h5 className="mb-2">{post.titrePublication}</h5>
                 </div>
                 <p className="text-muted">{post.contenuPublication}</p>
                 <span className="alert alert-success rounded-pill p-2 tagAlert w-auto" style={{fontSize:"12px"}}>{post.communityTag}</span>
               </div>
             </div>
             <div className="actions d-flex flex-wrap justify-content-center column-gap-2 row-gap-2">
                 {reactions.map((reaction, index) => (
                   <button key={index} className="btn  rounded-pill px-3 py-1 d-flex align-items-center gap-2" onClick={() => addInteraction(post,reaction.field)}
>
                     <span>{reaction.emoji}</span> 
                     <span>{reaction.label}</span>
                     <span>{post[reaction.field]}</span>
                   </button>
                   
                 ))}
                 <button className="btn   rounded-pill px-3 py-1 d-flex align-items-center gap-2" onClick={()=>{setTargetPost(post);openModal(post)}}>

                     <span><RiExpandDiagonalLine className='fs-4 mx-2'/>View Details</span> 
               
                   </button>
                   {post.publisherId==user.userId && <p className='alert alert-danger'>my own post</p>}
             </div>

           </div>
            )
             
           })}
            </div>
          </div>
          
         
        </div>
      </div>
     
        <PostDetails post={targetPost}/>
     
    </div>
    
    </>
  )
}
