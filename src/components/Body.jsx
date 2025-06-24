import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import HomePage from "./HomePage/Body.jsx";
import AboutPage from "./AboutPage/Body.jsx";
import PortfolioPage from "./PortfolioPage/Body.jsx";
import ProjectDetailsPage from "./ProjectDetailsPage/Body.jsx";
import ContactPage from "./ContactPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route path="/projectdetailspage" element={<ProjectDetailsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default Body;