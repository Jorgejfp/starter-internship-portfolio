import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Paragraphs from "../components/Paragraphs/Paragraphs";
import Footer from "../components/Footer";
import { sectionsData } from "../data/sectionsData.js";

const Main = () => {
    return (
        <>
            <Navbar sectionsData={sectionsData} />
            <Paragraphs sectionsData={sectionsData} />
            <Footer />
        </>
    );
}

export default Main;
