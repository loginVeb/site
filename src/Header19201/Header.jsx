import React from 'react';
import img from './img/header1.png';
import styled from 'styled-components';


const SHeader = styled.header`
  grid-area: 1/1/2/13;
   
  display: grid;
  grid-template-columns:repeat(12, 8.333%); 
  grid-template-rows:repeat(12, 8.333%); 
  background-image: url(${img});
  background-size:cover;
  /* border: solid 1px blue; */

`


const Header = () => {
  return (
    <SHeader>
     
    </SHeader>

  );

};

export default Header;