import React, { useState } from "react";
import './CreatingPost.css';
import { UploadImg } from "../UploadImg/UploadImg";
import CategoryDropdown from "../ChooseCategory/ChooseCategory";
import PostBtn from "../PostBtn/PostBtn";

export default function CreatingPost() {
    const [title, setTitle] = useState("");
    const [postType, setPostType] = useState("");
    const [fileName, setFileName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePostTypeChange = (event) => {
        setPostType(event.target.value);
    };

    const handleFile = (file) => {
        setFileName(file.name);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="postBox">
            <div className="topSection">
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    style={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "1.5rem",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal"
                    }}
                />
                <textarea
                    id="postType"
                    value={postType}
                    onChange={handlePostTypeChange}
                    placeholder="Text (Optional)"
                    style={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        resize: "both",
                        overflow: "auto",
                        width: "40rem",
                        minHeight: "5rem",
                        maxWidth: "60rem"
                    }}
                />
            </div>
            <div className="bottomSection">
                <UploadImg handleFile={handleFile} className="uploaded-image" />
                {fileName ? (
                    <p style={{
                        position: 'absolute',
                        top: 115,
                        right: 0,
                        margin: '15px',
                    }}>
                        Attached Image: {fileName}
                    </p>
                ) : null}
                <CategoryDropdown categories={["Campus", "Student Life", "Study Group", "Housing", "Events", "Program", "Career", "Alumni"]} handleCategoryChange={handleCategoryChange} />
                <div className="post-btn">
                    <PostBtn />
                </div>
            </div>
        </div>
    );
}
