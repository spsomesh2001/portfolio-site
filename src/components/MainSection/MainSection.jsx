import React from 'react'
import { MainContainer, MainContentWrapper, SectionHeading, SectionItem, SectionWrapper, Sites } from './MainSectionElements'
import { IconContext } from 'react-icons/lib'
import Site from './Site'
import { sitep1, sitep2, sitep3, sitep4, sitemy1, sitemy2} from './data'


const MainSection = () => {

  return (
    <>
    <IconContext.Provider value={{'color': '#fff'}}>
    <MainContainer>
      <MainContentWrapper>
        <SectionWrapper>
          <SectionItem>
            <SectionHeading id="pracDesign">Practiced Designs</SectionHeading>
            <Sites>

              <Site {...sitep1}></Site>
              <Site {...sitep2}></Site>
              <Site {...sitep3}></Site>
              <Site {...sitep4}></Site>

            </Sites>
          </SectionItem>

          <SectionItem>
            <SectionHeading id="myDesign">My Designs</SectionHeading>
            <Sites>
              <Site {...sitemy1}></Site>
              <Site {...sitemy2}></Site>
            </Sites>
          </SectionItem>
        </SectionWrapper>
      </MainContentWrapper>
    </MainContainer>
    </IconContext.Provider>
    </>
  )
}

export default MainSection
