import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import styled from "styled-components";
import { ButtonBase } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { a } from "react-spring";
import { mdiMenu, mdiHome, mdiCogSync, mdiCloseBox } from "@mdi/js";
import { sectionData, servicesSectionData } from "../../Constants/Data";
import { kokoYellow2, grey6 } from "../../Constants/Colors";
import { Trail } from "./Trails";
import { logoJustWords, logoJustWordsBlack } from "../../Assets";

export const Image = styled.img`
  object-fit: cover;
  height: 150px;
  width: 150px;
`;

const NavBarContainer = styled.div`
  display: flex;
  padding: 20px;
  background: ${(props) => (props.yellowScheme ? kokoYellow2 : "black")}; ;
`;

const ServicesLink = styled(Link)`
  font-size: 2.5rem;
`;

const Container = styled(a.div)`
  ${(props) => (props.visible ? "" : "display: none")};
  background: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100vw;
  height: calc(100vh - 50px);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.15);
  will-change: width, height;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background: linear-gradient(to top, white 60%, rgba(255, 255, 255, 0) 100%);
  pointer-events: auto;
`;

const NavText = styled(a.div)`
  line-height: 0.25;
  will-change: transform, opacity;
`;

const ServicesDropdown = styled.div`
  margin-top: -30px;
`;

// &&& = important for styled-components
const HomeButton = styled(Link)`
  &&& {
    position: absolute;
    right: 70px;
    top: 20px;
  }
`;

const ColorSchemeButton = styled(ButtonBase)`
  &&& {
    position: absolute;
    right: 120px;
    top: 20px;
  }
`;

const NavButton = styled(ButtonBase)`
  &&& {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

const NavBar = () => {
  const [showObject, setShowObject] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [yellowScheme, setYellowScheme] = useState(false);

  const servicesDropdownEl = !showServices ? (
    <div>
      Services
      <ExpandMore />
    </div>
  ) : (
    <div>
      Services
      <ExpandLess />
    </div>
  );

  // const logoEl = yellowScheme ? (
  //   <Image src={logoJustWords} width="100px" />
  // ) : (
  //   <Image src={logoJustWordsBlack} width="100px" />
  // );

  return (
    <NavBarContainer yellowScheme={yellowScheme ? "true" : undefined}>
      <Image
        src={yellowScheme ? logoJustWords : logoJustWordsBlack}
        width="100px"
      />

      {/* TODO: href for social media links */}
      {/* <HrefContainer>
        {aboutLinks.map((item, index) => (
          <a className="icon" href={item.url} key={index}>
            <Icon color="black" path={item.mdi} size="40px" />
          </a>
        ))}
      </HrefContainer> */}

      {/* <ColorSchemeButton
        key={`color-scheme-switch`}
        onClick={() => setYellowScheme(!yellowScheme)}
      >
        <Icon
          color={yellowScheme ? "black" : kokoYellow2}
          path={mdiCogSync}
          size="40px"
        />
      </ColorSchemeButton> */}

      <HomeButton
        key={`link-home`}
        to="/"
        // style={{ color: yellowScheme ? kokoYellow2 : 'black' }}
        onClick={() => {
          setShowObject(false);
          setShowServices(false);
        }}
      >
        <Icon
          color={yellowScheme ? "black" : kokoYellow2}
          path={mdiHome}
          size="40px"
        />
      </HomeButton>

      <NavButton
        onClick={() => {
          setShowObject(!showObject);
          setShowServices(false);
        }}
      >
        <Icon
          color={yellowScheme ? "black" : kokoYellow2}
          path={showObject ? mdiCloseBox : mdiMenu}
          size="40px"
        />
      </NavButton>

      <Container
        // Styled components doesn't like passing booleans as props
        visible={showObject ? "true" : undefined}
      >
        <Trail open={showObject}>
          <ServicesDropdown onClick={() => setShowServices(!showServices)}>
            {servicesDropdownEl}
          </ServicesDropdown>

          {showServices &&
            servicesSectionData.map((item, index) => (
              <ServicesLink
                key={`link-${index}`}
                to={item.link}
                style={{ color: grey6 }}
                onClick={() => {
                  setShowObject(!showObject);
                  setShowServices(false);
                }}
              >
                <NavText>{item.title}</NavText>
              </ServicesLink>
            ))}

          {sectionData.map((item, index) => (
            <Link
              key={`link-${index}`}
              to={item.link}
              style={{ color: "black" }}
              onClick={() => {
                setShowObject(!showObject);
                setShowServices(false);
              }}
            >
              <NavText>{item.title}</NavText>
            </Link>
          ))}
        </Trail>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
