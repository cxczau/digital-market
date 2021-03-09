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
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { aboutLinks, services } from "../Constants/Data";
import { SectionEnum } from "../Constants/Data";
import { mdiCards } from "@mdi/js";
import { Link } from "react-router-dom";

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
  servicesDrawer: {
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

const WorkPage = (props) => {
  const [emailBody, setEmailBody] = useState({});
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
  //        TODO: spinner and 
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
            {/* TODO: netlify form handling */}
            {/* https://docs.netlify.com/forms/setup/#javascript-rendered-forms   */}
            {/* <input type="hidden" name="form-name" value="contact-form" /> */}

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

            <FormGroup>
              <TextField
                id="outlined-multiline-static"
                label="Message:"
                multiline
                rows={4}
                variant="outlined"
              />
            </FormGroup>

            <button type="submit">Send</button>

            <Button onClick={() => setDrawerOpen(true)}>Services</Button>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <div
                role="presentation"
                // onClick={() => setDrawerOpen(false)}
                // onKeyDown={() => setDrawerOpen(false)}
                className={classes.card}
              >
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

                      <Divider />
                    </div>
                  ))}
                </FormGroup>
              </div>
            </Drawer>
          </form>
        </Card>
      </ContactContainer>
    </div>
  );
};

export default WorkPage;
