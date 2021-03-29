import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: #000;

  @media screen and (max-width: 400px) {
    height: 15vh;
  }
`

export const FooterWrapper = styled.div`
  height: 100%;
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 590px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
  }
`

export const SiteLogoWrapper = styled(Link)`
  width: 30%;
  max-width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  color: #fff;

  @media screen and (max-width: 590px) {
    width: 50%;
  }
`

export const SocialMediaWrapper = styled.div`
  width: 30%;
  max-width: 250px;

  @media screen and (max-width: 590px) {
    width: 40%;
  }
`

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialMediaLink = styled.a`
  margin-top: 2px;

  @media screen and (max-width: 590px) {
    margin-top: 15px;
  }
`