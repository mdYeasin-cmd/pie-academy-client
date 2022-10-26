import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './CourseCard.css';
import Button from 'react-bootstrap/Button';


const CourseCard = ({ course }) => {

    const { course_name, image, course_price, description, course_duration } = course;

    return (
        <Col>
            <Card>
                <Card.Img className="card-image" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        {course_name}
                    </Card.Title>
                    <Card.Text className="m-0 fw-semibold">
                        Course Duration: {course_duration}
                    </Card.Text>
                    <Card.Text className="m-0 fw-semibold">
                        Course Fee: ${course_price}
                    </Card.Text>
                    <Card.Text className="m-0 my-3">
                        {
                            description.length > 100 ?
                            description.slice(0, 80) + "..."
                            :
                            description
                        }
                    </Card.Text>
                    <Button variant="success w-100 fw-semibold">Know More</Button>
                </Card.Body>
            </Card>
        </Col>
        //     <Row xs={1} md={2} className="g-4">
        //   {Array.from({ length: 4 }).map((_, idx) => (

        //   ))}
        // </Row>  
    );
};

export default CourseCard;