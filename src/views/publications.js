import React from 'react'
import NavBar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";

import axios from 'axios'
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export default function Publications() {
    const user = localStorage.getItem("user")
    const [posts, setPosts] = useState([])
    const loadPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3030/Publication/getAllPublication/",{withCredentials:true});
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]);
        }
    };

    const deletePost = async (post) => {
        try {
            await axios.delete(`http://localhost:3030/Publication/deletePublication/${post._id}`,{withCredentials:true});
            loadPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    const approvePost=(post)=>{
        post["postStatus"]="approved";
        axios.put("http://localhost:3030/Publication/updatePublication/"+post._id,post,{withCredentials:true})
        .then((response)=>{
            console.log(response.data)
            loadPosts()
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const disapprovePost=(post)=>{
        post["postStatus"]="disapproved";
        axios.put("http://localhost:3030/Publication/updatePublication/"+post._id,post,{withCredentials:true})
        .then((response)=>{
            console.log(response.data)
            loadPosts()
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(() => {
        loadPosts()

    }, [user._id])
    return (
        <>
  
            <div className="text-center mb-5 ">
                <h6 className="section-title bg-white text-center specialText px-3">Publications</h6>
                <h1 className="mb-5">Gestions des publications</h1>
            </div>
            <div className="postsContainer d-flex  flex-wrap justify-content-around">
                {posts.length === 0 && <p className='alert alert-danger'>Posts Fetching ...</p>}
                {posts.length > 0 && posts.map((post) => (
                    <div className="card postCard mb-4 border-1 shadow-sm rounded-4" style={{width:"32%"}} key={post._id}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <img
                          src="avat3.jpg"
                          alt="User Avatar"
                          className="rounded-circle border shadow-sm me-3"
                          width="75"
                          height="75"
                        />
                  
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start">
                            <h5 className="fw-bold text-dark mb-1">{post.titrePublication}</h5>
                          </div>
                          <p className="text-muted mb-2">{post.contenuPublication}</p>
                          <span className="badge bg-success-subtle text-success fw-medium rounded-pill px-3 py-2" style={{ fontSize: "12px" }}>
                            {post.communityTag}
                          </span>
                          {
                            post.postStatus=="approved" && <p className='badge bg-success mx-1'>Approved</p>
                          }
                          {
                            post.postStatus!="approved" && <p className='badge bg-warning mx-1'>Disapproved</p>
                          }
                         
                        </div>
                      </div>
                    </div>
                  
                    <div className="card-footer column-gap-2 bg-white border-0 pt-3 d-flex justify-content-around px-4" style={{fontSize:"14x"}}>
                      <div className="text-center">
                        <span className="d-inline-flex align-items-center gap-1 text-primary border border-primary rounded-pill px-3 py-1 fw-semibold">
                          <FaRegThumbsDown />  {post.downVotes}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="d-inline-flex align-items-center gap-1 text-success border border-success rounded-pill px-3 py-1 fw-semibold">
                          <FaRegThumbsUp />   {post.upVotes}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="d-inline-flex align-items-center gap-1 text-danger border border-danger rounded-pill px-3 py-1 fw-semibold">
                          <IoWarning />  {post.signals}
                        </span>
                      </div>
                    </div>
                    <div className="text-center d-flex justify-content-center p-2 column-gap-2 ">
                        <button className="d-inline-flex btn btn-danger align-items-center gap-1  px-3 py-1 fw-semibold" onClick={()=>{deletePost(post)}}>
                          <MdDelete  /> Delete Post  
                        </button>
                       {post.postStatus=="approved" && <button className="d-inline-flex btn btn-dark align-items-center gap-1  px-3 py-1 fw-semibold" onClick={()=>{disapprovePost(post)}}>
                          <FaCheck   /> Disapprove Post  
                        </button>}
                        {post.postStatus!="approved" && 
                        <button className="d-inline-flex btn btn-primary align-items-center gap-1  px-3 py-1 fw-semibold" onClick={()=>{approvePost(post)}}>
                          <FaCheck   /> Approve Post  
                        </button>
                        }
                      </div>
                  </div>
                  
                ))}
            </div>
        </>
    )
}
