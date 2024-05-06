import React from "react";
import { Outlet } from 'react-router-dom';

// Import the Navbar page
import Navbar from "./navbar"





function Header(props) {

    // HTML
    return (
        <header>
            <div>
                <h1>Willie Yeh</h1>
            </div>
            <div>
                {/* Renders the Navbar react page */}
                <Navbar />
            </div>
        </header>
    )
}

// Exports the Header page
export default Header;