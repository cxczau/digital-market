import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, Col, Button } from "react-bootstrap";
import ScryfallData from "../../Constants/ScryfallData.json";
import CardDatabase from "./CardDatabase";
import PrintPdf from "./PrintPdf";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  height: 75vh;
`;

const Magic = (props) => {
  const [pdfReady, setPdfReady] = useState(false);
  const [decklist, setDecklist] = useState("Your decklist will be parsed here");
  const [imageUris, setImageUris] = useState([]);
  const [notFound, setNotFound] = useState(['Cards not found will be listed here']);

  const parseData = () => {
    let notFoundList = [];
    let parsedDataImages = [];

    // Break decklist into array items
    const arrayOfLines = decklist.split("\n");

    arrayOfLines.forEach((item) => {
      const cardName = item.split("1 ")[1];

      const foundCard =
        ScryfallData.find((element) => element.name === cardName) || cardName;

      if (foundCard?.imageUri) {
        parsedDataImages.push(foundCard?.imageUri);
      } else {
        notFoundList.push(item);
      }
    });

    setNotFound(
      notFoundList.length > 1 ? notFoundList : ["All items found :)"]
    );

    if (parsedDataImages.length > 0) {
      setPdfReady(true);
      setImageUris(parsedDataImages);
    }
  };

  return (
    <Container>
      {/* <CardDatabase /> */}

      <Form>
        <Form.Group>
          <Form.Text className="text-muted" id="text-area">
            Please paste your decklist below.
          </Form.Text>
        </Form.Group>

        <Form.Group as={FormContainer} controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={15}
            onChange={({ target }) => {
              setDecklist(target.value);
            }}
          />

          <Button onClick={parseData}>Submit</Button>

          <Form.Control as="textarea" readOnly value={notFound} rows={15} />

          <PrintPdf imageUris={imageUris} ready={pdfReady} />
        </Form.Group>
      </Form>

      
    </Container>
  );
};

export default Magic;
