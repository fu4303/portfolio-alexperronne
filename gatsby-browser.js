import React from "react"
import { SettingsProvider } from "@context"

import "typeface-fira-sans"

console.log(
  "%cHELLO FRIENDS, WHY ARE U THERE?",
  `
    background-color: #111827;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
    padding: 4rem;
  `
)

export const wrapRootElement = ({ element }) => (
  <SettingsProvider>
    {element}
  </SettingsProvider>
)