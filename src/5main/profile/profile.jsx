import React from 'react';
import styled from 'styled-components';


const SProfile = styled.div`
grid-area:1/1/13/13;
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: #cefefe ;
color:red;
font-family:DSMoster.woff ;
border: solid 1px #ec4662;
`
 const Profile = () => {
  return (
<SProfile> 
    Profile
 </SProfile>
  );
};

export default Profile;