import React from 'react';
import styled from 'styled-components';
import Users from './user/user.jsx'

const SDiologs = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:green;
font-family:DSMoster.woff ;
//border: solid 0.2px blue ;
`
 const Diologs = () => {
  return (
<SDiologs>
    <Users/>
 </SDiologs>
  );
};

export default Diologs;