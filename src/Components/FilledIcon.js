import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";

const FilledIcon = styled(Icon)`
  flex-shrink: 0;
  box-sizing: content-box;
  width: 40px;
  height: 40px;
  color: white;
`;

// const FilledIcon = (props) => {
//   const [ users, setUsers ] = useState([]);
//   const [ showObject, setShowObject ] = useState(false);

//   // useEffect(() => {
//   //   console.log('Component did mount')
//   // }, []);

//   // useEffect(() => {
//   //   console.log('On props change')
//   // }, [props]);

//   return (
//     <div>
      
//     </div>
//   );
// };

export default FilledIcon;
