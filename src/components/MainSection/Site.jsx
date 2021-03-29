import React from 'react';
import { HoverAction, SiteDesc, SiteHeading, SiteIconContainer, SiteImg, SiteItem } from './SiteElements';
import { animateScroll as scroll } from 'react-scroll'

const Site = ({goTo, tab, self, siteIcon, src, alt, siteHeading, siteDesc}) => {

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  return (
    <>
      <SiteItem to={goTo} target={tab ? '_blank' : ''} onClick = {self ? scrollToTop : null}>
        <HoverAction>
          <SiteIconContainer>
            {siteIcon}
          </SiteIconContainer>
          <SiteImg src={src} alt={alt}></SiteImg>
        </HoverAction>
        <SiteHeading>{siteHeading}</SiteHeading>
        <SiteDesc>{siteDesc}</SiteDesc>
      </SiteItem>
    </>
  );
}

export default Site;
