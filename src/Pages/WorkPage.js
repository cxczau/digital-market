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
import { aboutLinks, services, sampleText } from "../Constants/Data";
import { mdiCards } from "@mdi/js";
import { Link } from "react-router-dom";

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
      <h3>Our Work</h3>

      <text>{sampleText}</text>
    </div>
  );
};

export default WorkPage;
