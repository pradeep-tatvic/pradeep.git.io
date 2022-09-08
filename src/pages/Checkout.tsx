import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ModalComponent from "../components/ModalComponent";
import ItemList from '../constants/product-list.json'
const Checkout = () => {
    const { id } = useParams();
    const [showModal, setModalShow] = useState(false)
    const [details, setDetails] = useState<any>();
    useEffect(() => {
        getDetails()
    })
    const getDetails = () => {
        const item = ItemList.find((ele) => ele.id === id)
        setDetails(item)
    }

    return (
        <Container>
            {details && <div>
                <Row>
                    <Col xs={12} className="display-5">
                        Checkout for {details.category}
                    </Col>
                </Row>
                <hr />
                <Row className="m-4">
                    <Col xm={6} >
                        <img src={details.img} alt="sd" />
                    </Col>
                    <Col xm={6} >
                        <Row>
                            <Col xs={12} className="p-2"><h2>{details?.title}</h2></Col>
                            <Col xs={12} className="p-2"><h3>${details?.price}</h3></Col>
                            <Col xs={12} className="p-2">{details?.description}</Col>
                            <Col xs={12} className="p-2">
                                <Button onClick={() => setModalShow(true)}>Checkout now</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <ModalComponent
                show={showModal}
                details={details}
                onHide={() => setModalShow(false)}
            />
            </div>}
           
        </Container>

    )
}
export default Checkout