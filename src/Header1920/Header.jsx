import React from 'react';
import img from './img/header.jpg';
import styled from 'styled-components';
import H1 from './H1/H1';

const StyleHeader = styled.header`
  grid-area: 1/1/3/13;
   
  display: grid;
  grid-template-columns:repeat(12, 8.333%); 
  grid-template-rows:repeat(12, 8.333%); 
  background-image: url(${img});
  background-size:cover;
  /* border: solid 1px blue; */

`


const Header = () => {
  return (
    <StyleHeader>
      <H1></H1>
    </StyleHeader>

  );

};

export default Header;