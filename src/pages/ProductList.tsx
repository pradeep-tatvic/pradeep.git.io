import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import list from '../constants/product-list.json';

const ProductList = () => {
    const { category } = useParams();
    console.log(category);
    
    const navigate = useNavigate();

    const redirect = async (id: string) => {
        navigate(`/checkout/${id}`, { replace: true });
    }
    return (
        <Container>
            <Row>
                <Col xs={12} className="display-3">
                   {category} shop gallery
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h1 className="text-primary">{category} Deals</h1>
                    <Carousel className="text-center">
                        {
                        list.map((ele, index) => {
                                return ele.category===category? (<Carousel.Item key={index}>
                                    <img
                                        width={250}
                                        height={300}
                                        src={ele.img}
                                        alt="First slide"
                                    />
                                   
                                </Carousel.Item>):null
                            })
                        }

                    </Carousel>
                </Col>
            </Row>
            <hr />
            <Row className="m-3">

                <div className="d-flex">
                    {
                        list.map((ele, index) => {
                            return ele.category === category ? (
                                <Col xs={4} key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.img} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => redirect(ele.id)}>Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ) : null
                        })
                    }
                </div>


            </Row>
        </Container>
    )
}
export default ProductList;
