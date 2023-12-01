import React, { useState } from "react";
import './CreatingPost.css';
import { UploadImg } from "../UploadImg/UploadImg";
import CategoryDropdown from "../ChooseCategory/ChooseCategory";
import PostBtn from "../PostBtn/PostBtn";

export default function CreatingPost({ onPost }) {
    const [title, setTitle] = useState("");
    const [postType, setPostType] = useState("");
    const [fileName, setFileName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error, setError] = useState("");
    const [isContainerOpen, setIsContainerOpen] = useState(false);

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

    const handlePost = () => {

        if (!title || !selectedCategory) {
            setError("Please fill in the required fields.");
            return;
        }

        const newPost = {
            title,
            postType,
            fileName,
            selectedCategory,
        };

        try {

            onPost(newPost);


            setTitle("");
            setPostType("");
            setFileName("");
            setSelectedCategory("");
            setError(""); // Clear any previous errors
        } catch (error) {
            setError("An error occurred while posting. Please try again.");
        }
    };

    const handleToggleContainer = () => {
        setIsContainerOpen(!isContainerOpen);
    };

    return (


        <div className="container">
            {!isContainerOpen && (
                <button className="toggleButton" onClick={handleToggleContainer}>
                    Post your Thoughts
                </button>

            )}
            {isContainerOpen && (
                <div className="postBox">
                    {isContainerOpen && (
                        <div className="topSection">
                            <button className="exitButton" onClick={handleToggleContainer}>
                                X
                            </button>
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
                    )}
                    {isContainerOpen && (
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
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <div className="post-btn">
                                <PostBtn onPost={handlePost} />
                            </div>

                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
