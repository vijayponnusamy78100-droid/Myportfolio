import React from "react";
import "./educ.css";

const educationData = [
    {
        id: 1,
        title: "10th Grade",
        year: "2019 – 2020",
        percent: 67,
        icon: "📖",
        board: "State Board",
        description: "Completed 10th standard with a focus on core subjects and basics.",
    },
    {
        id: 2,
        title: "12th Grade",
        year: "2021 – 2022",
        percent: 68,
        icon: "🎓",
        board: "State Board",
        description: "Completed 12th standard in Bio-Maths stream.",
    },
    {
        id: 3,
        title: "B.Sc Computer Science",
        year: "2022 – 2025",
        percent: 69.92,
        icon: "🏆",
        board: " Periyar - University Salem",
        description:
            "Pursued Bachelor's degree in Computer Science and gained basic knowledge.",
    },{
        id: 4,
        title: "MERN Stack Course",
        year: "Aug 2025 -  March 2026 (6 months)",
        percent: 90,
        icon: "🏆",
        board: " Code99 IT Academy Velachery",
        description:
            "Pursued MERN Stack course and gained practical knowledge.",
    }
];

function ProgressCircle({ percent, title }) {
    const radius = 86;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="education-progress">
            <svg className="progress-svg" viewBox="0 0 200 200">
                <circle className="progress-bg" cx="100" cy="100" r={radius} />
                <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>

            <div className="progress-content">
                <strong>{percent}%</strong>
                <span>{title}</span>
            </div>
        </div>
    );
}

export default function education() {
    return (
        <section className="education-section" id="education">
            <div className="education-container">
                {/* Heading */}
                <div className="education-heading">
                    <div className="education-icon">🎓</div>
                    <h2>Education</h2>
                    <div className="heading-line" />
                    <p>
                        My academic journey that built the foundation
                        <br className="desktop-break" /> of my knowledge and skills.
                    </p>
                </div>

                {/* Progress circles */}
                <div className="progress-wrapper">
                    {educationData.map((item) => (
                        <div className="progress-item" key={item.id}>
                            <ProgressCircle
                                percent={item.percent}
                                title={item.id === 3 ? "Graduation" : item.title}
                            />

                            <div className="education-small-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p className="education-year">{item.year}</p>
                        </div>
                    ))}
                </div>

                {/* Academic Journey */}
                <div className="journey-heading">
                    <h3>My Academic Journey</h3>
                    <div className="journey-line" />
                </div>

                <div className="journey">
                    <div className="journey-line-horizontal" />

                    {educationData.map((item) => (
                        <article className="education-card" key={item.id}>
                            <div className="timeline-dot" />

                            <div className="card-top">
                                <span className="card-year">▣ &nbsp;{item.year}</span>
                                <span className="card-percent">{item.percent}%</span>
                            </div>

                            <h4>{item.title}</h4>
                            <p className="card-board">⌖ &nbsp;{item.board}</p>
                            <p className="card-description">{item.description}</p>
                        </article>
                    ))}
                </div>

                <button
                    className="resume-button"
                    type="button"
                    onClick={() => window.open("./assets/Vijay_Resume(1).pdf", "_blank")}
                >
                    &nbsp; Download Resume
                </button>
            </div>
        </section>
    );
}