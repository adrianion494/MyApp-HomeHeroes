import React from "react"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./About.css"


function About() {
    return (
        <><Header /><div className="form-about">
            <div className="title-about">
                Who are we?
            </div>
            <div className="row">
                <div className="img-about">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="image" />

                </div>
                <div className="img-about">
                    <img src="https://insiderconstruction.com/wp-content/uploads/2021/08/d2_construction.jpg" alt="image" />
                </div>
            </div>
            <div className="main-about">
                Is one of the construction apps that helps construction managers in making their field reports in a quick and easy way.With a few taps and pre-defined project and report details site managers or field supervisors can make notes, take photos and generate professional PDF reports.
            </div>
            <Footer />
        </div></>

    )
}

export default About;