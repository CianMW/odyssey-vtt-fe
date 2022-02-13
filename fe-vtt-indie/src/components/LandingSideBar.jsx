
const LandingSideBar = ({wid, closeSideNav}) => {
    return (
     <div className={`${wid} sideNav d-flex align-items-center`}>
        <div className="sideNavButton" onClick={closeSideNav} >

        <i className="unstyled bi bi-list" ></i>
        </div >
        <a href="#home-section" className="unstyled text-end" to="/">
        <h2 className="unstyled d-flex text-end">Get Started</h2>
        </a>
        <a href="#project_section" className="unstyled" to="/">
        <h2 className="unstyled">Player Portal</h2>
        </a>
        <a href="#about_section" className="unstyled" to="/">
        <h2 className="unstyled">About</h2>
        </a>
        <a href="#contact_section" className="unstyled" to="/">
        <h2 className="unstyled">Contact</h2>
        </a>
    </div>
     )
    };
export default LandingSideBar;