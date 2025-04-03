import React, { useState } from 'react';
import '../styles/ProfilePage.css';

import NavbarN from "../components/Navbar.js";

const ProfilePage = () => {
  const [showFollower, setShowFollower] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showPostsOnly, setShowPostsOnly] = useState(true);

  const userinfo = {
    Name: 'Nawres dhahri',
    username: 'Norrs',
    bio: 'Full stack Developer',
    Pimage: 'avat.jpg',
    posts: [
      { id: 1, caption: 'Post 1', url: 'https://i.imgur.com/K7A78We.jpg', likes: 120, comments: 45 },
      { id: 2, caption: 'Post 2', url: 'https://i.imgur.com/K7A78We.jpg', likes: 85, comments: 30 },
      { id: 3, caption: 'Post 2', url: 'https://i.imgur.com/K7A78We.jpg', likes: 85, comments: 30 },
    ],
    followers: [
      { Name: 'John Doe', username: 'johndoe', Pimage: 'https://i.imgur.com/8RKXAIV.jpg' },
    ],
    following: [
      { Name: 'Jane Doe', username: 'janedoe', Pimage: 'https://i.imgur.com/8RKXAIV.jpg' },
    ],
  };

  return (
    <div>
      <NavbarN />
      <div className='profile'>
        <div className='profile-data'>
          <div className='profile-data_up'>
            <div className='profile_image'>
              <img src={userinfo.Pimage} alt='Profile' />
            </div>
            <h2 className='profile-data_up_Name'>{userinfo.Name}</h2>
            <div className='profile-data_up_username'>@{userinfo.username}</div>
            <div className='profile-data_up_bio'>{userinfo.bio}</div>
            <div className='profile-data_up_stats'>
              <div className='profile_post_btn' style={showPostsOnly ? { color: 'red' } : { color: 'black' }} onClick={() => setShowPostsOnly(true)}>
                {userinfo.posts.length} Posts
              </div>
              <div className='profile_followers' onClick={() => setShowFollower(true)}>
                {userinfo.followers.length} Followers
              </div>
              <div className='profile_following' onClick={() => setShowFollowing(true)}>
                {userinfo.following.length} Following
              </div>
            </div>
          </div>
          {showPostsOnly && (
            <div className='profile_posts'>
              {userinfo.posts.map((post) => (
                <div key={post.id} className='profile_single_post'>
                  <img src={post.url} alt='Post' />
                  <div className='profile_single_post_stats'>
                    <div>
                      {post.likes} Likes &nbsp; {post.comments} Comments
                    </div>
                    <div className='profile_post_caption'>{post.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
