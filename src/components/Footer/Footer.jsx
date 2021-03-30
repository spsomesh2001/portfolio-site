import React from 'react'
import {FaBuffer, FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrapper, SiteLogoWrapper, SocialMediaIcons, SocialMediaLink, SocialMediaWrapper } from './FooterElements'
import {IconContext} from 'react-icons/lib';

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{'color': '#fff', 'size' : '1.3rem'}}>
    <FooterContainer>
      <FooterWrapper>
        <SiteLogoWrapper onClick={scrollToTop}>
          <FaBuffer/>
          <p>Portfolio Site</p>
        </SiteLogoWrapper>

        <SocialMediaWrapper>
          <SocialMediaIcons>
            <SocialMediaLink href={'https://github.com/spsomesh2001'} rel='noopener noreferrer' target="_blank" aria-label="GitHub">
              <FaGithub/>
            </SocialMediaLink>
            <SocialMediaLink href={'https://www.linkedin.com/in/somesh-kirthik-789ba8192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2A9EYlspS8OthDYD06TdQw%3D%3D'} rel='noopener noreferrer' target="_blank" aria-label="LinkedIn">
              <FaLinkedin/>
            </SocialMediaLink>
            <SocialMediaLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook/>
            </SocialMediaLink>
            <SocialMediaLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram/>
            </SocialMediaLink>
          </SocialMediaIcons>
        </SocialMediaWrapper>
      </FooterWrapper>
    </FooterContainer>
    </IconContext.Provider>
    </>
  )
}

export default Footer
