import React from 'react';
import styled from 'styled-components';
import NameUser from './nameUser/nameUser';

const SUsers = styled.div`
grid-area:1/1/13/5;
display:flex;
flex-direction:column;
background: #ceeecc ;
color:green;
font-family:DSMoster.woff ;
border: solid 3px #ecfffe;
`;

const Users = () => {
return (
<SUsers>
<NameUser name="Pavel" /> 
<NameUser name="Valentina" />
<NameUser name="Anatoliy"/>
<NameUser name="Valentina"/>
 </SUsers>
  );
};

export default Users;