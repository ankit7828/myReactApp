import React, { useState } from "react";

function Contact() {
    const [data , setdata] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent = (event)=>{
            const {name, value} = event.target;
            setdata((preval)=>{
                return{
                    ...preval,
                    [name]:value,
                }
            })
    }

    const formsubmit= (e)=>{
e.preventDefault();
alert("My name is "+data.fullname+". my phone no is "+data.phone+" and email is "+data.email+" you are "+data.msg)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <form >
                            <div className="md-3">
                                <label for="forml1" className="form-label">
                                    Name
                                </label>
                                <input 
                                type="text"
                                className="from-control"
                                id="forml1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter Name" />
                            </div>
                            <div className="md-3">
                                <label for="forml2" className="form-label">
                                    Phone
                                </label>
                                <input 
                                type="number"
                                className="from-control"
                                id="forml2"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Mobile Number" />
                            </div>
                            <div className="md-3">
                                <label for="forml3" className="form-label">
                                    Email
                                </label>
                                <input 
                                type="Email"
                                className="from-control"
                                id="forml3"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="Enter Email" />
                            </div>
                            <div className="md-3">
                                <label for="forml4" className="form-label">
                                    Message
                                </label>
                                <textarea 
                                type="text"
                                className="from-control"
                                rows="3"
                                id="forml1"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                placeholder="Message" />
                            </div>
                            <button className="btn btn-outline-primary" type="submit" onClick={formsubmit}>
                                Submit Form
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;