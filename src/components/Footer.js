import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            {/* <footer className="footer mt-auto py-3 bg-light">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">School Name</h5>
                            <p>
                                Our mission is to provide quality education and foster lifelong learning.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Contact Us</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">Email: info@school.com</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Phone: (123) 456-7890</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Address: 123 School Street, City, Country</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 School Name
                </div>
                
            </footer> */}


            <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:info@school.com">info@school.com</a></li>
                            <li><a href="tel:+1234567890">+1 234 567 890</a></li>
                            <li>123 School Street, City, Country</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                            <li><a href="/academics">Academics</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/school" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.twitter.com/school" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com/school" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 School Name. All rights reserved.</p>
                </div>
            </div>
        </footer>

        </>
    );
};

export default Footer;