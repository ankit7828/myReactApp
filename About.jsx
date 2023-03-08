import React from "react";
import web  from '../src/images/a.jpg'
import Common from "./Common";

function About() {

    return (
        <>
            <Common name="Welcome to about page"
                imgsrc={web}
                visit="/contact"
                btname="Contact" />
        </>
    )

}
export default About;