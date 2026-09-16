
import "./skill.css";

import html from "./assets/html.png";
import js from "./assets/js.png";
import css from "./assets/css.png";
import mongo from "./assets/mango.png";
import ret from "./assets/react.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import java from "./assets/java.png";
import boots from "./assets/bootsrap.png";

import { IoPlanetSharp } from "react-icons/io5";

export default function Skill() {

    const users = [
        {
            id: 1,
            tool: html,
            skill: "HTML",
        },
        {
            id: 2,
            tool: css,
            skill: "CSS",
        },
        {
            id: 3,
            tool: js,
            skill: "JavaScript",
        },
        {
            id: 4,
            tool: ret,
            skill: "React.js",
        },
        {
            id: 5,
            tool: mongo,
            skill: "MongoDB",
        },
        {
            id: 6,
            tool: node,
            skill: "Node.js",
        },
        {
            id: 7,
            tool: express,
            skill: "Express.js",
        },
        {
            id: 8,
            tool: boots,
            skill: "Bootstrap",
        },
        {
            id: 9,
            tool: java,
            skill: "Java",
        }
    ];

    return (
        <div className="Skils">

            <div>
                <h3>Skills</h3>
            </div>

            <div className="Main">

                {users.map((user) => {

                    return (
                        <div className="Cards CD1" key={user.id}>

                            <div className="Round"></div>

                            <div className="backNum1">
                                <h1>{user.id}</h1>
                            </div>

                            <div className="tool">
                                <img
                                    src={user.tool}
                                    alt={user.skill}
                                />
                            </div>

                            <div className="accesBtn">
                                <button>
                                    <span className="Icon-planet">
                                        <IoPlanetSharp />
                                    </span>

                                    <span>{user.skill}</span>
                                </button>
                            </div>

                        </div>
                    );

                })}

            </div>

        </div>
    );
};
