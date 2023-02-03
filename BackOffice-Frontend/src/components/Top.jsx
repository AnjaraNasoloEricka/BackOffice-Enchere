import { Component } from "react";


const IconMain = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="250.977" height="43.239" viewBox="0 0 113.977 43.239">
        <defs>
            <linearGradient id="linear-gradient" x1="0.382" y1="0.126" x2="0.689" y2="0.794" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#1765fd"/>
            <stop offset="1" stop-color="#4fcb8d"/>
            </linearGradient>
        </defs>
        <g id="Logo" transform="translate(-25.023 -52.988)">
            <g id="LOgo-2" data-name="LOgo" transform="translate(-311.956 76.918) rotate(-45)">
            <g id="Ñëîé_1" data-name="Ñëîé 1" transform="translate(238.714 236.72)">
                <path id="Path_1" data-name="Path 1" d="M766.507,805.281l-3.537-7.1L756,807.734l.132.3H764.8A1.9,1.9,0,0,0,766.507,805.281Z" transform="translate(-736.472 -777.178)" fill="#4fcb8d"/>
                <rect id="Rectangle_13" data-name="Rectangle 13" width="1.148" height="11.434" transform="translate(26.93 21.178) rotate(37)" opacity="0.47"/>
                <path id="Path_3" data-name="Path 3" d="M249.572,294.478l2.736-3.458a11.448,11.448,0,0,0,.757-1.114c.225-.361.471-.771.735-1.227q.083.32.184.643a13.4,13.4,0,0,0,.527,1.407l1.411,3.15,7.107-9.614-1.843-3.653,9.437-11.316a1.812,1.812,0,0,0-1.418-2.966h-9.253l-2.356,3.243a15.776,15.776,0,0,0-1.029,1.545q-.163.285-.3.565-.139-.442-.3-.878c-.2-.548-.415-1.1-.645-1.644l-1.3-2.831h-.452l-6.824,9.23,1.974,3.863L238.476,291.5a1.811,1.811,0,0,0,1.408,2.978Z" transform="translate(-238.044 -265.178)" fill="url(#linear-gradient)"/>
                <rect id="Rectangle_25" data-name="Rectangle 25" width="1.148" height="11.434" transform="translate(15.67 1.152) rotate(37)" opacity="0.47"/>
                <path id="Path_2" data-name="Path 2" d="M332.053,236.06H322.11a1.9,1.9,0,0,0-1.7,2.761l3.935,7.8Z" transform="translate(-318.076 -237.06)" fill="#1765fd"/>
            </g>
            </g>
            <text id="Joxi" transform="translate(72 85)" fill="#292d32" font-size="30" font-family="Poppins-Black, Poppins" font-weight="800"><tspan x="0" y="0">Enchere</tspan></text>
        </g>
        </svg>

    )
}

const maximizeIcon = () => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g id="maximize" transform="translate(-748 -316)">
        <g id="maximize-3">
        <path id="Vector" d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z" transform="translate(750 318)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Vector-2" data-name="Vector" d="M12,0,0,12" transform="translate(754 322)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Vector-3" data-name="Vector" d="M4,4V0H0" transform="translate(762 322)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Vector-4" data-name="Vector" d="M0,0V4H4" transform="translate(754 330)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(748 316)" fill="none" opacity="0"/>
        </g>
    </g>
    </svg>);


}


class Top extends Component{
    render(){
        return(
            <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
            <div className="navbar-container d-flex content">
                <div className="bookmark-wrapper d-flex align-items-center">
                    <ul className="nav navbar-nav d-xl-none">
                        <li className="nav-item"><a className="nav-link menu-toggle" href="#">Menu</a></li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item d-none d-lg-block"><a className="nav-link nav-link-style"><i className="ficon" data-feather="moon"></i></a></li>
                    </ul>
                </div>
                <ul className="nav navbar-nav align-items-center ms-auto">
                    <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder">Administrateur</span><span className="user-status">Admin</span></div><span className="avatar"><img className="round" src={require("../assets/images/portrait/small/avatar-s-11.jpg")} alt="avatar" height="40" width="40"/><span className="avatar-status-online"></span></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a className="dropdown-item" href="#"><i className="me-50" data-feather="user"></i> Profile</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="mail"></i> Inbox</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="check-square"></i> Task</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="message-square"></i> Chats</a>
                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="me-50" data-feather="settings"></i> Settings</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="credit-card"></i> Pricing</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="help-circle"></i> FAQ</a><a className="dropdown-item" href="#"><i className="me-50" data-feather="power"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>    
        );
    };
}

export default Top;