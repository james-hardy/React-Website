import React from "react";
import Textbox from "../components/Textbox";
import { Parallax } from "react-parallax";
import { Container, Row, Col } from "reactstrap";
import ReactTooltip from "react-tooltip";
import "./style.css";
import mac from "../assets/images/IMG_1531.jpeg";
import coffee from "../assets/images/IMG_1535.jpeg";
import gr from "../assets/images/gr2.jpeg";
import gr2 from "../assets/images/gr.jpeg";
import { NavLink } from "react-router-dom";
import SimpleAccordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";

const Mainpage = () => (
  <div>
    <Parallax bgImage={mac} alt="mac pic" strength={200}>
      <div className="firstimage">
        <div className="flexitem icon-click">
          <NavLink
            className="nav-link"
            activeClassName="active"
            isActive={() => window.location.pathname === "/"}
            to="/"
          >
            <i class="fas fa-home fa-3x" data-tip="Go to Home Page"></i>
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="active"
            isActive={() => window.location.pathname === "/album"}
            to="/album"
          >
            <i class="fas fa-th fa-3x" data-tip="See Projects"></i>
          </NavLink>

          <a href="#me">
            <i class="far fa-user fa-3x icon-click"></i>{" "}
          </a>
          <a href="#contact">
            <i class="far fa-envelope fa-3x"></i>
          </a>
        </div>
        {/* textbox starts here */}
        <div className="image">
          <div className="maindiv">
            <div className="mainimagetex">
              <p className="topIntro intro">Hello, My name is</p>
              <p className="topIntro name">Hector Diaz Jr</p>
              <p className="topIntro title">I am a Full Web Stack Developer!</p>
            </div>
          </div>
        </div>
        {/* put the line below right before the closing div */}
        <ReactTooltip place="top" type="dark" effect="float" />
      </div>
    </Parallax>

    <Textbox>projects components here</Textbox>
    <Parallax bgImage={coffee} alt="coffe pic" strength={200}>
      <div style={{ height: 600 }}></div>
    </Parallax>

    <Textbox>
      <div id="me">about me component</div>
    </Textbox>

    <Parallax bgImage={gr} alt="GR pic" strength={200}>
      <Container className="gr">
        <Row>
          <Col md="6" className="myPix">
            <img className="px" src="../assets/images/hd.jpeg"></img>
          </Col>

          <Col md="12" className="accordian">
            <SimpleAccordion />
          </Col>
        </Row>
      </Container>
    </Parallax>

    <Textbox>
      <div id="contact">about me component</div>
    </Textbox>
    <Parallax bgImage={gr2} alt="GR pic" strength={200}>
      <Container className="gr2">
        <Row>
          <Col md="12" className="contactform">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Parallax>
  </div>
);

export default Mainpage;
