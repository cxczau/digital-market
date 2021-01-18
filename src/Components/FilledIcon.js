import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Icon from '@mdi/react';

const FilledIcon = (props) => {
  const [ users, setUsers ] = useState([]);
  const [ showObject, setShowObject ] = useState(false);

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);

  return (
    <Icon>
      
    </Icon>
  );
};

export default FilledIcon;
