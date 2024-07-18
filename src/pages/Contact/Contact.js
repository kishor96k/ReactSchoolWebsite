/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import contactme from "../../assets/images/contact_me.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // for handling the all input validation
  const [errors, setErrors] = useState({});
  // button disabled/enabled
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      !validateName(name) &&
      !validateEmail(email) &&
      !validateSubject(subject) &&
      !validateMessage(message);
    setIsFormValid(isValid);
  }, [name, email, subject, message]);

  // for handling the all input validation

  // on name change
  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
    setErrors((previous) => ({
      ...previous,
      name: validateName(nameValue),
    }));
  };

  //validate name
  const validateName = (name) => {
    if (!name) {
      return "Name is required";
    } else if (!/^[a-zA-Z]{4,10}$/.test(name)) {
      return "Name must be between 4 to 10 alphabetic characters";
    }
    return "";
  };

  //on email change
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setErrors((previous) => ({
      ...previous,
      email: validateEmail(emailValue),
    }));
  };

  // validate email
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
    return "";
  };

  // on subject change
  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSubject(subjectValue);
    setErrors((previous) => ({
      ...previous,
      subject: validateSubject(subjectValue),
    }));
  };

  // validation for the subject
  const validateSubject = (subject) => {
    if (!subject) {
      return "Subject is required";
    }
    return "";
  };

  //on message change
  const handleMessageChange = (event) => {
    const messageValue = event.target.value;
    setMessage(messageValue);
    setErrors((previous) => ({
      ...previous,
      message: validateMessage(messageValue),
    }));
  };

  // validation for the message
  const validateMessage = (message) => {
    if (!message) {
      return "Message is required";
    }
    return "";
  };

  // on form submit
  const formSubmit = (event) => {
    event.preventDefault();
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
      console.log("Form submitted", { name, email, subject, message });
    }
  };

  return (
    <>
      <section className="h-100">
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
                        <div className="row">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="form-control form-control-lg"
                              onChange={handleNameChange}
                              value={name}
                            />
                            {errors.name && (
                              <div className="text-danger">{errors.name}</div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control form-control-lg"
                              onChange={handleEmailChange}
                              value={email}
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              id="subject"
                              className="form-control form-control-lg"
                              onChange={handleSubjectChange}
                              value={subject}
                            />
                            {errors.subject && (
                              <div className="text-danger">
                                {errors.subject}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="message">
                              Message
                            </label>
                            <textarea
                              id="message"
                              cols={10}
                              rows={5}
                              className="form-control form-control-lg"
                              onChange={handleMessageChange}
                              value={message}
                            />
                            {errors.message && (
                              <div className="text-danger">
                                {errors.message}
                              </div>
                            )}
                          </div>
                        </div>
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
      </section>
    </>
  );
};

export default Contact;
