import { Modal, Button, Form } from "react-bootstrap";

const ModalComponent = (props: any) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Checkout form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Please fill the required details
                </p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="number" placeholder="Enter mobile number" />
                        <Form.Text className="text-muted">
                            We'll never share your mobile with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="adress">
                        <Form.Label>Address</Form.Label>

                        <Form.Control
                            as="textarea"
                            placeholder="Leave your address"
                        />
                    </Form.Group>
                    <h2 className="text-danger">${props.details.price}</h2>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                  
                </Form>
            </Modal.Body>
          
        </Modal>
    )
}
export default ModalComponent;