import styles from '../Post/Post.module.css';
import { useState } from 'react';
import Comment from '../Comment/Comment';

export default function OwnPost({ post }) {
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
    const [postContent, setPostContent] = useState(post.postContent); // Initial post content
    const [currentColorUp, setCurrentColorUp] = useState("white");
    const [currentColorDown, setCurrentColorDown] = useState("white");
    const [isUpVoted, setIsUpVoted] = useState(false);
    const [isDownVoted, setIsDownVoted] = useState(false);
    const [liked, setLiked] = useState(post.like);
    const [likedPosts, setLikedPosts] = useState([]);

    const handleLike = () => {
        setLiked((prevLiked) => !prevLiked);
        if (liked) {
            undoLikePost();
            setLikedPosts((prevLikedPosts) =>
                prevLikedPosts.filter((postId) => postId !== post.id)
            );
        } else {
            storeLikedPost();
            setLikedPosts((prevLikedPosts) => [...prevLikedPosts, post.id]);
        }
    };
    const storeLikedPost = () => {
        console.log('Liked post stored on the server');
    };

    const undoLikePost = () => {

        console.log('Liked post undone on the server');


    };

    const heartIcon = liked ? '/post/heart-filled.svg' : '/post/heart.svg';

    const handleUp = () => {
        if (!isUpVoted) {
            setCurrentColorUp("red");
            setCurrentColorDown("white");
            post.number += 1;
            setIsUpVoted(true);
            setIsDownVoted(false);
        } else {
            setCurrentColorUp("white");
            post.number -= 1;
            setIsUpVoted(false);
        }
    }

    const handleDown = () => {
        if (!isDownVoted) {
            setCurrentColorDown("red");
            setCurrentColorUp("white");
            post.number -= 1;
            setIsDownVoted(true);
            setIsUpVoted(false);
        } else {
            setCurrentColorDown("white");
            post.number += 1;
            setIsDownVoted(false);
        }
    }

    const handleCommentClick = () => {
        setShowComment(!showComment);
    };

    const addComment = (commentText) => {
        if (commentText.trim() !== '') {
            setComments([...comments, commentText]);
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div className={styles.postTwo}>
                <div className={styles.leftAndRight}>
                    <div className={styles.ownYellowColor}>
                        <div className={`${styles.vote} ${styles.leftSide}`}>
                            <svg className={styles.arrowUp} width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" onClick={handleUp}>
                                <path d="M3.99999 25.3333H28C28.243 25.3326 28.4812 25.2656 28.6889 25.1395C28.8966 25.0134 29.066 24.8331 29.1789 24.6179C29.2918 24.4027 29.3438 24.1609 29.3295 23.9183C29.3151 23.6757 29.2348 23.4417 29.0973 23.2413L17.0973 5.908C16.6 5.18934 15.4027 5.18934 14.904 5.908L2.90399 23.2413C2.76509 23.4413 2.68364 23.6754 2.66848 23.9184C2.65332 24.1614 2.70504 24.4038 2.81801 24.6195C2.93098 24.8351 3.10089 25.0157 3.30928 25.1415C3.51766 25.2674 3.75655 25.3337 3.99999 25.3333Z" fill={currentColorUp} />
                            </svg>
                            <h2>{post.number}</h2>
                            <svg className={styles.arrowDown} width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDown}>
                                <path d="M28 6.66667L4.00001 6.66667C3.75702 6.66743 3.51884 6.73445 3.3111 6.8605C3.10337 6.98656 2.93395 7.16689 2.82108 7.38207C2.70821 7.59725 2.65616 7.83915 2.67053 8.08171C2.68491 8.32428 2.76517 8.55833 2.90267 8.75867L14.9027 26.092C15.4 26.8107 16.5973 26.8107 17.096 26.092L29.096 8.75867C29.2349 8.55874 29.3164 8.32457 29.3315 8.08161C29.3467 7.83864 29.295 7.59616 29.182 7.38052C29.069 7.16488 28.8991 6.98433 28.6907 6.85847C28.4823 6.73262 28.2434 6.66628 28 6.66667Z" fill={currentColorDown} />
                            </svg>
                        </div>
                        <h5 className={styles.white}><span className="days">{post.days}</span><br />days ago</h5>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.header}>
                            <div className={styles.titleAndCategories}>
                                <div className={styles.author}>
                                    <div className={styles.singleAvatar}>
                                        <img className="post_avatar" src="" alt=""></img>
                                    </div>
                                    <h1>{post.title}</h1>
                                </div>
                                <div className={styles.categories}>
                                    <p className={styles.categorie}>{post.postCategory}</p>
                                    {/* <p className="subCategories">Subcategory</p>
                                    <p className="subCategories">Subcategory</p> */}
                                </div>
                            </div>

                        </div>
                        <div className={styles.mainContent}>
                            {isEditMode ? (
                                <textarea
                                    className={styles.editContent}
                                    value={postContent}
                                    onChange={(e) => setPostContent(e.target.value)}
                                />
                            ) : (
                                <p className={styles.postContent}>{postContent}</p>
                            )}
                            <div className={styles.image}>
                                <img src={post.link} alt="none" />
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.likeAndComment}>
                            <div className={styles.like} >
                                <img src={heartIcon} alt="down" onClick={handleLike} />
                                <p onClick={handleLike}>{liked ? 'Liked!' : 'Like'} </p>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.comment} onClick={handleCommentClick}>
                                    <img className={styles.commentImg}
                                        src="/post/comment.svg"
                                        alt="down"
                                    /> Comment
                                </button>
                            </div>
                        </div>
                        {post.comments && post.comments.length > 0 && (
                            <div className={styles.userCommentOne}>
                                <div className={styles.commentUsernameOne}>
                                    {post.comments.map((comment, index) => (
                                        <div key={index} className={styles.singleComment}>
                                            <span className={styles.user}>{comment.user}</span>
                                            <span className={styles.commentText}>{comment.text}</span>
                                        </div>
                                    ))}
                                    {comments.map((comment, index) => (
                                        <div className={styles.singleComment} key={index}>
                                            <span className={styles.user}>Comment User</span>
                                            <span>{comment}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {post.comments.length == 0 && (
                            <div className={styles.userComment}>
                                <div className={styles.commentUsername}>
                                    {comments.map((comment, index) => (
                                        <div className={styles.singleComment} key={index}>
                                            <span className={styles.user}>Comment User</span>
                                            <span>{comment}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            {showComment && <Comment onPostComment={addComment} />}
        </div >
    );
}
