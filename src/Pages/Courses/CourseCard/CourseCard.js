import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const CourseCard = ({ course }) => {

    const { course_name, image } = course;

    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{course_name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
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