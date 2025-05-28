import React, { useEffect } from "react";
import './career.css';
import Brad from '../Brad/Brad';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Career() {
    useEffect(() => {
        document.title = "Career";
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div>
                <Brad head={"Career"} />
                <div className="career-section">

                    <div className="row address-row pt-lg-5">
                        <div className="col-lg-12 my-2">
                            <div className="address-right p-sm-5 p-4" align="center" data-aos="fade-up">
                                <h3 className="career-title">Grow with Us 🚀</h3>
                                <p className="career-subtext">
                                    Submit the form to get personalized support in landing internships and job roles that match your goals. Let's build your future, together!
                                </p>

                                <div className="career-btns">
                                    <a
                                        href="https://forms.gle/XEuGyqa5NHgRvKHg6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="boxed-btn4 shadow"
                                    >
                                        Apply for Internship
                                    </a>

                                    <a
                                        href="https://forms.gle/DPLh165jX8P52E3t8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="boxed-btn4 shadow"
                                    >
                                        Apply for Job
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career;
