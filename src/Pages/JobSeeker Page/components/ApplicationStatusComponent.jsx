import { Box, Container } from '@mui/material';
import React from 'react'

import Cards from './Cards';

import RightSideNavbar from "./RightTopMenu"

const ApplicationStatusComponent = () => {
  return (
    <div>
      <Box>
        <RightSideNavbar />  
      </Box>
      <Container>
        
        <Cards />
      </Container>
      
    </div>
  )
}

export default ApplicationStatusComponent

      