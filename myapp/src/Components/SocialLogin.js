import "./SocialLogin.css"


function SocialLogin() {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };
    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    return (
        <div className="login">
            <div className="wrapper">
                <div className="left" onClick={google}>
                    <div className="google">
                        <img src="images/google.png" alt="" className="icon" />
                        Google
                    </div>
                    <div className="facebook" onClick={facebook}>
                        <img src="/images/facebook.png" alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="github" onClick={github}>
                        <img src="/images/github.png" alt="" className="icon" />
                        GitHub
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin;