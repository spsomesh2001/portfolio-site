import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SiteItem = styled(Link)`
  width: 100%;
  max-width: 450px;
  height: 500px;
  background-color: #fff;
  margin: 10px 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: #000;
`

export const HoverAction = styled.div`
  width: 90%;
  height: 65%;
  position: relative;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-out; 
  }
`

export const SiteIconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 10px;
  font-size: 5rem;
`

export const SiteImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-out;
  z-index: 3;
  border-radius: 10px;

  &:hover {
    opacity: 0.3;
    transition: all 0.5s ease-out; 
  }
`

export const SiteHeading = styled.h2`
  text-align: left;
  width: 90%;
  margin: 15px 0 10px 0;
`

export const SiteDesc = styled.p`
  background: #e5e5e5;
  resize: vertical;
  width: 90%;
  padding: 5px;
`