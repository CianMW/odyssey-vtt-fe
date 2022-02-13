import { Col, Row } from "react-bootstrap"


const TopNav = ({openSideNav, loggedIn, display}) => {

 return(   
<Row className="m-0 p-0 d-flex header-background align-items-center text-nowrap " style={{display:display}}>
<Col sm={2} className=" fixed-top col-2 sideNavButton text-left" onClick={e => openSideNav()}>      
<i className="unstyled bi bi-list" ></i>
</Col>
<Col sm={8} className="z-on-top align-items-center justify-content-end parent-size p-0 m-0 col-8" style={{display: loggedIn}}>
    <div className="d-flex justify-content-center align-items-center">

    <img className="main-logo mt-4 mt-sm-2" src="/image-files/odyssey-logo.png" />
    </div>
</Col>
<Col className="col-2"></Col>
</Row>

)
}

export default TopNav