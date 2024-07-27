/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import contactme from "../../assets/images/contact_me.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // for all the erros
  const [errors, setErrors] = useState({});
  // button disabled/enabled
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, subject, message } = formData;
    const isValid =
      !validateName(name) &&
      !validateEmail(email) &&
      !validateSubject(subject) &&
      !validateMessage(message);
    setIsFormValid(isValid);
  }, [formData]);

  // on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // add fileds validation
  const validateField = (name, value) => {
    const validationRules = {
      name: validateName,
      email: validateEmail,
      subject: validateSubject,
      message: validateMessage,
    };
    return validationRules[name] ? validationRules[name](value) : "";
  };

  // name validation
  const validateName = (name) => {
    if (!name) return "Name is required";
    if (!/^[a-zA-Z]{4,10}$/.test(name))
      return "Name must be between 4 to 10 alphabetic characters";
    return "";
  };

  // email validation
  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is not valid";
    return "";
  };

  // subject validation
  const validateSubject = (subject) => {
    if (!subject) return "Subject is required";
    return "";
  };

  // message validation
  const validateMessage = (message) => {
    if (!message) return "Message is required";
    return "";
  };

  //on form submit
  const formSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const subjectError = validateSubject(subject);
    const messageError = validateMessage(message);

    if (nameError || emailError || subjectError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        subject: subjectError,
        message: messageError,
      });
    } else {
      alert("Form submitted", { name, email, subject, message });
      console.table({ name, email, subject, message });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setIsFormValid(false);
    }
  };

  return (
    <>
      <section className="h-100">
        {/* contact form */}
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0 p-4">
                  <div className="col-xl-6 mt-5">
                    <img
                      src={contactme}
                      alt="Contact me"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                        width: "70%",
                        height: "90%",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase d-flex justify-content-center">
                        Get in touch!
                      </h3>
                      <form onSubmit={formSubmit}>
                        {["name", "email", "subject", "message"].map(
                          (field) => (
                            <div className="row" key={field}>
                              <div className="form-outline mb-3">
                                <label className="form-label" htmlFor={field}>
                                  {field.charAt(0).toUpperCase() +
                                    field.slice(1)}
                                </label>
                                {field === "message" ? (
                                  <textarea
                                    id={field}
                                    name={field}
                                    cols={10}
                                    rows={5}
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    value={formData[field]}
                                  />
                                ) : (
                                  <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    value={formData[field]}
                                  />
                                )}
                                {errors[field] && (
                                  <div className="text-danger">
                                    {errors[field]}
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        )}
                        <div className="d-flex justify-content-start pt-3">
                          <button
                            type="submit"
                            disabled={!isFormValid}
                            className="btn btn-primary btn-lg ms-2"
                          >
                            Send Email
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
        {/* map location for School */}
        <div class="container mt-2 mb-2">
          <div class="row">
            <div class="col-md-12">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d950.3950466332747!2d75.9067687!3d17.6700316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7b94943059%3A0xd6d0e257b8fa073!2s02%2C%20Sidheshwar%20Peth%2C%20Solapur%2C%20Maharashtra%20413001!5e0!3m2!1sen!2sin!4v1722082868958!5m2!1sen!2sin"
                  style={{ border: 0, height: 400, width: "100%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
