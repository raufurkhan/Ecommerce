
import { Navbar, Nav, Container,Alert,Button } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import React from 'react';
import AuthContext from "../store/auth-context";

import { Link,useHistory } from 'react-router-dom';
import { useContext } from "react";

const Header=(props)=>{

  const ctx = useContext(AuthContext);
  const isLoggedIn=ctx.isLoggedIn;
  console.log(isLoggedIn);

  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove underlines from links
  };

  const history=useHistory();
if(!isLoggedIn){
  history.replace('/login');
}

const logoutHandler = () => {
  ctx.logout();
  localStorage.removeItem('token');
  //alert('Log out Succesfull')
  // Clear user session (e.g., remove tokens, clear local storage)
  // Redirect to the login page or perform any other necessary actions
  // Display a logout notification if needed
};


return(

<div>
<Navbar bg="dark"   variant="dark">
      <Container>
      
          <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home" style={linkStyle}>
              Home
            </Nav.Link>
            {isLoggedIn &&   
           <Nav.Link as={Link} to="/products" style={linkStyle}>
              Store
            </Nav.Link>}
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
            {!isLoggedIn &&
            <Nav.Link as={Link} to="/login" style={linkStyle}>
              Login
            </Nav.Link>}

            {isLoggedIn && <Button variant='light' onClick={logoutHandler}>Logout</Button>}
          </Nav>
          <HeaderCartButton onClick={props.onClick}/>
      </Container>
    </Navbar>
    <Alert className="bg-secondary text-white">
        <h1><Alert.Heading className="align-items-md-center">The Generics</Alert.Heading></h1>
      </Alert>
</div>
)

}
export default Header