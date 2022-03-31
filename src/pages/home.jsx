import * as React from "react";
import {Navbar} from 'react-bootstrap';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Register from './register.jsx';


export default function Home() {
  return (
    <div>
      <h1>Ben N' Bros Grass Co.</h1>
      <body>
        <p>
          <h3 classname='text-center'><b>What we offer:</b><hr></hr></h3>
          Grass Cutting<br></br>
          Weed Wacking<br></br>
          Yard Cleanup<br></br>
          Dog walking<br></br>
        </p>
        <br></br>
        <div>Schedule your services today!</div>
        <br></br>
        <Register></Register>
        <br></br><br></br>
        <p>
          <h3><b>Who we are:</b><hr></hr></h3>
            Four bothers. The boss: a middle school kid<br></br>
            with a passion for the grass, accompanied by<br></br>
            his three student-veteran brothers. We are of<br></br>
            the belief that an allowance is no way to teach<br></br> 
            a young person to fare in the world today, and<br></br>
            that money must be rightly earned only in <br></br>
            equal proportion to their service.
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
    </div>
  );
}
