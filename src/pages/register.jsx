import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Register() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Calendar></Calendar>
          </Col>
        </Row>

        <Row>
          <Col>
            Avalible Times: <br></br>
            Services:<br></br>
            Phone Numeber: <br></br>
            Email: <br></br>
            Address: <br></br>
          </Col>

          <Col>
            #DROPDOWN#<br></br>
            #RADIO BUTTON#<br></br>
            #TEXTBOX#<br></br>
            #TEXTBOX#<br></br>
            #TEXTBOX#<br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//
