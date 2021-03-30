import { FaBuffer, FaMagento, FaPizzaSlice, FaTypo3 } from "react-icons/fa"
import { MdFingerprint } from 'react-icons/md'
import { GiChocolateBar } from 'react-icons/gi'

import sp1 from "../../images/sitep1.jpg"
import sp2 from "../../images/sitep2.jpg"
import sp3 from "../../images/sitep3.jpg"
import sp4 from "../../images/sitep4.jpg"

import sm1 from "../../images/sitemy1.jpg"
import sm2 from "../../images/sitemy2.jpg"

export const sitep1 = {
  goTo: "/",
  tab: true,
  self: false,
  siteIcon: <FaTypo3/>,
  src: sp1,
  alt: "sitep1-img",
  siteHeading: "Travel Page",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}

export const sitep2 = {
  goTo: "/",
  tab: true,
  self: false,
  siteIcon: <MdFingerprint />,
  src: sp2,
  alt: "sitep2-img",
  siteHeading: "Payment Page",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}

export const sitep3 = {
  goTo: "/",
  tab: true,
  self: false,
  siteIcon: <FaPizzaSlice />,
  src: sp3,
  alt: "sitep3-img",
  siteHeading: "Restaurant Page",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}

export const sitep4 = {
  goTo: "/",
  tab: true,
  self: false,
  siteIcon: <FaMagento />,
  src: sp4,
  alt: "sitep4-img",
  siteHeading: "Marketing Page",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}

export const sitemy1 = {
  goTo: "/",
  tab: false,
  self: true,
  siteIcon: <FaBuffer />,
  src: sm1,
  alt: "sitemy1-img",
  siteHeading: "Portfolio Site",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}

export const sitemy2 = {
  goTo: "//spsomesh2001.github.io/choco-site/",
  tab: true,
  self: false,
  siteIcon: <GiChocolateBar />,
  src: sm2,
  alt: "sitemy2-img",
  siteHeading: "Chocolate E-Commerce Site",
  siteDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem non qui voluptates at eos consequuntur, est magnam unde consequatur iusto dolores quibusdam molestias officiis iste alias tempore animi autem ducimus."
}