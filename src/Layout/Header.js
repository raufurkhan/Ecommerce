
import { Navbar, Nav, Container,Alert } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";


const Header=(props)=>{


return(

<div>
<Navbar bg="dark"   variant="dark">
      <Container>
      
          <Nav className="mx-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
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