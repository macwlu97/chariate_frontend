import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './radioStep';
import InputWithIcon from './settingStep';

import { organizationActions } from '../../../_actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Wybierz rodzaj działalności', 'Ustawienia', 'Podsumowanie'];
}

function getStepContent(step, nameField, setNameField, shortNameField, setShortNameField, descriptionField, setDescriptionField, 
  value, setValue, city, setCity) {
  switch (step) {
    case 0:
      return <RadioButtonsGroup value={value} setValue={setValue}></RadioButtonsGroup>;
    case 1:
      return <InputWithIcon nameField={nameField} setNameField={setNameField} shortNameField={shortNameField} setShortNameField={setShortNameField} descriptionField={descriptionField} setDescriptionField={setDescriptionField} city={city} setCity={setCity}></InputWithIcon>;
    case 2:
      return `Oświadczam, że jestem założycielem ${value === 0 ? `fundacji` : `społeczności` }: ${nameField.namefield}, której skrótem flagowym jest ${shortNameField.shortNameField}, poświadczam że prawdą jest działalność ${value === 0 ? `fundacji` : `społeczności` } określona w podanym opisie: ${descriptionField.descriptionField} `;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const [value, setValue] = React.useState("fundation");
  const [city, setCity] = React.useState(1);

  const [nameField, setNameField] = React.useState("");
  const [shortNameField, setShortNameField] = React.useState("");
  const [descriptionField, setDescriptionField] = React.useState("");

  const dispatch = useDispatch()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    // console.log(steps)
    if (activeStep === 2) {
      var typeOption = undefined
      if (value === "fundation") {
        typeOption = 0
      } else if (value === "society"){
        typeOption = 1
      }
      var toJson = {
        name: nameField.namefield,
        sh_name: shortNameField.shortNameField,
        description: descriptionField.descriptionField,
        city_id: city,
        type: typeOption
      }
      dispatch(organizationActions.addOrganization(toJson))
      console.log(toJson)
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index, nameField, setNameField, shortNameField, setShortNameField, descriptionField, setDescriptionField, 
              value, setValue, city, setCity)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Powróć
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Dodaj' : 'Zatwierdź'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}