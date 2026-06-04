"use client";

import { useState } from "react";

export default function Burger(){

    const [drawerExpanded, setDrawerExpanded] = useState(false);

    return (
        <>

            <button 
            className={`burger ${drawerExpanded ? "burger-active" : ""}`}
            onClick={() => setDrawerExpanded(!drawerExpanded)} 
            >
            <div className="burger-label">Menu</div>
            <div className="burger-lines">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            </button>

            {/* <div className="hdr-drawer">

            </div> */}

        </>
    )
}
