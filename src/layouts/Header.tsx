import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">G T M - Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link href="/">Today's deals</Nav.Link>
              <Nav.Link href="/product/mobiles">Mobile</Nav.Link>
              <Nav.Link href="/product/laptops">Laptops</Nav.Link>
              <Nav.Link href="/product/clothing">Clothing</Nav.Link>
              <Nav.Link href="/">Contact us</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default Header;