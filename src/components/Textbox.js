import React from 'react';
import styled from 'styled-components';
//styled component takes the div and applies styles

//anything in the tick marks is our styling that will be applied to .div
const Styleddiv = styled.div `
    height: 200px;
    background-color: #394D6B;
    color: white;
    font-size: 30px;
    padding-top: 30px;
    text-align: center

`



export default function Textbox(props) {
    return (
        <Styleddiv>
            {props.children}
        </Styleddiv>
    )
}