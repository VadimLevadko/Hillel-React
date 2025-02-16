import { skills } from "@utils/config.js"

import './Skills.scss'

const renderSkills = () => {
    return (
        skills.map((item) => {
            const { id, progress, skillName } = item || {};

            return (
                <div className="skill-item" key={id}>
                    <div className="bg-light-purple text-dark-purple py-2 px-4 rounded-pill">
                        {skillName}
                    </div>
                    <div className="progress mt-2" style={{height: '10px'}}>
                        <div className={`progress-bar w-${progress}`} role="progressbar" aria-valuenow={progress} aria-valuemin="0"
                             aria-valuemax="100"></div>
                    </div>
                </div>
            )
        })
    )
}

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="py-4">
                <h2 className="mb-1 text-center text-uppercase fs-4 fw-bold text-lg-start">Skills</h2>
                <hr className="m-0"/>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 fs-4 mt-3 justify-content-lg-start">
                    {renderSkills()}
                </div>
            </div>
        </section>
    )
}