import React from 'react'
import '../About/About.css'
import teacher from '../../assets/images/portrait_one.jpg'
export default function About() {
  return (
    <div>
   <header className="hero">
                <h1>About Our School</h1>
            </header>

            <div className="container my-5">
                <h2>Our Mission</h2>
                <p>To provide a nurturing environment that promotes learning, creativity, and personal growth.</p>
                
                <h2>Our History</h2>
                <p>Founded in 2000, our school has been dedicated to fostering educational excellence and community involvement.</p>

                <h2>Meet the Team</h2>
                <div className="row">
                    <div className="col-md-4 team-member text-center">
                        <img src={teacher} alt="Principal" className="img-fluid rounded-circle" />
                        <h3>John Smith</h3>
                        <p>Principal</p>
                    </div>
                    <div className="col-md-4 team-member text-center">
                        <img src={teacher} alt="Vice Principal" className="img-fluid rounded-circle" />
                        <h3>Jane Doe</h3>
                        <p>Vice Principal</p>
                    </div>
                    <div className="col-md-4 team-member text-center">
                        <img src={teacher} alt="Head Teacher" className="img-fluid rounded-circle" />
                        <h3>Emily White</h3>
                        <p>Head Teacher</p>
                    </div>
                </div>
            </div>
  
    </div>
  )
}
