import * as React from "react";
//import { Container, Row, Col} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from "react-calendar";
import 'bootstrap/dist/css/bootstrap.css';
import "react-calendar/dist/Calendar.css";

export default function Register() {
  return (
    <div>
      <Calendar></Calendar>
      <form>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Choose your time
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">9 </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </div>
  );
}

//
