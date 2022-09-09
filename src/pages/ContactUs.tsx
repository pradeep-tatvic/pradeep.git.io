import { Button, Container, Form, Row } from "react-bootstrap"

const ContactUs = () => {
    return (
        <Container>
            <Row className="m-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject and topic" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SNED
                    </Button>
                </Form>
            </Row>

        </Container>
    )
}
export default ContactUs;
