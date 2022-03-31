import React, { useState } from "react";
//import { Container, Row, Col} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Calendar from "react-calendar";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";

export default function Register() {
  const [grass, setGrass] = useState(false);

  const handleChange = (val) => setGrass(!val);

  return (
    <div>
      <Calendar></Calendar>

      <br></br>

      <form>
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
        
        <ToggleButtonGroup
          type="checkbox"
        >
          <ToggleButton id="tbg-btn-1" 
          grass={grass}
          onChange={handleChange}>
           Grass Cutting
          </ToggleButton>
        </ToggleButtonGroup>
      </form>
    </div>
  );
}

//
