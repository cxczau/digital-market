import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  Button,
  Drawer,
  List,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { aboutLinks, services } from "../Constants/Data";
import { SectionEnum } from "../Constants/Data";

// EMAILJS_USER_ID=user_f2C3T8y77xDTsGloL6DP6
// EMAILJS_API_KEY=0477e6882b08e867fc07362b6f4aca97

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
    borderRadius: 20,
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
  const [emailBody, setEmailBody] = useState({});
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [error, setError] = useState(false);

  // Material UI
  const classes = useStyles();

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  const handleSubmit = () => {
    let formattedEmailBody = { services: [] };

    Object.keys(emailBody).map((item) => {
      if (emailBody[item] === true) {
        formattedEmailBody.services.push(item);
      } else if (emailBody[item]) {
        formattedEmailBody[item] = emailBody[item];
      }
    });

    // const formattedEmailBody = JSON.stringify(emailBody)
    console.log(formattedEmailBody);
    console.log(window);

    // window.emailjs
    //   .send(
    //     "service_tcsbbtt",
    //     "template_2kmxk3x",
    //     formattedEmailBody,
    //     process.env.EMAILJS_USER_ID
    //   )
    //   .then((res) => {
    //     console.log("Email successfully sent!");
    //   })
    //   // Handle errors here however you like, or use a React error boundary
    //   .catch((err) =>
    //     console.error(
    //       "Oh well, you failed. Here some thoughts on the error that occured:",
    //       err
    //     )
    //   );
  };

  return (
    <div>
      <h3>Contact Us</h3>

      <ContactContainer>
        <Card className={classes.card}>
        <p>
            {" "}
            For more info about the services we provide,{" "}
            <Link to="/services">click here</Link>
            {"! "}
          </p>

          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            id="contact-form"
            netlify
          >
            <FormGroup>
              <TextField
                required
                id="standard-required"
                label="Email Address"
                error={error}
                helperText={error && "Incorrect email address"}
                onChange={(event) => {
                  setEmailBody({ ...emailBody, toAddress: event.target.value });
                }}
              />

              <TextField
                id="standard"
                label="Contact Name"
                onChange={(event) => {
                  setEmailBody({ ...emailBody, toName: event.target.value });
                }}
              />

              <TextField
                id="standard"
                label="Company"
                onChange={(event) => {
                  setEmailBody({ ...emailBody, toCompany: event.target.value });
                }}
              />

              <TextField
                id="standard"
                label="Mobile"
                onChange={(event) => {
                  setEmailBody({ ...emailBody, toMobile: event.target.value });
                }}
              />

              <TextField
                id="standard-helperText"
                label="Social Media Link"
                helperText="Facebook, Instagram, etc."
                onChange={(event) => {
                  setEmailBody({
                    ...emailBody,
                    socialMedia: event.target.value,
                  });
                }}
              />
            </FormGroup>

            <input
              type="button"
              value="Submit"
              className="btn btn--submit"
              onClick={() => handleSubmit()}
            />

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Services requested:</p>
              </AccordionSummary>

              <AccordionDetails>
                <div>
                  <FormGroup aria-label="position" row>
                    <FormLabel component="label">
                      Note which services you are interested in
                    </FormLabel>
                  </FormGroup>

                  <FormGroup aria-label="position" row>
                    {services.map((group, key) => (
                      <div key={key}>
                        <FormHelperText>{group.group}</FormHelperText>

                        {group?.subservice?.map((service, index) => (
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={service.name}
                            labelPlacement="end"
                            key={`checkbox-${key}-${index}`}
                            onChange={(event) =>
                              setEmailBody({
                                ...emailBody,
                                [service.name]: event.target.checked,
                              })
                            }
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
