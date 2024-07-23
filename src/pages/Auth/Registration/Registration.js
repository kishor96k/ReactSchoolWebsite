/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import studimg from "../../../assets/images/studentone.jpg";
import { Link } from "react-router-dom";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    gender: "",
    date: "",
    password: "",
    confirmpassword: "",
  });

  // for all input filed errors
  const [errors, setErrors] = useState({});
  // for button disbale/able
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const {
      firstname,
      lastname,
      email,
      number,
      gender,
      date,
      password,
      confirmpassword
    } = formData;

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
  }, [formData]);

  // on change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // for all input fileds function validation
  const validateField = (name, value) => {
    const validationRules = {
      firstname: validateFirstName,
      lastname: validateLastName,
      email: validateEmail,
      number: validateContactNumber,
      gender: validateGender,
      date: validateDate,
      password: validatePassword,
      confirmpassword: validateConfirmPassword,
    };
    return validationRules[name] ? validationRules[name](value) : "";
  };

  // on first name change
  const validateFirstName = (fname) => {
    if (!fname) {
      return "First name is required";
    } else if (!/^[a-zA-Z]{4,10}$/.test(fname)) {
      return "First name must be between 4 to 10 alphabetic characters";
    }
    return "";
  };

  // on last name change
  const validateLastName = (lname) => {
    if (!lname) {
      return "Last name is required";
    } else if (!/^[a-zA-Z]{4,10}$/.test(lname)) {
      return "Last name must be between 4 to 10 alphabetic characters";
    }
    return "";
  };

  // on email change
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
    return "";
  };

  // on contact number change
  const validateContactNumber = (number) => {
    if (!number) {
      return "Number is required";
    } else if (!/^\d{10}$/.test(number)) {
      return "Please enter a 10-digit number";
    }
    return "";
  };

  // on gender check
  const validateGender = (gender) => {
    if (!gender) {
      return "Gender is required";
    }
    return "";
  };

  // date check (DOB)
  const validateDate = (date) => {
    if (!date) {
      return "Date is required";
    }
    return "";
  };

  // passowrd checking
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

  // password and confirmpassword matching
  const validateConfirmPassword = (confirmpassword) => {
    if (!confirmpassword) {
      return "Confirm Password is required";
    } else if (confirmpassword !== formData.password) {
      return "Passwords do not match";
    }
    return "";
  };

  // on submit form
  const submitForm = (e) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted:", formData);
      console.table(formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        gender: "",
        date: "",
        password: "",
        confirmpassword: "",
      });
      setErrors({});
    }
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
                      {[
                        {
                          name: "firstname",
                          label: "First name",
                          type: "text",
                        },
                        { name: "lastname", label: "Last name", type: "text" },
                        { name: "email", label: "Email ID", type: "text" },
                        { name: "number", label: "Contact No", type: "number" },
                        { name: "date", label: "Date Of Birth", type: "date" },
                        {
                          name: "password",
                          label: "Password",
                          type: "password",
                        },
                        {
                          name: "confirmpassword",
                          label: "Confirm Password",
                          type: "password",
                        },
                      ].map((field) => (
                        <div className="row" key={field.name}>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                htmlFor={field.name}
                              >
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                className="form-control form-control-lg"
                                value={formData[field.name]}
                                onChange={handleChange}
                              />
                              {errors[field.name] && (
                                <div className="error text-danger">
                                  {errors[field.name]}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
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
                                name="gender"
                                id="maleGender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleChange}
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
                                name="gender"
                                id="femaleGender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.gender && (
                              <div className="error text-danger">
                                {errors.gender}
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
