import React from 'react';
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import "./UserRegister.css";



class UserRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var formData = new FormData(event.target);
        var data = {

            "firstName": formData.get("firstName"),
            "lastName": formData.get("lastName"),
            "email": formData.get("email"),
            "password": formData.get("password")

        };
        var self = this;

        fetch("http://localhost:8080/user-register",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (result) {
                if (result.success) {
                    self.setState({
                        message: "User register succesful!"
                    });
                } else {
                    self.setState({
                        message: "User not register!"
                    });
                }
            })
    }


    render() {
        return (

            <><div> <Header /></div><div
                className='UserForm'>
                <div className='H2Form'>
                    Register new user
                </div>
                <form onSubmit={this.handleSubmit}
                    action="">
                    {this.state.message &&
                        <div className='result'>
                            {this.state.message}
                        </div>}

                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastName" />
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" />
                    </div>

                    <button className='save_user'>Register</button>
                </form>
            </div>
                <div>
                    <Footer />
                </div>
            </>
        );
    }


}

export default UserRegister;
