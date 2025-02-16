import GreenList from "../commonSections/GreenList";

import profilePhoto from '@public/images/photo_2025-02-02_19-38-44.jpg'

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="py-4">
                <h2 className="mb-1 text-center text-uppercase fs-5 fw-bold text-lg-start">About</h2>
                <hr className="m-0"/>
                <div className="row row-cols-1 row-cols-xxl-2 mt-3">
                    <div className="text-center mb-3 mb-lg-0 mw-100">
                        <img className="mw-100" src={profilePhoto} alt="Profile picture" />
                    </div>
                    <div>
                        <div className="mb-4">
                            <h3 className="fw-bold m-0 fs-6 text-uppercase">Summary</h3>
                            <hr className="my-2"/>
                            <p className="fs-5">
                                Young Front-End developer with experience in JavaScript and React,
                                familiar with TypeScript. Use SCSS for styling. Worked on single-page
                                and multi-page websites, with experience working with admin
                                panels, fetching data from servers, and integrating it into interfaces.
                                Continuously learning and improving my skills through hands-on
                                practice, aiming to grow expertise in React and TypeScript.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fw-bold m-0 fs-6 text-uppercase">LANGUAGES</h3>
                            <hr className="my-2"/>
                            <GreenList list={['English B1']} />
                        </div>
                        <div>
                            <h3 className="fw-bold m-0 fs-6 text-uppercase">Hobby</h3>
                            <hr className="my-2"/>
                            <p className="fs-5">
                                I enjoy skiing and plan to try snowboarding. I also love mountain
                                tourism. I enjoy driving cars and motorcycle
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}