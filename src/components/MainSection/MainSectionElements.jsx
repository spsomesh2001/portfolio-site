import styled from "styled-components";
import backImg from "../../images/backimg.png"

export const MainContainer = styled.div`
  margin-top: -80px;
  background-image: url(${backImg});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

export const MainContentWrapper = styled.div`
  padding: 160px 0;
  color: #000;
`

// export const IntroSection = styled.div`
//   height: 50vh;
//   font-weight: 700;
//   font-size: 2rem;
//   margin-bottom: 160px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #fff;
//   color: #000;
// `

// export const IntroDesc = styled.div`
//   height: 50vh;
//   width: 50%;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #000;
// `

// export const IntroImg = styled.div`
//   height: 50vh;
//   width: 50%;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #000;
// `

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`

export const SectionItem = styled.div`
  padding: 20px 0;
`

export const SectionHeading = styled.h1`
  border-bottom: 2px solid #000;
  font-family: 'Sedgwick Ave', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  padding: 10px 0;
  margin: 25px 0;
  letter-spacing: 2px;
`

export const Sites = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`
