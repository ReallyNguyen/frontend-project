import './OwnPost.css';
import { useState } from 'react';
import Comment from '../Comment/Comment';

export default function OwnPost() {
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
    const [postContent, setPostContent] = useState("Lorem ipsum dolor sit amet consectetur. Eu pellentesque massa purus volutpat a aliquet facilisi molestie id. Tellus cras interdum blandit scelerisque. Pharetra congue morbi quisque amet mattis netus viverra turpis. Magna lacinia aenean dignissim eu urna consectetur tincidunt pellentesque. Nunc eget senectus sem at metus leo velit eros nibh. Etiam sit in elementum condimentum aliquet. Ac consequat laoreet fermentum nisi at. At viverra morbi euismod urna volutpat aenean vestibulum maecenas mauris. Magnis urna aliquet nunc enim mattis maecenas tristique eu convallis. Est aenean viverra sagittis donec molestie nec. Feugiat metus amet ipsum id consequat phasellus sapien. Sed a augue egestas at. Ipsum sit tempus elit consequat netus. In arcu faucibus sed velit massa. Odio commodo lobortis vestibulum sed mauris"); // Initial post content

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
        <div className="post">
            <div className="leftAndRight">
                <div className="leftSide">
                    <div className="vote">
                        <img
                            className="arrowDown"
                            src="/post/up-arrow.svg"
                            alt="up"
                        />
                        <h2>Vote</h2>
                        <img
                            className="arrowDown"
                            src="/post/down-arrow.svg"
                            alt="down"
                        />
                    </div>
                    <h5>Post date</h5>
                </div>
                <div className="rightSide">
                    <div className="header">
                        <div className="titleAndCategories">
                            <h1>Post Title</h1>
                            <div className="categories">
                                <p className="mainCategories">Category</p>
                                <p className="subCategories">Subcategory</p>
                                <p className="subCategories">Subcategory</p>
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
                                        Edit Post
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g clip-path="url(#clip0_99_2)">
                                                <path d="M0.533333 11.1998L0.155733 10.8222L0 10.979V11.1998H0.533333ZM11.2 0.533112L11.5776 0.155512C11.5281 0.105844 11.4692 0.0664386 11.4044 0.0395517C11.3396 0.0126649 11.2702 -0.00117493 11.2 -0.00117493C11.1298 -0.00117493 11.0604 0.0126649 10.9956 0.0395517C10.9308 0.0664386 10.8719 0.105844 10.8224 0.155512L11.2 0.533112ZM15.4667 4.79978L15.8443 5.17738C15.8939 5.12784 15.9333 5.06898 15.9602 5.00419C15.9871 4.93939 16.001 4.86993 16.001 4.79978C16.001 4.72963 15.9871 4.66016 15.9602 4.59537C15.9333 4.53057 15.8939 4.47172 15.8443 4.42218L15.4667 4.79978ZM4.8 15.4664V15.9998H5.0208L5.1776 15.844L4.8 15.4664ZM0.533333 15.4664H0C0 15.6079 0.0561903 15.7436 0.15621 15.8436C0.256229 15.9436 0.391885 15.9998 0.533333 15.9998V15.4664ZM0.910933 11.5774L11.5776 0.910712L10.8224 0.155512L0.155733 10.8222L0.910933 11.5774ZM10.8224 0.910712L15.0891 5.17738L15.8443 4.42218L11.5776 0.155512L10.8224 0.910712ZM15.0891 4.42218L4.4224 15.0888L5.1776 15.844L15.8443 5.17738L15.0891 4.42218ZM4.8 14.9331H0.533333V15.9998H4.8V14.9331ZM1.06667 15.4664V11.1998H0L0 15.4664H1.06667Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_99_2">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                )}
                                <button className='delete' onClick={handleDeleteClick}>
                                    Delete
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_99_6)">
                                            <path d="M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072C5.00048 7.04803 4.99982 7.02402 5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM16.997 7H7.003L7.931 20H16.069L16.997 7ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z" fill="black" />
                                        </g>
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
                                className="postContent"
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
                    {showComment && <Comment onPostComment={addComment} />}
                    {comments.map((comment, index) => (
                        <div className="userComment" key={index}>
                            <p className="user">Comment User</p>
                            <p>{comment}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
