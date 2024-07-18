/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import studimg from "../../../assets/images/studentone.jpg";
import { Link } from "react-router-dom";

export default function Registration() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const toggleFirstName = (event) => {
    setFName(event.target.value);
  };

  const toggleLastName = (event) => {
    setLName(event.target.value);
  };

  const toggleEmail = (event) => {
    setEmail(event.target.value);
  };

  const toggleContactNumber = (event) => {
    setNumber(event.target.value);
  };

  const togglePassword = (event) => {
    setPassword(event.target.value);
  };

  const toggleConfPassword = (event) => {
    setConfirmpassword(event.target.value);
  };

  const toggleDate = (event) => {
    setDate(event.target.value);
  };

  const radioChange = (event) => {
    setGender(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      fname,
      lname,
      email,
      number,
      gender,
      date,
      password,
      confirmpassword
    );
  };

  return (
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0 p-4">
                <div className="col-xl-6 mt-5">
                  <img
                    src={studimg}
                    alt="Student photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase d-flex justify-content-center">
                      Student registration form
                    </h3>

                    <form onSubmit={submitForm}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              value={fname}
                              onChange={toggleFirstName}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              value={lname}
                              onChange={toggleLastName}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example97"
                            >
                              Email ID
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              className="form-control form-control-lg"
                              value={email}
                              onChange={toggleEmail}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example98"
                            >
                              Contact No
                            </label>
                            <input
                              type="text"
                              id="form3Example98"
                              className="form-control form-control-lg"
                              value={number}
                              onChange={toggleContactNumber}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline mb-4">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4 mr-4 ml-4 mt-3">
                              <label
                                className="form-check-label"
                                htmlFor="maleGender"
                              >
                                Male
                              </label>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="maleGender"
                                value="male"
                                checked={gender === "male"}
                                onChange={radioChange}
                              />
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4 mr-4 ml-4 ">
                              <label
                                className="form-check-label"
                                htmlFor="femaleGender"
                              >
                                Female
                              </label>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="femaleGender"
                                value="female"
                                checked={gender === "female"}
                                onChange={radioChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-outline mb-4"
                          style={{ width: "50%" }}
                        >
                          <label className="form-label" htmlFor="form3Example9">
                            Date Of Birth
                          </label>
                          <input
                            type="date"
                            id="form3Example9"
                            className="form-control form-control-lg"
                            value={date}
                            onChange={toggleDate}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example8"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example8"
                              className="form-control form-control-sm"
                              style={{ width: "100%" }}
                              value={password}
                              onChange={togglePassword}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example2"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="form3Example2"
                              className="form-control form-control-sm"
                              style={{ width: "100%" }}
                              value={confirmpassword}
                              onChange={toggleConfPassword}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="mb-2 pb-lg-2" style={{ color: "#393f81" }}>
                        Already a User?{" "}
                        <Link to="/login" style={{ color: "#393f81" }}>
                          Login here
                        </Link>
                      </p>

                      <div className="d-flex justify-content-start pt-3">
                        <button
                          type="submit"
                          className="btn btn-secondary btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
