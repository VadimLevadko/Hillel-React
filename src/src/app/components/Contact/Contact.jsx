import GreenList from "@commonSections/GreenList";

import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { MdOutlineAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="py-4">
                <h2 className="mb-1 text-center text-uppercase fs-4 fw-bold text-lg-start">Contact</h2>
                <hr className="m-0"/>
                <div className="row row-cols-1 align-items-center py-4 row-cols-md-2">
                    <div className="row row-cols-2 row-cols-md-1 mb-4 mb-md-0">
                        <div className="mb-3 order-1 order-md-0">
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <FaLocationDot/>
                                    <h3 className="fs-7 mb-0 text-light-gray">Location</h3>
                                </div>
                                <p>Kropyvnytskyi, Kirovohrad Oblast, Ukraine</p>
                            </div>
                            <GreenList list={['Remote', 'Office']}/>
                        </div>
                        <div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <MdOutlineAlternateEmail/>
                                    <h3 className="fs-7 mb-0 text-light-gray">Email</h3>
                                </div>
                                <a className="text-decoration-none text-dark-purple fw-bold"
                                   href="mailto:vadimlevadko@gmail.com">vadimlevadko@gmail.com</a>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <MdOutlinePhoneIphone/>
                                    <h3 className="fs-7 mb-0 text-light-gray">Phone</h3>
                                </div>
                                <a className="text-decoration-none text-dark-purple fw-bold"
                                   href="tel:+380980421806">+380980421806</a>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <FaTelegram/>
                                    <h3 className="fs-7 mb-0 text-light-gray">Telegram</h3>
                                </div>
                                <a className="text-decoration-none text-dark-purple fw-bold"
                                   href="https://t.me/VL7940">@VL7940</a>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <FaLinkedin/>
                                    <h3 className="fs-7 mb-0 text-light-gray">LinkedIn</h3>
                                </div>
                                <a className="text-decoration-none text-dark-purple fw-bold"
                                   href="https://www.linkedin.com/in/vadim-levadko-bb3a79345/">Vadim Levadko</a>
                            </div>
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <FaGithub/>
                                    <h3 className="fs-7 mb-0 text-light-gray">GitHub</h3>
                                </div>
                                <a className="text-decoration-none text-dark-purple fw-bold"
                                   href="https://github.com/VadimLevadko">Vadim Levadko</a>
                            </div>
                        </div>
                    </div>
                    <form className="mw-100 mx-auto fw-bold" onSubmit={e => e.preventDefault()}>
                        <div className="mb-3">
                            <label htmlFor="userNameInput" className="form-label">Your name</label>
                            <input type="text" className="form-control" id="userNameInput"
                                   placeholder="Your name..."/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userEmailInput" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="userEmailInput"
                                   placeholder="name@gmail.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userMessageTextarea" className="form-label">Message</label>
                            <textarea className="form-control" id="userMessageTextarea" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn bg-light-purple text-dark-purple fw-bold w-25">Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}