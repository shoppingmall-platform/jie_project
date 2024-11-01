import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, Divider } from '@mui/material';
import Agreement from '../component/Agreement';
import InputSignup from '../component/InputSignup';

const steps = ['약관동의', '정보입력', '가입완료'];

export default function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAgreementChange = (isChecked) => {
    setIsAgreed(isChecked);
  };

  const handleValidityChange = (isValid) => {
    setIsValidInput(isValid);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography align='center'>회원가입</Typography>
      <Divider sx={{marginBottom:3, }} />
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        <Box sx={{ margin:2, height:'auto'}}>
          {activeStep === 0 && <Agreement onAgreementChange={handleAgreementChange} />}
          {activeStep === 1 && <InputSignup onValidityChange={handleValidityChange} />}
          {activeStep === 2 && <Typography>가입이 완료되었습니다!</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} disabled={(activeStep === 0 && !isAgreed) || (activeStep === 1 && !isValidInput)}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
    </Box>
  );
}
