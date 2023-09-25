
import { Navbar, Nav, Container,Alert } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import React from 'react';
import AuthContext from "../store/auth-context";

import { Link } from 'react-router-dom';
import { useContext } from "react";

const Header=(props)=>{

  const ctx = useContext(AuthContext);
  const isLoggedIn=ctx.isLoggedIn;
  console.log(isLoggedIn);

  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove underlines from links
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
            <Nav.Link as={Link} to="/login" style={linkStyle}>
              Login
            </Nav.Link>
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