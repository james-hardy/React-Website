import React from 'react';
import Textbox from '../components/Textbox';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'reactstrap';





const Mainpage = () => (

    <div>
    <Parallax bgImage='https://info.thinkfun.com/hubfs/coding%201.jpg' strength={200}>
        <div style={{height: 600}}>

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