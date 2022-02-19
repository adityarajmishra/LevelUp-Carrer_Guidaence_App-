import React from "react";
import "./About.css";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <div className="about">
        <h1>About Us</h1>
        <p> ❖ Hello, wishes from Hackyourcareer.com </p>
        <p>
          ❖ Hack Your Career is a <b>website</b> where you can build your
          career.through proper guidance & support of an &nbsp;
          <b>Expert/Counselor.</b>
        </p>
        <p>
          ❖ Here we support you to <b>build</b> your career according to your{" "}
          <strong>abilities And Interest.</strong>
        </p>
        <br />
        <h6>
          How to become a career counsellor in India? Career counsellor as a
          career is high in demand. Many professionals and passionate
          individuals from different domain want to become a career counsellor.
          If you are interested to become a career counsellor in India, follow
          these 5 steps -
        </h6>
        <ul>
          <li>LogIn</li>
          <li>Select Counselor</li>
          <li>Book Session according to your Time and Date</li>
          <li>
            Join Directly to the <b>Meeting</b>, with your Counselor 🙂
          </li>
        </ul>
        <hr />
        <LinkContainer to="/login">
          <Nav.Link>
            <button className="logBtn"> &nbsp; LogIn/Register</button>
          </Nav.Link>
        </LinkContainer>
      </div>
    </div>
  );
}
