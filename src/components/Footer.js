import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
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
                                <li> <Link className="nav-link" to="/about">About</Link></li>
                                <li> <Link className="nav-link" to="/contact">Contact</Link></li>
                                <li><a href="/admissions">Admissions</a></li>
                                <li><a href="/academics">Academics</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/school" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://x.com/KishorC19057759" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://www.instagram.com/_kishor_96k/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>&copy; 2024 Our School. All rights reserved.</p>
            </footer>

        </>
    );
};

export default Footer;