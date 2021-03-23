import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { aboutLinks, teamFiles } from "../Constants/Data";
import { companyDescription } from "../Constants/Text";
import { businessMan, businessWoman, teamPhotos } from "../Assets";

const HrefContainer = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0px 10px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 10px;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 5px;
  }
`;

const StaffContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 5px;
  }
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 100%));
  grid-gap: 25px;
  margin: 0px 10px;

  > * {
    margin: 5px;
  }
`;

const Summary = styled.h5`
  position: relative;
  width: 65vw;
  height: 100%;
`;

const StaffPhoto = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <Icon color="black" path={item.mdi} size="40px" />
          </a>
        ))}
      </HrefContainer>

      <SummaryContainer>
        {companyDescription.text.map((item, index) => (
          <Summary key={`summary-text-${index}`}>{item}</Summary>
        ))}
      </SummaryContainer>

      <h3>Meet our team</h3>

      <TeamContainer>
        {teamFiles.map((item, index) => (
          <StaffContainer key={`team-photo-${index}`}>
            <StaffPhoto src={item.photo} width="200px" />

            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <h5>{item.role}</h5>
          </StaffContainer>
        ))}
      </TeamContainer>
    </PageContainer>
  );
};

export default AboutPage;
