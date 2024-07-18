/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// import student from '../../assets/images/lake-7301021_1280.jpg'
// import student2 from '../../assets/images/sunset-7708222_1280.jpg';
import './Home.css';

const Home = () => {
  return (
    <>

      <section className=''>

        {/* Hero Section */}
        <div className=" backimg jumbotron jumbotron-container text-center mt-n5">
          <div className="container">
            <h1 className="text-white">Welcome to Our School</h1>
            <p className="text-white">Providing quality education since 1990</p>
          </div>
        </div>

        {/* Modules Section */}
        <div className="container mb-4">
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
       
      </section>
    </>
  );
};

export default Home;
