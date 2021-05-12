import React from 'react';
import Textbox from '../components/Textbox';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'reactstrap';
import Typography from "@material-ui/core/Typography";
import './style.css'
import mac from '../assets/images/IMG_1531.jpeg';
import coffee from '../assets/images/IMG_1535.jpeg';
import gr from '../assets/images/gr2.jpeg';
import { NavLink } from 'react-router-dom';




const Mainpage = () => (

    <div>
    <Parallax bgImage={mac} alt = 'mac pic' strength={200}>
        <div className="flexitem">
        <NavLink 
                className = "nav-link"
                activeClassName = "active"
                isActive = { () => window.location.pathname === "/"}
                to = '/'
            >
            <i class="fas fa-home fa-2x"></i>
            </NavLink>
            
            <NavLink 
                className = "nav-link"
                activeClassName = "active"
                isActive = { () => window.location.pathname === "/album"}
                to = '/album'
            >
            <i class="fas fa-th"></i>
            </NavLink>
            
            <a href = "#contact" ><i class="far fa-user"></i> </a> 
            <i class="far fa-envelope"></i>
        </div>
        <div className="image">
        <Typography
              component="h4"
              variant="h5"
              align="left"
              color="textSecondary"
              gutterBottom
            >
              Hello, My name is
            </Typography>
       
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hector Diaz Jr
            </Typography>
            <Typography
              variant="h5"
              align="right"
              color="textSecondary"
              paragraph
            >
              I am a Full Web Stack Developer!
            </Typography>
        </div>

    </Parallax>
    <Textbox>
        projects components here
    </Textbox>
    <Parallax bgImage={coffee} alt = 'coffe pic' strength={200}>
        <div style={{height: 600}}>

        </div>

    </Parallax>
    <Textbox>
        {/* <Projects /> */}
    </Textbox>

    <Parallax bgImage={gr} alt = 'GR pic' strength={200}>
        <div style={{height: 600}}>

        </div>

    </Parallax>
    <Textbox>
        <div id="contact">
        about me component
        </div>
        <img className="myPix" src="../assets/images/hd.jpeg"></img>
    </Textbox>
    </div>




);

export default Mainpage


//github icon
//<i class="fab fa-github"></i>

//linkedin icon
//<i class="fab fa-linkedin"></i>

