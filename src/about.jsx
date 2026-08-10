import "./about.css";
import about3 from "../src/assets/shape3.png";
import about2 from "../src/assets/shape2.png";
import about1 from "../src/assets/shap1.png";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="About">
            <div className="main">
                <span><Link to="/about">About</Link></span>
            </div>
            <div className="Main">
                <div className="Container">
                    <div className="IN-Ab Ab1">
                        <img className="abpin1 shap" src={about3} alt="shape 1" />
                        <img className="abpin2 shap" src={about2} alt="shape 2" />
                        <img className="abpin3 shap" src={about1} alt="shape 3" />
                    </div>

                    <div className="IN-Ab Ab2">
                        <div className="para">
                            <h1 className="My-name"><span>V</span><span>i</span><span>j</span><span>a</span><span>y</span></h1>
                            
                            <p>I'm Vijay, a B.Sc. Computer Science graduate based in Chennai, with hands-on 
                                MERN stack training from Code99 IT Academy. I specialize in building responsive, 
                                user-friendly interfaces with React and JavaScript, and I'm expanding into backend 
                                development with Node.js, Express.js, and MongoDB. I enjoy turning ideas into clean, 
                                functional web experiences and I'm always learning new tools to sharpen my craft.
                             </p>
                             <div className="resume-link">
                                <a href="https://drive.google.com/file/d/1pHHyWFlFfnuumYn1ntOZU7jQMmH8K4Ch/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    Resume Link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}