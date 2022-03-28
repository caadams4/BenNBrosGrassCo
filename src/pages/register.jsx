import * as React from "react";
import {Navbar,Button,Col,} from 'reactstrap';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Register() {
  return (
    <div>
        
      <Calendar></Calendar>
      <p>
        Avalible Times: #DROPDOWN#<br></br>
        Services: #RADIO BUTTON#<br></br>
        Phone Numeber: #TEXTBOX#<br></br>
        Email: #TEXTBOX#<br></br>
        Address: #TEXTBOX#<br></br>
        
      
      </p>
      
      <Button>fffff</Button>
    </div>
        
    )
}

//