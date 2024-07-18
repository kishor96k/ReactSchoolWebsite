import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../../assets/images/login_page.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  // this useeffect is to check the which latest value which are getting or not for dev purpose
  //   useEffect(() => {
  //     console.log("Email updated:", email);
  //   }, [email]);
  //   useEffect(() => {
  //     console.log("Password updated:", password);
  //   }, [password]);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setErrors((previous) => ({
      ...previous,
      email: validateEmail(emailValue),
    }));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setErrors((previous) => ({
      ...previous,
      password: validatePassword(passwordValue),
    }));
  };

  //email validation
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
    return "";
  };
  // password validation
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

  // on submit
  const loginsubmit = (e) => {
    e.preventDefault();
    const emailerrors = validateEmail(email);
    const passworderrors = validatePassword(password);
    if (emailerrors || passworderrors) {
      setErrors({
        email: emailerrors,
        password: passworderrors,
      });
    } else {
      console.log("form submitted", email, password);
      // above three methods for on submit fileds mustb be clear
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <section className="h-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0 p-4">
                <div className="col-md-6 col-lg-5 d-none d-md-block p-4">
                  <img
                    src={loginimg}
                    alt="login form"
                    className="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center p-4">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={loginsubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {errors.email && (
                          <div className="error text-danger">
                            {errors.email}
                          </div>
                        )}
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {errors.password && (
                          <div className="error text-danger">
                            {errors.password}
                          </div>
                        )}
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          {" "}
                          Login
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/registration" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
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
};

export default Login;
