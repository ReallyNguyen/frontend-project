import React, { useRef, useState } from "react";
import "../UploadImg/UploadImg.css";

export const UploadImg = ({ handleFile }) => {
    const hiddenFileInput = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);

        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(fileUploaded);
    };

    return (
        <>
            <div className="image-preview-container">
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Uploaded"
                        className="image-preview"
                        style={{ objectFit: "contain", width: "136px", height: "103px" }}
                    />
                )}
            </div>
            <button className="button-img-upload" onClick={handleClick}>
                Attach Image
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.83334 21.5C2.19167 21.5 1.64217 21.2713 1.18484 20.814C0.727502 20.3567 0.499224 19.8076 0.500002 19.1667V2.83334C0.500002 2.19167 0.728669 1.64217 1.186 1.18484C1.64334 0.727502 2.19245 0.499224 2.83334 0.500002H19.1667C19.8083 0.500002 20.3578 0.728669 20.8152 1.186C21.2725 1.64334 21.5008 2.19245 21.5 2.83334V19.1667C21.5 19.8083 21.2713 20.3578 20.814 20.8152C20.3567 21.2725 19.8076 21.5008 19.1667 21.5H2.83334ZM2.83334 19.1667H19.1667V2.83334H2.83334V19.1667ZM4 16.8333H18L13.625 11L10.125 15.6667L7.5 12.1667L4 16.8333Z" fill="black" />
                </svg>
            </button>
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
                accept="image/*"
            />
        </>
    );
};
