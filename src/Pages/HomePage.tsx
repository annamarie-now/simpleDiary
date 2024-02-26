import React from 'react';
import '../styles/HomePage.scss';
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div className="homePage_container">
            <h1>WELCOME TO A FAST AND SIMPLE DIARY EXPERIENCE </h1>
            <p>Create and manage your diary entries.</p>
            <button>
                <Link to="/addDiaryEntry">Start now</Link>
            </button>
        </div>
    );
};

export default HomePage;
