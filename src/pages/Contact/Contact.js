/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import contactme from '../../assets/images/contact_me.png';

const Contact = () => {
    return (
        <>
            <section className="h-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0 p-4">
                                    <div className="col-xl-6 mt-5">
                                        <img src={contactme} alt="Student photo"
                                            className="img-fluid"
                                            style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', width: '70%', height: '90%' }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase d-flex justify-content-center">Get in touch!</h3>

                                            <div className='row'>
                                                <div className='form-outline mb-3'>
                                                    <label className="form-label" htmlFor="form3Example1m">Name</label>
                                                    <input type='text' className='form-control form-control-lg' ></input>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-outline mb-3'>
                                                    <label className="form-label" htmlFor="form3Example1m">Email</label>
                                                    <input type='email' className='form-control form-control-lg'></input>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-outline mb-3'>
                                                    <label className="form-label" htmlFor="form3Example1m">Subject</label>
                                                    <input type='text' className='form-control form-control-lg' ></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-outline mb-3" >
                                                    <label className="form-label" htmlFor="form3Example1m">Message</label>
                                                    <textarea cols={10} rows={5} className='form-control form-control-lg'></textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start pt-3">
                                                <button type="button" className="btn btn-primary btn-lg ms-2">Send  Email</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="container mt-4 mb-3">

                <form method="post" className="p-5 bg-white">
                    <h3 className="text-center text-primary mb-4">Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    name="txtName"
                                    className="form-control rounded-pill"
                                    placeholder="Your Name *"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    name="txtEmail"
                                    className="form-control rounded-pill"
                                    placeholder="Your Email *"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    name="txtPhone"
                                    className="form-control rounded-pill"
                                    placeholder="Your Phone Number *"
                                />
                            </div>
                            <div className="form-group mb-3 text-center">
                                <input
                                    type="submit"
                                    name="btnSubmit"
                                    className="btn btn-danger rounded-pill px-4 py-2"
                                    value="Send Message"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <textarea
                                    name="txtMsg"
                                    className="form-control"
                                    placeholder="Your Message *"
                                    style={{ width: '100%', height: '150px' }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
        </>

    );
};

export default Contact;