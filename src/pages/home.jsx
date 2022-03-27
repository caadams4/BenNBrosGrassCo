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
          <h3 classname='text-center'><b>What we offer:</b><hr></hr></h3>
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
          <h3><b>Who we are:</b><hr></hr></h3>
            Three bothers. The boss: a middle school kid<br></br>
            with a passion for the grass, accompanied by<br></br>
            his three student-veteran brothers. We are of<br></br>
            the belief that an allowance is no way to teach<br></br> 
            a young person to fair in the world today. 
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
