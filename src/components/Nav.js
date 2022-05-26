import React from "react";

export default function Nav ({ currentPage, handlePageChange }) {
    return (
        <ul className="list-unstyled d-flex justify-content-around h5 m-4 p-2">
            <li>
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About'}>About</a>
            </li>
            <li>
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact'}>Contact</a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio'}>Portfolio</a>
            </li>
            <li>
                <a href="#skills" onClick={() => handlePageChange('Skills')} className={currentPage === 'Skills'}>Skills</a>
            </li>
        </ul>
    );
}