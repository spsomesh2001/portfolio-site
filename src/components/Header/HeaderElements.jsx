import styled from 'styled-components';
import { FaBuffer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';

export const HeaderContainer = styled.div`
  background: ${({scrolled}) => (scrolled ? "#000" : "rgba(0,0,0,0.1)")};
  transition: all 0.5s ease-out;
  border-bottom: 2px solid #000;
  height: 80px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;

  @media screen and (max-width: 790px) {
    padding: 0 20px;
  }
`

export const SiteLogo = styled(Link)`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({scrolled}) => (scrolled ? "#fff" : "#000")};
  cursor: pointer;
  font-family: 'Kaushan Script', sans-serif;
  font-size: 1.7rem;
`

export const Logo = styled(FaBuffer)`
  margin-right: 5px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 670px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    margin-top: 1px;
    font-size: 2rem;
    cursor: pointer;
    color: ${({scrolled}) => (scrolled ? "#fff" : "#000")};
  }
`

export const NavMenuWrapper = styled.div`
  width: 350px;

  @media screen and (max-width: 670px) {
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : "-100%")};
    opacity: 1;
    width: 100%;
    height: 90vh;
    transition: all 0.5s ease;
    background: #101522;
  }
`

export const NavMenu = styled.ul`
  margin-top: 5px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
  }
`

export const NavMenuItem = styled.li`
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-out;

  &:hover {
    border-bottom: ${({scrolled}) => (scrolled ? "2px solid #fff" : "2px solid #000")};
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 670px) {
    text-align: center;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
`

export const NavItemLink = styled(SLink)`
  text-decoration: none;
  font-family: 'Sedgwick Ave', sans-serif;
  color: ${({scrolled}) => (scrolled ? "#fff" : "#000")};
  cursor: pointer;

  &.active {
    padding-bottom: 5px;
    border-bottom: 2px solid #fff;
  }

  @media screen and (max-width: 670px) {
    color: #fff;
  }
`