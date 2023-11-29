import React, { useState } from "react";
import "../ChooseCategory/ChooseCategory.css";

export default function CategoryDropdown({ categories, handleCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        handleCategoryChange(category);
    };

    return (
        <div className="category-dropdown">
            <select
                className="dropdown-container"
                value={selectedCategory}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Choose Category
                </option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
