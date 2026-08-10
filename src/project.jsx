import React from "react"
import { useState } from "react";
import { Router } from "react-router-dom"
import "./project.css"
import Nav from "./NavBar"
export default function Project() {

    // const [open, setOpen] = useState(false);

    return (
        <>
            <div className="project-header">
                < h2 className="project-heading"><span>My Projects</span></h2>
            </div>
            <div className="project">


                {/* project card 1 */}
                <div class="card">
                    <div class="card-inner">
                        <div class="front One">
                            <h2>Project 1</h2>
                        </div>

                        <div class="back">
                            <h2>Meat Buy Online</h2>
                            <p>Tools : HTML, CSS</p>
                            <div className="Link">
                                <a href="https://vijayponnusamy78100-droid.github.io/Meat-shop-website/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* project card 2 */}
                <div class="card">
                    <div class="card-inner">
                        <div class="front Two">
                            <h2>Project 2</h2>
                        </div>

                        <div class="back">
                            <h2>Plumming Service</h2>
                            <p>Tools : HTML, CSS</p>
                            <div className="Link">
                                <a href="https://vijayponnusamy78100-droid.github.io/pluming-website/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project card 3 */}
                <div class="card">
                    <div class="card-inner">
                        <div class="front Three">
                            <h2>Project 3</h2>
                        </div>

                        <div class="back">
                            <h2>Todo App</h2>
                            <p>Tools : JavaScript, React, Node.js, MongoDB, REST API, CURD</p>
                            <div className="Link">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project card 4 */}
                <div class="card">
                    <div class="card-inner">
                        <div class="front Four">
                            <h2>Project 4</h2>
                        </div>

                        <div class="back">
                            <h2>Weather App</h2>
                            <p>Tools : HTML,CSS, JavaScript, React, Node.js, API</p>
                            <div className="Link">
                                <a href="https://vijayponnusamy78100-droid.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div></>
    )
}