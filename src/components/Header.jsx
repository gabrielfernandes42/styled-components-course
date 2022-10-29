import React from "react";
import { Logo, Nav, StyledHeader, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try its Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              debitis est inventore quia placeat minima molestias natus, libero
              neque,{" "}
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Starded for free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
