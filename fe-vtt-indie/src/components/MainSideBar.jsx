import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../styleSheets/mainNavBarStyle.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setBasicAuth, setLoggedIn, setUser } from "../Actions"
const MainSideBar = ({wid, closeSideNav}) => {



    const currentState = useSelector(state => state)
    const dispatch = useDispatch()
  
    const navigate = useNavigate()
    
    const userLogOut = async () => {
      dispatch(setLoggedIn(false))
      dispatch(setUser(""))
       dispatch(setUser(""))
       await dispatch(setBasicAuth(null))
      navigate(`/`, {replace: true})
    }


    return (
     <div className={`${wid} sideNav d-flex align-items-center`}>
        <div className="sideNavButton" onClick={closeSideNav} >

        <i className="unstyled bi bi-list" ></i>
        </div >
        <Link to={`/${currentState.user.info._id}`}>
        <h2 className="unstyled d-flex text-end">Home</h2>
        </Link>
        <a href="#project_section" className="unstyled" to="/">
        <h2 className="unstyled">My Games</h2>
        </a>
        <a href="#about_section" className="unstyled" to="/">
        <h2 className="unstyled">New Game</h2>
        </a>
        <a href="#contact_section" className="unstyled" to="/">
        <h2 className="unstyled">Messages</h2>
        <h2 className="unstyled">Settings</h2>
        <div className="parent-width d-flex justify-content-center ">

        <div className="d-flex parent-width rounded justify-content-around button-red glow" onClick={e => userLogOut()}><span>Logout</span><i class="bi bi-box-arrow-right"></i></div>
        </div>
        </a>
    </div>
     )
    };
export default MainSideBar;