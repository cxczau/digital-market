import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
/**
 * Not an actual component; just for copy/pasting when writing new components
 */
const CheckboxGroup = (props) => {
  const [ users, setUsers ] = useState([]);
  const [ showObject, setShowObject ] = useState(false);

  // useEffect(() => {
  //   console.log('Component did mount')
  // }, []);

  // useEffect(() => {
  //   console.log('On props change')
  // }, [props]);



  return (
    <div>
      <Form.Check type='checkbox' label="yo"/>
    </div>
      
    
  );
};

export default CheckboxGroup;
