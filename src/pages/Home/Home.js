/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../Home/Home.css'
// import student from '../../assets/images/lake-7301021_1280.jpg'
// import student2 from '../../assets/images/sunset-7708222_1280.jpg'
const Home = () => {
  return (
    <>

      <section>

        {/* Hero Section */}
        <div className="jumbotron jumbotron-container text-center mt-n5">
          <div className="container">
            <h1 className="display-4">Welcome to Our School</h1>
            <p className="lead">Providing quality education since 1990</p>
          </div>
        </div>

        {/* Modules Section */}
        <div className="container">
          <div className="row">
            {/* Module 1: News */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Latest News
                </div>
                <div className="card-body">
                  <p className="card-text">Stay updated with the latest news and events happening at our school.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            {/* Module 2: Academic Programs */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Academic Programs
                </div>
                <div className="card-body">
                  <p className="card-text">Explore our wide range of academic programs and find the right fit for you.</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            {/* Module 3: Student Life */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Student Life
                </div>
                <div className="card-body">
                  <p className="card-text">Discover the vibrant student life and activities we offer at our school.</p>
                  <a href="#" className="btn btn-primary">Explore</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {/* Module 4: Admissions */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Admissions
                </div>
                <div className="card-body">
                  <p className="card-text">Find out about the admissions process and how to apply to our school.</p>
                  <a href="#" className="btn btn-primary">Apply Now</a>
                </div>
              </div>
            </div>
            {/* Module 5: Faculty */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Faculty
                </div>
                <div className="card-body">
                  <p className="card-text">Meet our dedicated and experienced faculty members.</p>
                  <a href="#" className="btn btn-primary">Meet Our Faculty</a>
                </div>
              </div>
            </div>
            {/* Module 6: Alumni */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Alumni
                </div>
                <div className="card-body">
                  <p className="card-text">Connect with our alumni network and see their achievements.</p>
                  <a href="#" className="btn btn-primary">Connect</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-light text-center text-lg-start mt-5">
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
        </footer>
      </section>
    </>
  );
};

export default Home;