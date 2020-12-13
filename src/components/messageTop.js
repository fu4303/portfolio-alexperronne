import React from "react"
import tw, { styled } from "twin.macro"

import { useSfx } from "@hooks"
import { mixins } from "@styles"

export const MessageTop = () => (
  <StyledMessageTop>
    <Box>
      Black Lives Matter. Support the <Eji />.
    </Box>
  </StyledMessageTop>
)

const Eji = () => {
  const { playPop } = useSfx()

  return (
    <StyledLink href="https://eji.org" onMouseEnter={playPop}>
      Equal Justice Initiative
    </StyledLink>
  )
}

const StyledMessageTop = tw.aside`py-4 sm:py-6 bg-secondary text-center text-xs sm:text-sm`

const Box = tw.p`container`

const StyledLink = styled.a`
  ${[mixins.link.underline, tw`text-secondary`]}
`
