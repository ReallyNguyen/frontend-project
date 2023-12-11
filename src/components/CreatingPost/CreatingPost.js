import React, { useState } from "react";
import './CreatingPost.css';
import { UploadImg } from "../UploadImg/UploadImg";
import CategoryDropdown from "../ChooseCategory/ChooseCategory";
import PostBtn from "../PostBtn/PostBtn";

export default function CreatingPost({ onPost }) {
    const [title, setTitle] = useState("");
    const [postType, setPostType] = useState("");
    const [fileName, setFileName] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);
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
        setUploadedImage(URL.createObjectURL(file));
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handlePost = () => {
        if (!title || !selectedCategory) {
            setError("Please fill in the required fields.");
            return;
        }

        const now = new Date();
        const formattedDate = `${now.getDate()}`;
        const number = 0;

        const postObject = {
            title,
            postCategory: selectedCategory,
            postContent: postType,
            days: 0,
            number,
            comments: [],
            uploadedImage,
            own: true
        };

        try {
            console.log("Post Data:", postObject);
            onPost(postObject);
            setTitle("");
            setPostType("");
            setFileName("");
            setUploadedImage(null);
            setSelectedCategory("");
            setError("");
        } catch (error) {
            setError("An error occurred while posting. Please try again.");
        }

        handleToggleContainer()
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
                            <div className="titleContainer">
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Title"
                                    style={{
                                        color: "black",
                                        fontFamily: "Inter",
                                        fontSize: "1.5rem",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        lineHeight: "normal"
                                    }}
                                    className="titleInput"
                                />
                                <button className="exitButton" onClick={handleToggleContainer}>
                                    CLOSE
                                </button>
                            </div>
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
                                    width: "100%",
                                    minHeight: "5rem",
                                }}
                                className="contentInput"
                            />
                        </div>
                    )}
                    {isContainerOpen && (
                        <div className="bottomSection">
                            <div>
                                <UploadImg handleFile={handleFile} />
                                {uploadedImage && (
                                    <div className="image-preview-container">
                                        <img className="image-preview" src={uploadedImage} alt="Uploaded" />
                                        <p className="image-title">
                                            Attached Image: {fileName}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <CategoryDropdown categories={["Campus", "Student Life", "Study Group", "Housing", "Events", "Program", "Career", "Alumni"]} handleCategoryChange={handleCategoryChange} />
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <div className="post-btn" >
                                <PostBtn onPost={handlePost} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
