import { FaArrowRightLong } from "react-icons/fa6";
import bg from "./assets/background.png";
import mypic from "./assets/mypic.png";
import { Link } from "react-router-dom";
import './index.css';

import { useState } from "react";
export default function Home() {

    const [open, setOpen] = useState();
    

    function Icon() {
        setOpen(!open)
    }

    return (
        <>
            <div className="Overall">
                <div className="container1">
                    <div className="S-container1">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="S-container2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <div className="container2"></div>
                <div className="container3"></div>

                <div className="Home">
                    <div className="In-container Con1">
                        <h1 className='textAnim'>VIJAY</h1>
                        <h1>Web Developer</h1>
                        <div className="trans">
                            <img src={mypic} alt="" className="My-pic" />
                            <img src={bg} alt="" className="Box-BG" />
                        </div>
                    </div>
                    <div className="In-container Con2">
                        
                        <p className="para">Hi, I'm Vijay , A Frontend Developer specializing in the MERN stack.
                             I build fast, responsive web applications with React, Node.js, Express.js, and MongoDB,
                              turning ideas into clean, functional digital experiences.</p>
                            
                        <Link to="/contect" onClick={() => setOpen(false)}>
                            <div className="btn" onClick={Icon}>Contect <span className={open ? 'btnOpen' : 'IconAnim'}><FaArrowRightLong /></span></div>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

