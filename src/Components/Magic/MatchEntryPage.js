import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { matchPlayers, playerNames, decks } from "./Utility/MatchConstants";
import RadioGroup from "../RadioGroup";
import { addToGoogleSheet } from "../../Services/GoogleSheets";

const Card = styled.div`
  display: flex;
  position: relative;
  background: grey;
  width: 80vw;
  height: 80vh;

  align-items: center;
  justify-content: center;
`;

const CustomFormGroup = styled.div`
  display: flex;
`;

/**
 * Component for entering game data into a Google Sheets spreadsheet
 */
const MatchEntryPage = (props) => {
  const [turns, setTurns] = useState(3);
  const [matchData, setMatchData] = useState({
    winner: matchPlayers[0],
  });
  const [showObject, setShowObject] = useState(false);

  return (
    <Card>
      <Form>
        {matchPlayers.map((player, index) => (
          <Form.Group key={index} as={CustomFormGroup}>
            <Form.Label>{player}</Form.Label>

            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              onChange={(selection) =>
                setMatchData({ ...matchData, [player]: selection[0] })
              }
              options={playerNames}
              placeholder="Choose a player..."
              clearButton
            />

            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              onChange={(selection) => {
                const deckLabel = "Deck " + (index + 1);
                setMatchData({ ...matchData, [deckLabel]: selection[0] });
                if (player === "Player 4") {
                  setShowObject(true);
                }
              }}
              options={decks}
              placeholder="Choose a deck..."
              clearButton
            />
          </Form.Group>
        ))}

        {showObject && (
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <RadioGroup options={matchPlayers} title="Winner: " />

            <Form.Label>What turn did the game end? {turns}</Form.Label>
            <Form.Control
              type="range"
              defaultValue={turns}
              onChange={(event) => setTurns(event.target.value)}
              size="lg"
              min={1}
              max={10}
            />

            <Form.Label>Match notes</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        )}

        <Button
          variant="primary"
          onClick={() => {
            console.log(matchData);
            addToGoogleSheet();
          }}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default MatchEntryPage;
