import React from "react";
import '../styles/Home.css'
export default function Home() {
  return (
    <div>
      <div className="container register">
        <div className="row ">
          <div className="col register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>JSPM pre-primary and secondary school, solpur</p>
            <input type="submit" name="" value="Login" />
            <br />
          </div>
          <div className="col-md-9 register-right">
            
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Register Your Student in School Now</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline mx-2">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked
                            className="mx-2"
                          />
                          <span> Male </span>
                        </label>
                        <label className="radio inline mx-2">
                          <input type="radio" name="gender" value="female" className="mx-2"/>
                          <span>Female </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        minlength="10"
                        maxlength="10"
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected disabled>
                          Please select your Sequrity Question
                        </option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Answer *"
                        value=""
                      />
                    </div>
                    <input type="submit" className="btnRegister" value="Register" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 className="register-heading">Apply as a Hirer</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        maxlength="10"
                        minlength="10"
                        className="form-control"
                        placeholder="Phone *"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected disabled>
                          Please select your Sequrity Question
                        </option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="`Answer *"
                        value=""
                      />
                    </div>
                    <input type="submit" className="btnRegister" value="Register" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
