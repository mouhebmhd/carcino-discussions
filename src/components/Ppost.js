import { useState } from 'react';
import NavbarN from './Navbar';
import '../styles/Post.css';
import likebefore from '../images/love.png';

import cross from '../images/close.png';

import unsave from '../images/save.png';
import dustbin from '../images/delete.png';
import BounceLoader from 'react-spinners/BounceLoader';
import Comments from './comments';

const Post = () => {
    const [thispost, setThisPost] = useState({
        userId: { username: "JohnDoe", Pimage: "avat4.jpg" },
        url: "https://i.imgur.com/K7A78We.jpg",
        like: [],
        comments: [],
        caption: "This is a sample post."
    });
    const [mycomment, setMyComment] = useState("");
    const [showlikes, setShowLikes] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <NavbarN />
            <div className="post">
                <div className='single_post'>
                    <div className="single_post_username">
                        <div className="single_post_username_image">
                            <img src={thispost.userId.Pimage} alt="" />
                        </div>
                        <div>{thispost.userId.username}</div>
                    </div>
                    {loading && (
                        <div className="Bounceloader">
                            <BounceLoader /> Loading...
                        </div>
                    )}
                    <div className="single_post_image">
                        <img src={thispost.url} alt="" />
                    </div>
                    <div className="post_likes">
                        <div className="post_likes_section">
                            <span>
                                <img src={likebefore} alt="Like" />
                            </span>
                            <span>
                                <img className='dustbin_post' src={dustbin} alt="Delete" />
                            </span>
                            <span className="home_post_save">
                                <img src={unsave} alt="Save" />
                            </span>
                        </div>
                        {showlikes && (
                            <div className='showlikes'>
                                <div className='showlikesbox'>
                                    <div className='showlikesboxtop'>
                                        <h2>Likes</h2>
                                        <img onClick={() => setShowLikes(false)} src={cross} alt="Close" />
                                    </div>
                                    <div className='showlikesboxbottom'></div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='post_caption'>
                        <span style={{ fontWeight: "bold" }}>{thispost.userId.username}</span> {thispost.caption}
                    </div>
                </div>
                <div className='post_stats'>
                    <form className='post_stats_add' onSubmit={(e) => e.preventDefault()}>
                        <textarea placeholder='Post a comment...' value={mycomment} onChange={(e) => setMyComment(e.target.value)} required />
                        <button type="submit">Post Comment</button>
                    </form>
                    <div className='post_stats_comments'>
                        <h2 style={{ textAlign: 'center', margin: '2px', borderBottom: '1px solid' }}>Comments</h2>
                        <Comments />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
