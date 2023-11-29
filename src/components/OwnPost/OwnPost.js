import '../OwnPost/OwnPost.css';
import { useState } from 'react';
import Comment from '../Comment/Comment';

export default function OwnPost({ post }) {
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
    const [postContent, setPostContent] = useState("Lorem ipsum dolor sit amet consectetur. Eu pellentesque massa purus volutpat a aliquet facilisi molestie id. Tellus cras interdum blandit scelerisque. Pharetra congue morbi quisque amet mattis netus viverra turpis. Magna lacinia aenean dignissim eu urna consectetur tincidunt pellentesque. Nunc eget senectus sem at metus leo velit eros nibh. Etiam sit in elementum condimentum aliquet. Ac consequat laoreet fermentum nisi at. At viverra morbi euismod urna volutpat aenean vestibulum maecenas mauris. Magnis urna aliquet nunc enim mattis maecenas tristique eu convallis. Est aenean viverra sagittis donec molestie nec. Feugiat metus amet ipsum id consequat phasellus sapien. Sed a augue egestas at. Ipsum sit tempus elit consequat netus. In arcu faucibus sed velit massa. Odio commodo lobortis vestibulum sed mauris"); // Initial post content
    const [currentColorUp, setCurrentColorUp] = useState("white");
    const [currentColorDown, setCurrentColorDown] = useState("white");
    const [isUpVoted, setIsUpVoted] = useState(false);
    const [isDownVoted, setIsDownVoted] = useState(false);

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
            <div className="post">
                <div className="leftAndRight">
                    <div className="ownYellowColor leftSide">
                        <div className="vote">
                            <svg className="arrowUp" width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" onClick={handleUp}>
                                <path d="M3.99999 25.3333H28C28.243 25.3326 28.4812 25.2656 28.6889 25.1395C28.8966 25.0134 29.066 24.8331 29.1789 24.6179C29.2918 24.4027 29.3438 24.1609 29.3295 23.9183C29.3151 23.6757 29.2348 23.4417 29.0973 23.2413L17.0973 5.908C16.6 5.18934 15.4027 5.18934 14.904 5.908L2.90399 23.2413C2.76509 23.4413 2.68364 23.6754 2.66848 23.9184C2.65332 24.1614 2.70504 24.4038 2.81801 24.6195C2.93098 24.8351 3.10089 25.0157 3.30928 25.1415C3.51766 25.2674 3.75655 25.3337 3.99999 25.3333Z" fill={currentColorUp} />
                            </svg>
                            <h2>Vote</h2>
                            <svg className="arrowDown" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDown}>
                                <path d="M28 6.66667L4.00001 6.66667C3.75702 6.66743 3.51884 6.73445 3.3111 6.8605C3.10337 6.98656 2.93395 7.16689 2.82108 7.38207C2.70821 7.59725 2.65616 7.83915 2.67053 8.08171C2.68491 8.32428 2.76517 8.55833 2.90267 8.75867L14.9027 26.092C15.4 26.8107 16.5973 26.8107 17.096 26.092L29.096 8.75867C29.2349 8.55874 29.3164 8.32457 29.3315 8.08161C29.3467 7.83864 29.295 7.59616 29.182 7.38052C29.069 7.16488 28.8991 6.98433 28.6907 6.85847C28.4823 6.73262 28.2434 6.66628 28 6.66667Z" fill={currentColorDown} />
                            </svg>
                        </div>
                        <h5>Post date</h5>
                    </div>
                    <div className="rightSide">
                        <div className="header">
                            <div className="titleAndCategories">
                                <div className="author">
                                    <div className="single_avatar">
                                        <img className="post_avatar" src="" alt=""></img>
                                    </div>
                                    <h1>Post Title</h1>
                                </div>
                                <div className="categories">
                                    <p className=" ownYellowColor mainCategories">Category</p>
                                    {/* <p className="subCategories">Subcategory</p>
                                    <p className="subCategories">Subcategory</p> */}
                                </div>
                            </div>
                            <div className="editDelete">
                                <div className='buttons'>
                                    {isEditMode ? (
                                        <button className='edit' onClick={handleSaveClick}>
                                            Save
                                        </button>
                                    ) : (
                                        <button className='edit' onClick={handleEditClick}>
                                            {/* Edit Post */}
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.783 0L20 3.21704L17.5475 5.67058L14.3305 2.45353L16.783 0ZM5 15H8.21704L16.0312 7.1858L12.8142 3.96876L5 11.783V15Z" fill="#1E555C" />
                                                <path d="M16.8889 17.8889H5.44456C5.41711 17.8889 5.38861 17.8994 5.36117 17.8994C5.32633 17.8994 5.2915 17.8899 5.25561 17.8889H2.11111V3.11111H9.3385L11.4496 1H2.11111C0.946833 1 0 1.94578 0 3.11111V17.8889C0 19.0542 0.946833 20 2.11111 20H16.8889C17.4488 20 17.9858 19.7776 18.3817 19.3817C18.7776 18.9858 19 18.4488 19 17.8889V8.73933L16.8889 10.8504V17.8889Z" fill="#1E555C" />
                                            </svg>
                                        </button>
                                    )}
                                    <button className='delete' onClick={handleDeleteClick}>
                                        {/* Delete */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <clipPath id="clip0_99_6">
                                                <path d="M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072C5.00048 7.04803 4.99982 7.02402 5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM16.997 7H7.003L7.931 20H16.069L16.997 7ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z" fill="black" />
                                            </clipPath>
                                            <defs>
                                                <clipPath id="clip0_99_6">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="mainContent">
                            {isEditMode ? (
                                <textarea
                                    className="editContent"
                                    value={postContent}
                                    onChange={(e) => setPostContent(e.target.value)}
                                />
                            ) : (
                                <p className="postContent">{postContent}</p>
                            )}
                            <div className="image">IMAGE</div>
                        </div>
                        <div className="line"></div>
                        <div className="likeAndComment">
                            <div className="like">
                                <img
                                    src="/post/heart.svg"
                                    alt="down"
                                />
                                <p>Like</p>
                            </div>
                            <div className='buttons'>
                                <button className='comment' onClick={handleCommentClick}>
                                    <img className='commentImg'
                                        src="/post/comment.svg"
                                        alt="down"
                                    /> Comment
                                </button>
                            </div>
                        </div>
                        {comments.map((comment, index) => (
                            <div className="userComment" key={index}>
                                <p className="user">Comment User</p>
                                <p>{comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showComment && <Comment onPostComment={addComment} />}
        </div>
    );
}
