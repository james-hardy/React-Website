import React from 'react';
import Textbox from '../components/Textbox';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'reactstrap';
import mac from '../assets/images/IMG_1531.jpeg'
import './style.css'




const Mainpage = () => (

    <div>
    <Parallax bgImage={mac} alt = 'pic' strength={200}>
        <div className="flexitem">
            <h3>icon one</h3>
            <h3>icon two</h3>
            <h3>icon three</h3>
        </div>
        <div className="image">
            <div className="macpxtext">Hello</div>
        </div>

    </Parallax>
    <Textbox>
        projects components here
    </Textbox>
    <Parallax bgImage='https://info.thinkfun.com/hubfs/coding%201.jpg' strength={500}>
        <div style={{height: 600}}>

        </div>

    </Parallax>
    <Textbox>
        about me component
    </Textbox>
    </div>




);

export default Mainpage