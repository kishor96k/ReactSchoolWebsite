/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import studimg from "../../../assets/images/studentone.jpg";
import { Link } from "react-router-dom";

export default function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // error validation main object
  const [errors, setErrors] = useState("");
  //for button
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      !validateFirstName(firstname) &&
      !validateLastName(lastname) &&
      !validateEmail(email) &&
      !validateContactNumber(number) &&
      !validateGender(gender) &&
      !validateDate(date) &&
      !validatePassword(password) &&
      !validateConfirmPassword(confirmpassword);
    setIsFormValid(isValid);
  }, [
    firstname,
    lastname,
    email,
    number,
    gender,
    date,
    password,
    confirmpassword,
  ]);

  // firstname onchange
  const handleFirstNameChange = (event) => {
    const FirstNameValue = event.target.value;
    setFirstName(FirstNameValue);
    setErrors((previous) => ({
      ...previous,
      firstname: validateFirstName(FirstNameValue),
    }));
  };
  // lastname onchange
  const handleLastNameChange = (event) => {
    const LastNameValue = event.target.value;
    setLastName(LastNameValue);
    setErrors((previous) => ({
      ...previous,
      lastname: validateLastName(LastNameValue),
    }));
  };
  // email onchange
  const handleEmailChange = (event) => {
    const EmailValue = event.target.value;
    setEmail(EmailValue);
    setErrors((previous) => ({
      ...previous,
      email: validateEmail(EmailValue),
    }));
  };

  //contact number change
  const handleContactNumberChange = (event) => {
    const ContactNumberValue = event.target.value;
    setNumber(ContactNumberValue);
    setErrors((previous) => ({
      ...previous,
      number: validateContactNumber(ContactNumberValue),
    }));
  };

  //gender change
  const handleGenderChange = (event) => {
    const GenderValue = event.target.value;
    setGender(GenderValue);
    setErrors((previous) => ({
      ...previous,
      gender: validateGender(GenderValue),
    }));
  };

  // date change
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setDate(dateValue);
    setErrors((previous) => ({
      ...previous,
      date: validateDate(dateValue),
    }));
  };

  // passowrd change
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setErrors((previous) => ({
      ...previous,
      password: validatePassword(passwordValue),
    }));
  };
  //confirm password change
  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setErrors((previous) => ({
      ...previous,
      confirmpassword: validateConfirmPassword(confirmPasswordValue),
    }));
  };

  // First name validation
  const validateFirstName = (fname) => {
    if (!fname) {
      return "first name is required";
    } else if (!/^[a-zA-Z]{4,10}$/.test(fname)) {
      return "Ffirst name must be between 4 to 10 alphabetic characters";
    }
    return "";
  };

  // Last name validation
  const validateLastName = (lname) => {
    if (!lname) {
      return "last name is required";
    } else if (!/^[a-zA-Z]{4,10}$/.test(lname)) {
      return " last name must be between 4 to 10 alphabetic characters";
    }
    return "";
  };

  //Email validation
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
    return "";
  };

  //Contact Number Validation
  const validateContactNumber = (number) => {
    if (!number) {
      return "Number is required";
    } else if (!/^\d{10}$/.test(number)) {
      return "Please enter a 10-digit number";
    }
    return "";
  };

  // Gender Validation
  const validateGender = (gender) => {
    if (!gender) {
      return "Gender is required";
    }
    return "";
  };

  //DOB Validation
  const validateDate = (date) => {
    if (!date) {
      return "Date is required";
    }
    return "";
  };

  // Password Validation
  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 7 || password.length > 12) {
      return "Password must be between 7 to 12 characters";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number";
    }
    return "";
  };

  //Confirm Password Validation
  const validateConfirmPassword = (confirmpassword) => {
    if (!confirmpassword) {
      return "Confirm Password is required";
    } else if (confirmpassword !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  // on form submit
  const submitForm = (e) => {
    e.preventDefault();
    const emailerrors = validateEmail(email);
    const passworderrors = validatePassword(password);
    const firstnameerrors = validateFirstName(firstname);
    const lastnameerrors = validateLastName(lastname);
    const gendererrors = validateGender(gender);
    const dateerrors = validateDate(date);
    const contactNumbererrors = validateContactNumber(number);
    const confirmPassworderrors = validateConfirmPassword(confirmpassword);

    setErrors({
      email: emailerrors,
      password: passworderrors,
      firstname: firstnameerrors,
      lastname: lastnameerrors,
      gender: gendererrors,
      date: dateerrors,
      number: contactNumbererrors,
      confirmpassword: confirmPassworderrors,
    });
    if (
      emailerrors ||
      passworderrors ||
      firstnameerrors ||
      lastnameerrors ||
      gendererrors ||
      dateerrors ||
      contactNumbererrors ||
      confirmPassworderrors
    ) {
      return;
    }

    // Handle form submission
    console.log("Form submitted:", {
      email,
      password,
      firstname,
      lastname,
      gender,
      date,
      number,
      confirmpassword,
    });

    // Clear form fields
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setGender("");
    setDate("");
    setNumber("");
    setConfirmPassword("");
    setErrors({});
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
                              value={firstname}
                              onChange={handleFirstNameChange}
                            />
                            {errors.firstname && (
                              <div className="error text-danger">
                                {errors.firstname}
                              </div>
                            )}
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
                              value={lastname}
                              onChange={handleLastNameChange}
                            />
                            {errors.lastname && (
                              <div className="error text-danger">
                                {errors.lastname}
                              </div>
                            )}
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
                              onChange={handleEmailChange}
                            />
                            {errors.email && (
                              <div className="error text-danger">
                                {errors.email}
                              </div>
                            )}
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
                              type="number"
                              id="form3Example98"
                              className="form-control form-control-lg"
                              value={number}
                              onChange={handleContactNumberChange}
                            />
                            {errors.number && (
                              <div className="error text-danger">
                                {errors.number}
                              </div>
                            )}
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
                                onChange={handleGenderChange}
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
                                onChange={handleGenderChange}
                              />
                            </div>
                            {errors.gender && (
                              <div className="error text-danger">
                                {errors.gender}
                              </div>
                            )}
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
                            onChange={handleDateChange}
                          />
                          {errors.date && (
                            <div className="error text-danger">
                              {errors.date}
                            </div>
                          )}
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
                              onChange={handlePasswordChange}
                            />
                            {errors.password && (
                              <div className="error text-danger">
                                {errors.password}
                              </div>
                            )}
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
                              onChange={handleConfirmPasswordChange}
                            />
                            {errors.confirmpassword && (
                              <div className="error text-danger">
                                {errors.confirmpassword}
                              </div>
                            )}
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
                          disabled={!isFormValid}
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
