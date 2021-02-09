import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * Simple radio group using React-Bootstrap
 * @param {*} options: options to be rendered in the group
 * @param {*} title: title for the component
 */
const RadioGroup = (props) => {
  const [active, setActive] = useState(0);

  return (
    <Form.Group>
      <Form.Label>{props?.title}</Form.Label>

      {props.options.map((option, index) => (
        <Form.Check
          type="radio"
          id={`custom-inline-radio-${index}`}
          label={option}
          onClick={() => setActive(index)}
          key={index}
          checked={active === index}
          inline
          readOnly
        />
      ))}
    </Form.Group>
  );
};

export default RadioGroup;
