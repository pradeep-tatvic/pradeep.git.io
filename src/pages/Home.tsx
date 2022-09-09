import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import TodayItem from '../constants/today-deal.json';
import ProductList from '../constants/product-list.json';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const redirect = async (ele: any) => {
        const win = window as any;
       win.datalayer.push({
            'bookCategory': 'fiction',
            'bookTitle': 'Cien años de soledad',
            'bookAuthor': 'Gabriel García Márquez'
        })
        navigate(`/checkout/${ele.id}`, { replace: true });
    }
    return (
        <Container>
            <Row>
                <Col xs={12} className="display-3">
                    Welcome to G T M Shop
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h1 className="text-primary">Deal's of the Day</h1>
                    <Carousel className="text-center">
                        {
                            TodayItem.map((ele, index) => {
                                return (<Carousel.Item key={index}>
                                    <img
                                        width={250}
                                        height={300}
                                        src={ele.img}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="text-white bg-dark">{ele.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>)
                            })
                        }

                    </Carousel>
                </Col>
            </Row>
            <hr />
            <Row className="m-3">

                <h1 className="text-primary">Mobiles</h1>
                <div className="d-flex">
                    {
                        ProductList.map((ele,index) => {
                            return ele.category==='mobiles'? (
                                <Col xs={4} key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.img} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => redirect(ele)}>Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ):null
                        })
                    }
                </div>


            </Row>
            <hr />
            <Row className="m-3">

                <h1 className="text-primary">Laptops</h1>
                <div className="d-flex">
                    {
                        ProductList.map((ele, index) => {
                            return ele.category==='laptops'?(<Col xs={4} key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ele.img} />
                                        <Card.Body>
                                            <Card.Title>{ele.title}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => redirect(ele)}>Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ):null
                        })
                    }
                </div>


            </Row>

        </Container>
    )
}
export default Home;