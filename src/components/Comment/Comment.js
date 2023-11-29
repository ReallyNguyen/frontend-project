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
                <div className='topbar'>
                    <div className='commentCardTitle'>Add a Comment
                        <div className='countWord' id='countWord'>{text.length}/500 Characters</div>
                    </div>
                    <button className='closeButton' onClick={handleClose}>
                        <svg width="16" height="16" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.63992 0.27L5.49992 4.13L9.33992 0.29C9.42474 0.199717 9.52692 0.127495 9.64033 0.0776622C9.75374 0.0278298 9.87605 0.00141434 9.99992 0C10.2651 0 10.5195 0.105357 10.707 0.292893C10.8946 0.48043 10.9999 0.734784 10.9999 1C11.0023 1.1226 10.9795 1.24439 10.9331 1.35788C10.8866 1.47138 10.8175 1.57419 10.7299 1.66L6.83992 5.5L10.7299 9.39C10.8947 9.55124 10.9914 9.76959 10.9999 10C10.9999 10.2652 10.8946 10.5196 10.707 10.7071C10.5195 10.8946 10.2651 11 9.99992 11C9.87247 11.0053 9.74532 10.984 9.62654 10.9375C9.50775 10.8911 9.39993 10.8204 9.30992 10.73L5.49992 6.87L1.64992 10.72C1.56542 10.8073 1.46448 10.8769 1.35292 10.925C1.24136 10.9731 1.12138 10.9986 0.999919 11C0.734702 11 0.480348 10.8946 0.292812 10.7071C0.105275 10.5196 -8.1434e-05 10.2652 -8.1434e-05 10C-0.00241293 9.8774 0.020334 9.75561 0.0667635 9.64212C0.113193 9.52862 0.182326 9.42581 0.269919 9.34L4.15992 5.5L0.269919 1.61C0.105104 1.44876 0.00845818 1.23041 -8.1434e-05 1C-8.1434e-05 0.734784 0.105275 0.48043 0.292812 0.292893C0.480348 0.105357 0.734702 0 0.999919 0C1.23992 0.003 1.46992 0.1 1.63992 0.27Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <textarea
                    className='commentInput'
                    type="text"
                    maxLength="500"
                    id='name'
                    value={text}
                    placeholder="Leave comments..."
                    onChange={handleChange}
                >
                    What do you think?
                </textarea>
                <div className='buttons'>
                    {/* <button className='postImageCommentButton'>
                        Add Image
                        Add image SVG here
                    </button> */}
                    <button className='postCommentButton' onClick={handlePostComment}>
                        Comments
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            {/* Post SVG here */}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
