import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './Profile.css'

function Profile(){
    return(
        <><div class="profile-container">
            <div class="sub-profile">
                <div class="profile-info">
                    <img src="/images/profile.jpg" alt="" />
                    <h3>Sebastian Andrei</h3>
                </div>
                <a href='#' class="sub-profile-link">
                    <img src="images/profile.png"></img>
                    <p>My profile</p>
                    <span>{'>'}</span>
                </a>
                <a href='#' class="sub-profile-link">
                    <img src="images/setting.png"></img>
                    <p>Settings & Privacy</p>
                    <span>{'>'}</span>
                </a>
                <a href='#' class="sub-profile-link">
                    <img src="images/help.png"></img>
                    <p>Help & Support</p>
                    <span>{'>'}</span>
                </a>
                <a href='/' class="sub-profile-link">
                    <img src="images/logout.png"></img>
                    <p>Logout</p>
                    <span>{'>'}</span>
                </a>
            </div>
        </div>
        
        </>




    )
}

export default Profile;