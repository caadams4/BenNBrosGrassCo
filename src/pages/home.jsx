import * as React from "react";
import {Navbar} from 'reactstrap';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Home() {
  return (
    <>
      <h1>Ben N' Bros Grass Co.</h1>
      <body>
        <p>
          <h3 classname='text-center'><b>Services Offered:</b><hr></hr></h3>
          Grass Cutting<br></br>
          Weed Wacking<br></br>
          Yard Cleanup<br></br>
          Dog walking<br></br>
        </p>
        <br></br>
        <div>Schedule your secices today!</div>
        <br></br>
        <Calendar></Calendar>
        <p>
          <h3><b>The Team:</b><hr></hr></h3>
          Ben Adams a.k.a <em>the boss</em><br></br>
          Charlie Adams<br></br>
          Beau Adams<br></br>
        </p>
        <br></br>
        <p>
          <h3><b>Contact Us</b><hr></hr></h3>
          Email:<br></br>
          Phone:
          
        </p>
        
      </body>
      <footer>
        
      
      </footer>
    </>
  );
}
