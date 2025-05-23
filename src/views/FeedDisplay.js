import React, { useState, useEffect } from 'react';
import * as bootstrap from 'bootstrap';
import { FaHeart } from "react-icons/fa";
import { MdOutlinePublish, MdDelete } from "react-icons/md";
import { FaHeartCrack } from "react-icons/fa6";
import { RiExpandDiagonalLine } from "react-icons/ri";
import axios from 'axios';

import NavBar from '../components/Navbar.js';
import SidebarS from '../components/Sidebar.js';
import NewPost from '../components/newPost.js';
import UpdatePost from '../components/updatePost.js';
import PostDetails from '../components/postDetails.js';

import "../styles/postsStyle.css";

export default function FeedDisplay() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [communities, setCommunities] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [targetPost, setTargetPost] = useState({});
  const [postToUpdate, setPostToUpdate] = useState(null);
  const [interaction,setInteraction]=useState("")
  const [interactionType,setInteractionType]=useState("")
  const [error,setError]=useState("")
  const sendNotification=(userId)=>{

    const message = `Your Post got a new Reaction ! .`;
    const date=new Date().toISOString()
    const title ="Alerte !  "
    const waring={
      notificationDate:date,
      notificationTitle:title,
      notificationDescription:message,
      notificationReceiver:userId,
    }
    console.log(waring)
    axios.post("http://localhost:3030/notifications/postNotifications/",waring)
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  };
  // Load communities
  const loadCommunities = async () => {
    try {
      const response = await axios.get("http://localhost:3030/communitiy/getAllCommunities/",{withCredentials:true});
      setCommunities(response.data);
    } catch (error) {
      console.error("Error fetching communities:", error);
    }
  };

  // Load posts
  const loadPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3030/Publication/getAllPublication/");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    }
  

  };
  const loadUsers= ()=>{
        axios.get("http://localhost:3030/Utilisateur/getAllUtilisateur/",{withCredentials:true})
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      
      
  }
  // Open modal
  const openModal = (post) => {
    const modalElement = document.getElementById('staticBackdrop');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    setTargetPost(post);
  };
  const saveInteraction = (typeInteraction,
    dateInteraction,
    interactorId,
    publicationId)=>
    {
      const data={
        typeInteraction,
        dateInteraction,
        interactorId,
        publicationId
      }
      console.log(data)
      axios.post("http://localhost:3030/Interaction/postInteraction/",data)
      .then((response)=>{
        console.log(response.data)
      })
      .then((error)=>{
        console.log(error)
      })
    }
  const closeModal = () => setPostToUpdate(null);


  // Handle interaction (upvote, downvote, etc.)
  const addInteraction = async (post, interaction) => {
    if(interaction.indexOf(post._id)==-1)
    {

    
    if (typeof post[interaction] !== 'number') {
      post[interaction] = 0;
    }
    post[interaction] += 1;

    try {
      await axios.put(`http://localhost:3030/Publication/updatePublication/`+post._id, post);
      saveInteraction("interaction",new Date().toISOString(),user._id,post._id)
      setInteraction(prev => prev + post._id);
      setInteractionType("Vous avez déjà interagi avec cette publication 💔 ! ")
      sendNotification(post.publisherId)
      loadPosts();
    } catch (error) {
      console.error("Update failed:", error);
    }}
    else 
    {
      setError("You already reacted to this post ! ")
    }
  };
  const  findUser = (userId) => {
  
   const userFound = users.find((user) => user._id == userId);
    console.log("Found user:", userFound);
    return userFound; 
  };
  
  // Handle delete post
  const deletePost = async (post) => {
    try {
      await axios.delete(`http://localhost:3030/Publication/deletePublication/${post._id}`);
      loadPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle update post
  const handleUpdatePost = (post) => {
    setPostToUpdate(post);
  };
  useEffect(() => {
    loadCommunities();
    loadPosts();
    loadUsers(); // fetch users
  }, [user._id]);
  
  useEffect(() => {
    if (users.length > 0) {
      findUser("6804f11809734e73e73637ee");
    }
  }, [users]);
  

  const reactions = [
    { label: "Upvote", emoji: <FaHeart className='fs-5 text-danger' />, field: "upVotes" },
    { label: "DownVote", emoji: <FaHeartCrack className='fs-5 text-muted' />, field: "downVotes" },
    { label: "Signals", emoji: <FaHeartCrack className='fs-5 text-warning' />, field: "signals" },
  ];

  return (
    <>
      <div className="community-page" style={{height:"fit-content"}}>
        <NavBar />
        {users.length<=0 && <p> Loading content </p>}
      
        {users.length>0 && 
        <>
        <div className="text-center mt-3">
            <h6 className="section-title text-center specialText px-3">Actualité</h6>
            <h1 className="">Fil d'actualité</h1>
          </div>
        <div className="container-fluid" style={{height:"fit-content"}}>
          <div className="row">
            

            {/* Main content column */}
            <div className="col-12 p-4 main-content" style={{height:"fit-content"}}>
              {user.accountStatus=="active" && 
              <NewPost  onAddPost={loadPosts} />}
            {user.accountStatus=="frozen" && 
              <p className='alert alert-danger'>Vous n'avez pas le droit de publier. Votre compte n'est pas encore activé</p>} 
              <div className="postsContainer p-2" >
                {posts.length === 0 && <p className='alert alert-danger'>Posts Fetching ...</p>}
                {posts.length > 0 && posts.map((post) => (
                  <div className="card postCard mb-4 border-0 p-2  shadow-sm" key={post._id}>
                    <div className="card-body d-flex">
                      <div className="me-3">
                        <img
                          src={post.user.userAvatar}
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
                        <div className="d-flex justify-content-between align-items-start">
                        {findUser(post.publisherId) ? (
                        <p className='text-primary'>
                            {findUser(post.publisherId).nom + " " + findUser(post.publisherId).prenom}
                          </p>
                        ) : (
                          <p className='text-secondary'>Chargement de l'utilisateur...</p>
                        )}
                                                  
                        </div>
                        <p className="text-muted">{post.contenuPublication}</p>
                        <span className="alert alert-success rounded-pill p-2 tagAlert w-auto" style={{ fontSize: "12px" }}>
                          {post.communityTag}
                        </span>
                      </div>
                    </div>
                          
                    <div className="actions d-flex flex-wrap justify-content-center column-gap-2 row-gap-2">
                      {interaction.indexOf(post._id)!=-1 && interactionType!="" && <p className="d-block alert alert-warning">{interactionType}</p>}
                      {interaction.indexOf(post._id)==-1 && reactions.map((reaction, index) => (
                        <button
                          key={index}
                          className="btn rounded-pill px-3 py-1 d-flex align-items-center gap-2"
                          onClick={() => addInteraction(post, reaction.field)}
                        >
                          <span>{reaction.emoji}</span>
                          <span>{reaction.label}</span>
                          <span>{post[reaction.field]}</span>
                        </button>
                      ))}
                      
                      <button
                        className="btn rounded-pill px-3 py-1 d-flex align-items-center gap-2"
                        onClick={() => openModal(post)}
                      >
                        <RiExpandDiagonalLine className='fs-4 mx-2' />
                        View Details
                      </button>
                        
                      {post.publisherId == user._id && (
                        <>
                          <button className="btn btn-danger" onClick={() => deletePost(post)}>
                            <MdDelete className='mx-1' /> Delete Post
                          </button>
                          <button className="btn btn-warning" onClick={() => handleUpdatePost(post)}>
                            <MdOutlinePublish className='mx-1' /> Update Post
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Details */}
        <PostDetails post={targetPost} />

        {/* Update Post */}
        {postToUpdate !== null && (
          <UpdatePost onUpdate={loadPosts} post={postToUpdate} onUpdatePost={loadPosts} onCloseModal={closeModal} />
        )}
        </>}
      </div>
    </>
  );
}
