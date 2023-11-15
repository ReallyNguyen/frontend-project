import './Sidebar.css';
import logo from './logo.svg';
import profile from './profile.svg';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideHeader">
                <img className="logo" src={logo} alt="" />
                <img className="profile" src={profile} alt="" />
            </div>
            <div className="sideCategory">
                <div className="category select">Campus</div>
                <div className="category">Student Life</div>
                <div className="category">Study Group</div>
                <div className="category">Housing</div>
                <div className="category">Events</div>
                <div className="category">Program</div>
                <div className="category">Career</div>
                <div className="category">Alumni</div>
            </div>
        </div>
    );
}
