import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../../assets/images/login_page.jpg";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this useeffect is to check the which latest value which are getting or not for dev purpose
  //   useEffect(() => {
  //     console.log("Email updated:", email);
  //   }, [email]);
  //   useEffect(() => {
  //     console.log("Password updated:", password);
  //   }, [password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
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
                    <form>
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
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
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
