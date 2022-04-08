import React from 'react';
// import img from './img/header.jpg';
import styled from 'styled-components';

const StyleH1 = styled.div`
grid-area: 2/3/10/11;
${'' /* border: solid 1px #93eae0; */}
font-size: 60px;
color: #6d3555;
text-align: center;

font-family: 'DSMosterWoff2';
${'' /* font-family: 'FonWoff2' */}
`

const H1 = () => {
  return (
    <StyleH1>Секретный чат Осташков</StyleH1>

  );

};
export default H1;