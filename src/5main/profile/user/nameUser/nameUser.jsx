import React from 'react';
import styled from 'styled-components';

const SNameUser = styled.div`
grid-area:1/1/13/5;
background: #cefefe ;
color:green;
font-family:DSMoster.woff ;
border: solid 3px #ecfffe;
    &:hover {
            color: Black ;
        }

        &:active {
            color: #ffffff ;
        }

`;

const NameUser = (props) => {
return (
<SNameUser>
{props.name} 
 </SNameUser>
  );
};

export default NameUser;