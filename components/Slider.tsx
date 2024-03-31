'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'ramadan chaharo siyam',
    imgPath:
      'https://tse2.mm.bing.net/th?id=OIP.11pCJtDaQOGgzJS_IRxLAwHaE8&pid=Api&P=0&h=180',
  },
  {
    label: 'mekka',
    imgPath:
      'https://images2.alphacoders.com/538/538101.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://tse1.mm.bing.net/th?id=OIP.Kk08ffV_3jPaOcbF1O5TBwHaFj&pid=Api&P=0&h=180',
  },
  {
    label: 'kouds, ',
    imgPath:
      'https://tse2.mm.bing.net/th?id=OIP.N-khi7hoC9okgEDPhRWxuQHaFR&pid=Api&P=0&h=180',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box    sx={{ maxWidth: "100%", flexGrow: 1 ,position:"relative"}}>
     <div  className='bg-white z-100  h-32'>
     <h1 className='   font-bold   shadow-lg text-2xl absolute top-10 -right-20  w-full -translate-x-2/4 z-10  text-green-600'>موقع دار الحديث</h1>
     <h3 className=' absolute top-20  font-bold -right-40  text-xl w-full -translate-x-2/4 z-10 text-blue-500'>بمدينة  بركان بالمملكة المغربية حرسها الله</h3>
     </div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: "100%",                
                 overflow: 'hidden',
                  width: '100%',
                  objectFit:'cover',
                  displayPrint:'block'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;