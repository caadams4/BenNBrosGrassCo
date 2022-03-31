import React, { useState } from "react";
//import { Container, Row, Col} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";

let services = [
  { service: "Grass Cutting", selected: false },
  { service: "Weed Whacking", selected: false },
  { service: "Yard Cleanup", selected: false },
  { service: "Dog Walking", selected: false },
];

export default function Register() {
  const [grass, setGrass] = useState(false);
  const [serviceValue, setServiceValue] = useState(services);

  const handleChange = (val) => setGrass(!val);

  return (
    <div>
      <Calendar></Calendar>

      <br></br>

      <Form>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Choose your time
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">8 A.M.</Dropdown.Item>
            <Dropdown.Item href="#/action-1">10 A.M.</Dropdown.Item>
            <Dropdown.Item href="#/action-2">12 P.M.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2 P.M.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">4 P.M.</Dropdown.Item>
            <Dropdown.Item href="#/action-3">6 P.M.</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <br></br>

        {services.map((s) => (
          <Form.Check type={"checkbox"} id={s.service} label={s.service} />
        ))}
      </Form>
    </div>
  );
}

//
