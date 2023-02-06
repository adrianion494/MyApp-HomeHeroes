import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import './Register.css';

function Register() {
    return (
        <><Header /><div>
            <div className="clearfix">
                <nav className="header-nav-r">
                    <Link exact className="header-nav-link-r" to="/rh">Register as handyman
                    </Link>
                </nav>
                <nav className="header-nav-ru">
                    <Link exact className="header-nav-link-r" to="/ru">Register as user
                    </Link>
                </nav>
            </div>
        </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default Register;