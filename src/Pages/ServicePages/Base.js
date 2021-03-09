import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Summary = styled.div`
  position: relative;
  font-size: 0.8em;
  width: 50vw;
  height: 100%;
`;

export const SectionContainer = styled.div`
  display: grid;
`;

export const SubSection = styled.div``;

export const Section = styled.div`
  display: flex;

  > * {
    margin: 10px 5px;
  }

  :nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
`;
