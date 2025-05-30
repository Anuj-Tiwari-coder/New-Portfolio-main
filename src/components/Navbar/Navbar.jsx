import React from "react";
import {
  NavbarContainer,
  Nav,
  NavLogo,
  Span,
  NavItems,
  NavLink,
  GitHubButton,
  MenuIcon,
  MobileNavItems,
  MobileNavLink,
} from "./NavbarStyleComponents";
import { DiCssdeck } from "react-icons/di";
import { Bio } from "../../constants";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer id="navbar">
      <Nav>
        <NavLink href="#about-container">
          <NavLogo>
            <span
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <DiCssdeck size="50px" />
              <Span>Portfolio</Span>
            </span>
          </NavLogo>
        </NavLink>

        <NavItems>
          <NavLink href="#about-container">About</NavLink>
          <NavLink href="#skills-container">Skills</NavLink>
          <NavLink href="#projects-container">Projects</NavLink>
          <NavLink href="#experience-container">Project's Experiences</NavLink>
          <NavLink href="#education-container">Education</NavLink>
          <NavLink href="#contact-container">Contact</NavLink>
        </NavItems>

        <GitHubButton href={Bio.github} target="display">
          Github Profile
        </GitHubButton>

        <MenuIcon>
          {isOpen ? (
            <RiCloseLine onClick={() => setIsOpen(false)} />
          ) : (
            <RiMenu3Line onClick={() => setIsOpen(true)} />
          )}
        </MenuIcon>

        {isOpen && (
          <MobileNavItems>
            <MobileNavLink
              href="#about-container"
              onClick={() => setIsOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="#skills-container"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </MobileNavLink>
            <MobileNavLink
              href="#projects-container"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink href='#experience-container' onClick={() => setIsOpen(false)}> Project's Experiance</MobileNavLink>
            <MobileNavLink
              href="#education-container"
              onClick={() => setIsOpen(false)}
            >
              Education
            </MobileNavLink>
            <MobileNavLink
              href="#contact-container"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </MobileNavLink>
          </MobileNavItems>
        )}
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
