import { projects } from "@utils/config.js"

import './Project.scss'

const renderProjects = () => {
    return (
        projects.map(project => {
            const { id, photo, title, description, date, url } = project || {};

            return (
                <div className="d-flex" key={id}>
                    <div className="card">
                        <img className="project-img object-fit-cover" src={photo} alt={`${title} image`}/>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="card-title fw-bold">{title}</h5>
                                {!!date && (
                                    <h6 className="card-subtitle text-muted">{date}</h6>
                                )}
                                <hr/>
                            </div>
                            <p className="card-text">{description}</p>
                            <hr/>
                            <a href={url} target="_blank" className="btn bg-light-purple text-dark-purple fw-bold">View project</a>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="py-4">
                <h2 className="mb-1 text-center text-uppercase fs-4 fw-bold text-lg-start">Projects</h2>
                <hr className="m-0"/>
                <div className="row row-cols-1 mt-3 row-gap-4 row-cols-md-2 row-cols-lg-3">
                    {renderProjects()}
                </div>
            </div>
        </section>
    )
}