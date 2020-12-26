import React, { useEffect, useState } from "react";
/*
  Not an actual component; just for copy/pasting
*/
const Template = (props) => {
  const [ users, setUsers ] = useState([]);
  const [ showObject, setShowObject ] = useState(false);

  useEffect(() => {
    console.log('Component did mount')
  }, []);

  useEffect(() => {
    console.log('On props change')
  }, [props]);

  return (
    <div>
      
    </div>
  );
};

export default Template;
