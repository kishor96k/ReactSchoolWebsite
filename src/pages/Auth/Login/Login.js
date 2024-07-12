import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >
            <div class="d-flex justify-content-center align-items-center vh-100">
                <form>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>
                    <div class="text-center">
                        <p>Not a member?
                            <Link to="/registration">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;