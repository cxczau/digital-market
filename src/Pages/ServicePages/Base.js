import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumbs } from "@material-ui/core";
import { servicesDescription } from "../../Constants/Text";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 10px;
  }
`;

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

export const ServiceBreadcrumb = (props) => {
  const index = servicesDescription.findIndex(
    (service) => service.identifier === props.currentService.identifier
  );
  const prevService =
    index === 0 ? servicesDescription[5] : servicesDescription[index - 1];
  const nextService =
    index === 5 ? servicesDescription[0] : servicesDescription[index + 1];

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to={prevService.link}>
        {prevService.title}
      </Link>

      <h3>Our Services</h3>

      <Link color="inherit" to={nextService.link}>
        {nextService.title}
      </Link>
    </Breadcrumbs>
  );
};
