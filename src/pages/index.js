import React from "react"
import { Wrapper } from "@components"
import { Hero, Skillsets, Projects, Contact } from "@sections"

const HomePage = () => (
  <Wrapper title="Home">
    <Hero />
    <Skillsets />
    <Projects />
    <Contact />
  </Wrapper>
)

export default HomePage