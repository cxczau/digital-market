import React, { useEffect, useState } from "react";
// import { znrList, znrData } from "./Znr";
import { Button } from "react-bootstrap";
import { saveData } from "../../Utilities/Json";
import { jumble } from "../../Utilities/Numbers";

/**
 * Application to help solve a math problem
 * @param {*} props
 */
const CardListSorter = (props) => {
  const [pack, setPack] = useState([]);
  const [table, setTable] = useState([]);
  const [data, setData] = useState(znrData);
  const [focus, setFocus] = useState();
  const [showObject, setShowObject] = useState(false);

  const generatePackElement = znrList.map((item, index) => (
    <Button
      onClick={() => setPack([...pack, item])}
      disabled={pack.length > 2 || pack.includes(item)}
      type="primary"
      key={index}
      active={pack.includes(item)}
    >
      {item.name}
    </Button>
  ));

  const dataPackElement = data.map((item, index) => (
    <div key={index}>
      {item.map((card, key) => (
        <Button
          key={key}
          onClick={() => {
            jumble(data, setData, index);
            setFocus(card);
          }}
          active={focus?.name === card.name}
        >
          {card.name}
        </Button>
      ))}
    </div>
  ));

  return (
    <div>
      {!showObject && <div>{generatePackElement}</div>}

      {showObject && <div>{dataPackElement}</div>}

      <Button
        onClick={() => {
          setTable([...table, pack]);
          setPack([]);
        }}
      >
        Submit pack
      </Button>

      <Button
        onClick={() => {
          setPack([]);
        }}
      >
        Reset
      </Button>

      <Button
        onClick={() => {
          console.log(table);
        }}
      >
        view table
      </Button>

      <Button
        onClick={() => {
          saveData(table);
        }}
      >
        download table
      </Button>

      <Button
        onClick={() => {
          setShowObject(!showObject);
        }}
      >
        {showObject ? "view Card Add" : "view Data"}
      </Button>
    </div>
  );
};

export default CardListSorter;
