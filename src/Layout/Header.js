
import { Navbar, Nav, Container,Alert } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import React from 'react';

import { Link } from 'react-router-dom';

const Header=(props)=>{



  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove underlines from links
  };

return(

<div>
<Navbar bg="dark"   variant="dark">
      <Container>
      
          <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" style={linkStyle}>
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={linkStyle}>
              Contact Us
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