import React, { useState } from 'react';
import './Sidebar.css';
import logo from './logo.svg';
import profile from './profile.svg';

export default function Sidebar({ onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };
    return (
        <div className="sidebar">
            <div className="sideHeader">
                <img className="logo" src={logo} alt="" />
                <img className="profile" src={profile} alt="" />
            </div>
            <div className="sideCategory">
                <div
                    className={`category ${selectedCategory === 'Campus' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Campus')}
                >
                    Campus                </div>
                <div
                    className={`category ${selectedCategory === 'Student Life' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Student Life')}
                >
                    Student Life
                </div>
                <div
                    className={`category ${selectedCategory === 'Study Group' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Study Group')}
                >
                    Study Group                </div>
                <div
                    className={`category ${selectedCategory === 'Housing' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Housing')}
                >
                    Housing
                </div>
                <div
                    className={`category ${selectedCategory === 'Events' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Events')}
                >
                    Events
                </div>
                <div
                    className={`category ${selectedCategory === 'Program' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Program')}
                >
                    Program
                </div>
                <div
                    className={`category ${selectedCategory === 'Career' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Career')}
                >
                    Career
                </div>
                <div
                    className={`category ${selectedCategory === 'Alumni' ? 'select' : ''}`}
                    onClick={() => handleCategoryClick('Alumni')}
                >
                    Almuni
                </div>
            </div>
        </div>
    );
}
