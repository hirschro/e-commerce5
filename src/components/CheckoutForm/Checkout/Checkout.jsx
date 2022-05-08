import React, { useState } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, Divider, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

//CircularProgress is a spinner when things are clicked on

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
 
  return (
    <>
      <div/>  {/*padding for navbar when using classes, to be sorted out*/}
        <main>
          <Paper>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </main>
      </>
    
  )
}

export default Checkout;