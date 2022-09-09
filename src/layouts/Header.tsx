import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">G T M - Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="#" onClick={()=>{return false}}><Link className="nav-link" to="/">Home</Link> </Nav.Link>
              <Nav.Link href="#" onClick={()=>{return false}}><Link className="nav-link" to="/">Today's deals </Link></Nav.Link>
              <Nav.Link href="#" onClick={()=>{return false}}> <Link className="nav-link" to="/product/mobiles">Mobile</Link></Nav.Link>
              <Nav.Link href="#" onClick={()=>{return false}}><Link className="nav-link" to="/product/laptops">Laptops</Link></Nav.Link>
              <Nav.Link href="#" onClick={()=>{return false}}><Link className="nav-link" to="/product/clothing">Clothing</Link></Nav.Link>
              <Nav.Link href="#" onClick={()=>{return false}}><Link className="nav-link" to="/contact-us">Contact us</Link></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default Header;