import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import logo from './logo.svg';
import logo_white from './logo_white.svg';
import profile from './profile.svg';
import close from './close.svg';
import menu from './menu.svg';


export default function Sidebar({ onCategorySelect }) {

    useEffect(() => {
        if (window.innerWidth >= 1400) {
            setSidebarSwitch(false)
        }
    })

    const [selectedCategory, setSelectedCategory] = useState('Everything');
    const [sidebarSwitch, setSidebarSwitch] = useState(false)

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    const handleClearFilter = () => {
        setSelectedCategory(null);
        onCategorySelect(null); // Notify parent component that the filter is cleared
    };

    const openhandle = () => {
        setSidebarSwitch(!sidebarSwitch);
    }

    const closehandle = () => {
        setSidebarSwitch(false);
    }

    return (
        <div className="sidebarContainer">
            <div className="sidebar">
                <div className="sideHeader">
                    <img className="logo" src={logo} alt="" />
                    <img className="profile" src={profile} alt="" />
                </div>
                <div className="sideCategory">
                    {['Everything', 'Campus', 'Student Life', 'Study Group', 'Housing', 'Events', 'Program', 'Career', 'Alumni'].map(category => (
                        <div key={category} className={`category ${selectedCategory === category ? 'select' : ''}`} onClick={() => handleCategoryClick(category)}>
                            <span>{category}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="topbar">
                <div className="topbarTwo">
                    <img className="logotwo" src={logo_white} alt="" />
                    <img className="openIcon" src={menu} alt="" onClick={openhandle} />
                </div>
                {sidebarSwitch && (<div className="sidebarTwo">
                    <div className="sideHeader">
                        <img className="logo" src={logo} alt="" />
                        <img className="profile" src={profile} alt="" />
                        <img className="closeIcon" src={close} alt="" onClick={closehandle} />
                    </div>
                    <div className="sideCategory">
                        {['Everything', 'Campus', 'Student Life', 'Study Group', 'Housing', 'Events', 'Program', 'Career', 'Alumni'].map(category => (
                            <div key={category} className={`category ${selectedCategory === category ? 'select' : ''}`} onClick={() => handleCategoryClick(category)}>
                                <span>{category}</span>
                            </div>
                        ))}
                    </div>
                </div>)}
            </div>
        </div >
    );
}
