import { Navbar, Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="text-white ml-5 mx-auto">

        <Row>
          <Col xm={3}>
            <h1>G T M Store</h1>
          </Col>

        </Row>
        <Row>
          <Col xm={12}>
        <small>© 2022</small>
          </Col>
          
        </Row>
      </Container>
    </Navbar>
  )
}
export default Footer