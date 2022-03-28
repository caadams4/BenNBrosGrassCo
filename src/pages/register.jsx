import * as React from "react";
import { Navbar, Button, Container, Row ,Col  } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Register() {
  return (
    <div>
      <Calendar></Calendar>
      <p>
        <Container>
          <Row>
            <Col xs="6">
              Avalible Times: <br></br>
              Services:<br></br>
              Phone Numeber: <br></br>
              Email: <br></br>
              Address: <br></br>
            </Col>

            <Col className='sm'>
              #DROPDOWN#<br></br>
              #RADIO BUTTON#<br></br>
              #TEXTBOX#<br></br>
              #TEXTBOX#<br></br>
              #TEXTBOX#<br></br>
            </Col>
          </Row>
        </Container>
      </p>

    </div>
  );
}

//
