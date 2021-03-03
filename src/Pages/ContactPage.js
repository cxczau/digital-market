import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  Card,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMoreIcon";
import { makeStyles } from "@material-ui/core/styles";
import { aboutLinks, sampleText, services } from "../Constants/Data";
import { SectionEnum } from "../Constants/Data";
import FilledIcon from "../Components/FilledIcon";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-form": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    padding: 10,
  },
}));

const HrefContainer = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0px 10px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  > * {
    margin: 0px 10px;
  }
`;

const Subtitle = styled.div`
  position: relative;
  width: 30vw;
  height: 100%;
`;

const ContactPage = (props) => {
  const [users, setUsers] = useState([]);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  // Material UI
  const classes = useStyles();

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  return (
    <div>
      <h1>Koko Media</h1>
      <h3>Contact Us</h3>

      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <FilledIcon path={item.mdi} />
          </a>
        ))}
      </HrefContainer>

      <ContactContainer>
        <Card className={classes.card}>
          <p>
            {" "}
            For more info about the services we provide,{" "}
            <a onClick={()=>props.setCurrentSection(SectionEnum.services)}>click here</a>
            {"! "}
          </p>

          <form className={classes.form} noValidate autoComplete="off">
            <FormGroup>
              <TextField
                required
                id="standard-required"
                label="Email Address"
              />

              <TextField id="standard" label="Contact Name" />

              <TextField id="standard" label="Company" />

              <TextField id="standard" label="Mobile" />

              <TextField
                id="standard-helperText"
                label="Social Media Link"
                helperText="Facebook, Instagram, etc."
              />
            </FormGroup>

            <Accordion>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Services requested:</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>Note which services you are interested in</p>
                <div>
                  <FormLabel component="label">Services</FormLabel>
                  <FormGroup aria-label="position" row>
                    {services.map((group, key) => (
                      <div key={key}>
                        <FormHelperText>{group.group}</FormHelperText>

                        {group?.subservice?.map((service, index) => (
                          <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label={service.name}
                            labelPlacement="end"
                            key={`checkbox-${key}-${index}`}
                          />
                        ))}
                      </div>
                    ))}
                  </FormGroup>
                </div>
              </AccordionDetails>
            </Accordion>
          </form>
        </Card>
      </ContactContainer>
    </div>
  );
};

export default ContactPage;
