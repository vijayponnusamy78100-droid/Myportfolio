import "./skill.css";
import Nav from "./NavBar";
import html from "./assets/html.png";
import js from "./assets/js.png";
import css from "./assets/css.png";
import mongo from "./assets/mango.png";
import ret from "./assets/react.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import api from "./assets/rest_api.png";
import bootstap from "./assets/boot.png";
import { IoPlanetSharp } from "react-icons/io5";
import git from "./assets/git.png";
export default function Skill() {
    return (
        <div className="Skils">
            <div>
                <h3>Skils</h3>
            </div>
            <div className="Main">

                <div className="Cards CD1">
                    <div className="Round"></div>
                    <div className="backNum1">
                        <h1>1</h1>
                    </div>
                    <div className="tool">
                        <img src={html} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>HTML</span> </button>
                    </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="Cards CD2">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>2</h1>
                    </div>
                    <div className="tool">
                        <img src={css} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>CSS </span> </button>
                    </div>
                </div>
                <div className="Cards CD3">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>3</h1>
                    </div>
                    <div className="tool">
                        <img src={bootstap} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>Bootstrap</span> </button>
                    </div>
                </div>
                {/* --------------- */}
                <div className="Cards CD3">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>4</h1>
                    </div>
                    <div className="tool">
                        <img src={js} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>JavaScript</span> </button>
                    </div>
                </div>
                {/* ---------------- */}

                <div className="Cards CD4">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>5</h1>
                    </div>
                    <div className="tool">
                        <img src={ret} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>React</span> </button>
                    </div>
                </div>
                <div className="Cards CD5">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>6</h1>
                    </div>
                    <div className="tool">
                        <img src={node} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>NodeJs</span> </button>
                    </div>
                </div>
                <div className="Cards CD6">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>7</h1>
                    </div>
                    <div className="tool">
                        <img src={mongo} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button> <span className="Icon-planet"><IoPlanetSharp /></span> <span>MongoDB</span> </button>
                    </div>
                </div>
                {/* --------------------- */}
                <div className="Cards CD3">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>8</h1>
                    </div>
                    <div className="tool">
                        <img src={api} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button><span className="Icon-planet"><IoPlanetSharp /></span> <span>REST API</span> </button>
                    </div>
                </div>
                {/* ---------------- */}


                <div className="Cards CD6">
                    <div className="Round"></div>

                    <div className="backNum1">
                        <h1>9</h1>
                    </div>
                    <div className="tool">
                        <img src={express} alt="" />
                    </div>
                    <div className="accesBtn">
                        <button> <span className="Icon-planet"><IoPlanetSharp /></span> <span>Express.js</span> </button>
                    </div>
                </div>
                 {/* --------------------- */}
            </div>

        </div>
    )
}