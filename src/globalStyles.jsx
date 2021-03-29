import styled, { createGlobalStyle } from 'styled-components'

export const GlobalContainer = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  
`

export const Button = styled.button`
  background: #fff;
  color: #000;
  padding: ${({big}) => (big ? "12px 64px" : "10px 20px")};
  white-space: nowrap;
  border: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  transition: all 0.5s ease-in;

  &:hover {
    background: #000;
    color: #fff;
    border: 2px solid #fff;
    transition: all 0.5s ease-in;
  }
` 