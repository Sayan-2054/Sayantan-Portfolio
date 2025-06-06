import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>


        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information Science and Engineering</h3>
                            <span className="qualification__subtitle">Bangalore Institute of Technology</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2026
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Senior Secondary School</h3>
                            <span className="qualification__subtitle">Kendriya Vidyalaya</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">AI and Data Analyst Intern</h3>
                            <span className="qualification__subtitle">Blue Planets Infosolutions pvt. ltd.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> July 2024 - Nov 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Developer and Technology Job Simulation</h3>
                            <span className="qualification__subtitle">The Forage: Accenture</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> August 2023 - October 2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification