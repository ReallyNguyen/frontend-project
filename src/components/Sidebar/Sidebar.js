import React, { useState } from 'react';
import './Sidebar.css';
import logo from './logo.svg';
import profile from './profile.svg';

export default function Sidebar({ onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState('Everything');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    const handleClearFilter = () => {
        setSelectedCategory(null);
        onCategorySelect(null); // Notify parent component that the filter is cleared
    };

    return (
        <div className="sidebar">
            <div className="sideHeader">
                <img className="logo" src={logo} alt="" />
                <img className="profile" src={profile} alt="" />
            </div>
            <div className="sideCategory">
                {['Everything', 'Campus', 'Student Life', 'Study Group', 'Housing', 'Events', 'Program', 'Career', 'Alumni'].map(category => (
                    <div key={category} className={`category ${selectedCategory === category ? 'select' : ''}`} onClick={() => handleCategoryClick(category)}>
                        <span>{category}</span>
                        {/* {selectedCategory === category && (
                            <button className="closeButton" onClick={handleClearFilter}>
                                X
                            </button>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
