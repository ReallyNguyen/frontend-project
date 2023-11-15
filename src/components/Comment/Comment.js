import './Comment.css'
import { useState } from 'react';

export default function Comment({ onPostComment, onClose }) {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handlePostComment = () => {
        // Call the onPostComment function to pass the comment text to the parent component.
        onPostComment(text);
        // Clear the text input after posting.
        setText('');
    };

    const handleClose = () => {
        // Call the onClose function to close the Comment component.
        onClose();
    };

    return (
        <div className='commentContainer'>
            <div className='commentPopup'>
                <button className='closeButton' onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.35355 0.646447C1.15829 0.841709 1.15829 1.15829 1.35355 1.35355L7.65685 7.65685L1.35355 13.9601C1.15829 14.1553 1.15829 14.4718 1.35355 14.6671C1.54882 14.8623 1.86534 14.8623 2.06061 14.6671L8.36391 8.36391L14.6671 14.6671C14.8623 14.8623 15.1788 14.8623 15.3741 14.6671C15.5694 14.4718 15.5694 14.1553 15.3741 13.9601L9.07079 7.65685L15.3741 1.35355C15.5694 1.15829 15.5694 0.841709 15.3741 0.646447C15.1788 0.451184 14.8623 0.451184 14.6671 0.646447L8.36391 6.94975L2.06061 0.646447C1.86534 0.451184 1.54882 0.451184 1.35355 0.646447Z" fill="black" />
                    </svg>
                </button>
                <h1 className='commentCardTitle'>Add a Comment</h1>
                <textarea
                    className='commentInput'
                    type="text"
                    maxLength="500"
                    id='name'
                    value={text}
                    onChange={handleChange}
                >
                    What do you think?
                </textarea>
                <div className='' id='countWord'>{text.length}/500 Characters</div>
                <div className='buttons'>
                    <button className='postImageCommentButton'>
                        Add Image
                        {/* Add image SVG here */}
                    </button>
                    <button className='postCommentButton' onClick={handlePostComment}>
                        Post
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            {/* Post SVG here */}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
