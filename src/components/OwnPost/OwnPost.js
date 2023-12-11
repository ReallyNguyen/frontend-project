import styles from '../OwnPost/OwnPost.module.css';
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

    const handleDeleteClick = () => {
        setIsVisible(false);
        console.log("Post deleted!");
    };

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        setIsEditMode(false);
        console.log("Post edited:", postContent);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div className={styles.post}>
                <div className={styles.leftAndRight}>
                    <div className={styles.ownYellowColor}>
                        <div className={styles.vote}>
                            <svg className={styles.arrowUp} width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" onClick={handleUp}>
                                <path d="M3.99999 25.3333H28C28.243 25.3326 28.4812 25.2656 28.6889 25.1395C28.8966 25.0134 29.066 24.8331 29.1789 24.6179C29.2918 24.4027 29.3438 24.1609 29.3295 23.9183C29.3151 23.6757 29.2348 23.4417 29.0973 23.2413L17.0973 5.908C16.6 5.18934 15.4027 5.18934 14.904 5.908L2.90399 23.2413C2.76509 23.4413 2.68364 23.6754 2.66848 23.9184C2.65332 24.1614 2.70504 24.4038 2.81801 24.6195C2.93098 24.8351 3.10089 25.0157 3.30928 25.1415C3.51766 25.2674 3.75655 25.3337 3.99999 25.3333Z" fill={currentColorUp} />
                            </svg>
                            <h2>{post.number}</h2>
                            <svg className={styles.arrowDown} width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDown}>
                                <path d="M28 6.66667L4.00001 6.66667C3.75702 6.66743 3.51884 6.73445 3.3111 6.8605C3.10337 6.98656 2.93395 7.16689 2.82108 7.38207C2.70821 7.59725 2.65616 7.83915 2.67053 8.08171C2.68491 8.32428 2.76517 8.55833 2.90267 8.75867L14.9027 26.092C15.4 26.8107 16.5973 26.8107 17.096 26.092L29.096 8.75867C29.2349 8.55874 29.3164 8.32457 29.3315 8.08161C29.3467 7.83864 29.295 7.59616 29.182 7.38052C29.069 7.16488 28.8991 6.98433 28.6907 6.85847C28.4823 6.73262 28.2434 6.66628 28 6.66667Z" fill={currentColorDown} />
                            </svg>
                        </div>
                        <h5 className={styles.white}>{post.days}<br />days ago</h5>
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
                                    <p className={styles.ownYellowColor}>{post.postCategory}</p>
                                    {/* <p className="subCategories">Subcategory</p>
                                    <p className="subCategories">Subcategory</p> */}
                                </div>
                            </div>
                            <div className={styles.editDelete}>
                                <div className={styles.buttons}>
                                    {isEditMode ? (
                                        <button className={styles.edit} onClick={handleSaveClick}>
                                            Save
                                        </button>
                                    ) : (
                                        <button className={styles.edit} onClick={handleEditClick}>
                                            {/* Edit Post */}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.783 0L20 3.21704L17.5475 5.67058L14.3305 2.45353L16.783 0ZM5 15H8.21704L16.0312 7.1858L12.8142 3.96876L5 11.783V15Z" fill="#1E555C" />
                                                <path d="M16.8889 17.8889H5.44456C5.41711 17.8889 5.38861 17.8994 5.36117 17.8994C5.32633 17.8994 5.2915 17.8899 5.25561 17.8889H2.11111V3.11111H9.3385L11.4496 1H2.11111C0.946833 1 0 1.94578 0 3.11111V17.8889C0 19.0542 0.946833 20 2.11111 20H16.8889C17.4488 20 17.9858 19.7776 18.3817 19.3817C18.7776 18.9858 19 18.4488 19 17.8889V8.73933L16.8889 10.8504V17.8889Z" fill="#1E555C" />
                                            </svg>
                                        </button>
                                    )}
                                    <button className={styles.delete} onClick={handleDeleteClick}>
                                        {/* Delete */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M17 3C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4C18 4.26522 17.8946 4.51957 17.7071 4.70711C17.5196 4.89464 17.2652 5 17 5H16L15.997 5.071L15.064 18.142C15.0281 18.6466 14.8023 19.1188 14.4321 19.4636C14.0619 19.8083 13.5749 20 13.069 20H4.93C4.42414 20 3.93707 19.8083 3.56688 19.4636C3.1967 19.1188 2.97092 18.6466 2.935 18.142L2.002 5.072C2.00048 5.04803 1.99982 5.02402 2 5H1C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H17ZM13.997 5H4.003L4.931 18H13.069L13.997 5ZM11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H7C6.73478 2 6.48043 1.89464 6.29289 1.70711C6.10536 1.51957 6 1.26522 6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0H11Z" fill="black" />
                                        </svg>
                                    </button>

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
                            {post.uploadedImage && (
                                <div className={styles.image}>
                                    <img src={post.uploadedImage} alt="Uploaded" />
                                </div>
                            )}                        </div>
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
                            <div className={styles.userComment}>
                                <div className={styles.commentUsername}>
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
        </div>
    );
}
