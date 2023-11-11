import './Post.css';
import { useState } from 'react';
import Comment from '../Comment/Comment';

export default function Post() {
    const [showComment, setShowComment] = useState(false);
    const [comments, setComments] = useState([]); // State for managing comments

    const handleCommentClick = () => {
        setShowComment(!showComment);
    };

    const addComment = (commentText) => {
        if (commentText.trim() !== '') {
            setComments([...comments, commentText]); // Check if comments are being added to the state
        }
    };
    return (
        <div className="post">
            <div className="leftAndRight">
                <div className="leftSide">
                    <div className="vote">
                        <img
                            className="arrowUp"
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
                        <div className="author">
                            <h4>Author</h4>
                        </div>
                    </div>
                    <div className="mainContent">
                        <p className="postContent">
                            Lorem ipsum dolor sit amet consectetur. Eu pellentesque massa purus
                            volutpat a aliquet facilisi molestie id. Tellus cras interdum
                            blandit scelerisque. Pharetra congue morbi quisque amet mattis netus
                            viverra turpis. Magna lacinia aenean dignissim eu urna consectetur
                            tincidunt pellentesque. Nunc eget senectus sem at metus leo velit
                            eros nibh. Etiam sit in elementum condimentum aliquet. Ac consequat
                            laoreet fermentum nisi at. At viverra morbi euismod urna volutpat
                            aenean vestibulum maecenas mauris. Magnis urna aliquet nunc enim
                            mattis maecenas tristique eu convallis. Est aenean viverra sagittis
                            donec molestie nec. Feugiat metus amet ipsum id consequat phasellus
                            sapien. Sed a augue egestas at. Ipsum sit tempus elit consequat
                            netus. In arcu faucibus sed velit massa. Odio commodo lobortis
                            vestibulum sed mauris{" "}
                        </p>
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
