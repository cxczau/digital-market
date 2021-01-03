import React, { useEffect, useState } from "react";
import { saveData } from "../../Utilities/Json";
import ScryfallData from "../../Constants/ScryfallData.json";
import { Button, Toast } from "react-bootstrap";

const parseDatabase = (setShowToast) => {
  const fileName = "ScryfallData.json";

  let cardDb = [];

  ScryfallData.map((cardObject) => {
    if (
      (cardObject?.image_uris?.normal &&
      cardObject.legalities.commander === "legal") || cardObject.imageUri
    ) {
      const newCardObject = {
        name: cardObject.name,
        // legal: cardObject.legalities.commander === 'legal',
        imageUri: cardObject?.image_uris?.normal || cardObject?.imageUri,
        // priceUsd: cardObject.prices.usd,
      };
      cardDb.push(newCardObject);
    }
  });

  setShowToast(true)

  saveData(cardDb, fileName);
};

const CardDatabase = (props) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("On props change");
  }, [props]);

  return (
    <div>
      {/* <Toast show={showToast} onClose={setShowToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Card DB success</strong>
          
        </Toast.Header>
        <Toast.Body>Woohoo!</Toast.Body>
      </Toast> */}

      <Button onClick={()=>{
        parseDatabase(setShowToast);

      }}>Click to parse scryfall data</Button>
    </div>
  );
};

export default CardDatabase;
