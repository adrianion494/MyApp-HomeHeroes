
import React from "react"
import Header from "../Components/Header"

import "./Auth.css"

export default function (props) {
    return (
        <><Header />
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>

                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password" />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </p>
                    </div>
                </form>
            </div></>
    )
}