import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { blue1, blue2, blue3 } from "../../Constants/Colors";
import { sectionData } from "../../Constants/Data";

const Bar = styled.div`
  display: flex;
  width: 80vw;
  background: ${blue3};
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 8px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  font-size: 0.8rem;
  outline: none;
  background: ${blue2};

  &:hover {
    background: ${blue1};
  }
`;

const NavBar = (props) => {
  const [users, setUsers] = useState([]);
  const [showObject, setShowObject] = useState(false);

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    console.log("On props change");
  }, [props]);

  return (
    <Bar>
      {sectionData.map(item => (
        <Tab key={item.section}>
          <h1>{item.title}</h1>
        </Tab>
      ))}
    </Bar>
  );
};

export default NavBar;
