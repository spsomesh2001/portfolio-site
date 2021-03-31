import React, { useState } from 'react'
import { HeaderContainer, HeaderWrapper, Logo, MobileIcon, NavItemLink, NavMenu, NavMenuItem, NavMenuWrapper, SiteLogo } from './HeaderElements'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMenu = () => {
    if(window.innerWidth <= 670) {
      setClick(false);
    }
  }

  window.addEventListener('resize', closeMenu);

  const handleScroll = () => {
    if(window.scrollY >= 80) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  return (
    <>
    <HeaderContainer scrolled={scrolled}>
      <HeaderWrapper>
        <SiteLogo onClick={scrollToTop} scrolled={scrolled}>
          <Logo></Logo>
          Portfolio Site
        </SiteLogo>
        <MobileIcon onClick={handleClick} scrolled={scrolled}>
        {
          click ? <FaTimes/> : <FaBars/>
        }
        </MobileIcon>
        <NavMenuWrapper click={click} onClick={handleClick}>
          <NavMenu>
            <NavMenuItem scrolled={scrolled}>
              <NavItemLink onClick={() => { scrollToTop(); handleClick();}} scrolled={scrolled}>Home</NavItemLink>
            </NavMenuItem>
            <NavMenuItem scrolled={scrolled}>
              <NavItemLink activeClass="active" to="pracDesign" spy={true} smooth={true} offset={-100} duration={600} onClick={handleClick} scrolled={scrolled}>Practiced Designs</NavItemLink>
            </NavMenuItem>
            <NavMenuItem scrolled={scrolled}>
              <NavItemLink activeClass="active" to="myDesign" spy={true} smooth={true} offset={-100} duration={600} onClick={handleClick} scrolled={scrolled}>My Designs</NavItemLink>
            </NavMenuItem>
          </NavMenu>
        </NavMenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
    </>
  )
}

export default Header
