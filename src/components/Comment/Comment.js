import './Comment.css'
import { useState } from 'react';

export default function Comment({ onPostComment }) {

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
    return (
        <div className='commentContainer'>
            <div className='commentPopup'>
                <h1 className='commentCardTitle'>Add a Comment</h1>
                <textarea className='commentInput' type="text" maxlength="500" id='name'
                    value={text}
                    onChange={handleChange}>What do you think?

                </textarea>   <div className='' id='countWord'>{text.length}/500 Characters</div>
                <div className='buttons'>
                    <button className='postImageCommentButton'>
                        Add Image
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M2.83334 21.5C2.19167 21.5 1.64217 21.2713 1.18484 20.814C0.727502 20.3567 0.499224 19.8076 0.500002 19.1667V2.83334C0.500002 2.19167 0.728669 1.64217 1.186 1.18484C1.64334 0.727502 2.19245 0.499224 2.83334 0.500002H19.1667C19.8083 0.500002 20.3578 0.728669 20.8152 1.186C21.2725 1.64334 21.5008 2.19245 21.5 2.83334V19.1667C21.5 19.8083 21.2713 20.3578 20.814 20.8152C20.3567 21.2725 19.8076 21.5008 19.1667 21.5H2.83334ZM2.83334 19.1667H19.1667V2.83334H2.83334V19.1667ZM4 16.8333H18L13.625 11L10.125 15.6667L7.5 12.1667L4 16.8333Z" fill="black" />
                        </svg>
                    </button>
                    <button className='postCommentButton' onClick={handlePostComment}>Post<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M17.686 7.42568L17.68 7.42309L1.83135 0.849533C1.69804 0.793738 1.55299 0.771856 1.40916 0.785844C1.26533 0.799832 1.1272 0.849254 1.00715 0.929689C0.880307 1.0128 0.776118 1.12615 0.703956 1.25952C0.631793 1.3929 0.593923 1.54212 0.59375 1.69377V5.89789C0.593821 6.1052 0.666209 6.306 0.79844 6.46566C0.93067 6.62533 1.11446 6.73386 1.31813 6.77256L9.96201 8.37086C9.99598 8.3773 10.0266 8.39539 10.0487 8.42202C10.0707 8.44864 10.0828 8.48213 10.0828 8.5167C10.0828 8.55127 10.0707 8.58476 10.0487 8.61138C10.0266 8.63801 9.99598 8.6561 9.96201 8.66254L1.3185 10.2608C1.11489 10.2994 0.931109 10.4078 0.798819 10.5674C0.66653 10.7269 0.59401 10.9275 0.59375 11.1348V15.3396C0.593652 15.4844 0.629506 15.627 0.698097 15.7545C0.766688 15.8821 0.865868 15.9906 0.986739 16.0703C1.13213 16.1669 1.30276 16.2185 1.47732 16.2188C1.59868 16.2186 1.71879 16.1943 1.83061 16.1471L17.6789 9.61106L17.686 9.60772C17.8993 9.51604 18.0811 9.36382 18.2088 9.16991C18.3365 8.976 18.4046 8.7489 18.4046 8.5167C18.4046 8.2845 18.3365 8.0574 18.2088 7.86349C18.0811 7.66958 17.8993 7.51737 17.686 7.42568Z" fill="black" />
                    </svg></button>
                </div>
            </div>
        </div>
    )
}