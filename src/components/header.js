import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { useSfx } from "@hooks"
import { mixins } from "@styles"
import { Status, Settings, Button } from "@components"

export const Header = () => {
  const { playPop } = useSfx()

  return (
    <StyledHeader>
      <Side>
        <StyledLink to="/" onMouseEnter={playPop}>
          Alex Perronnet
        </StyledLink>
        <Status color="success" visibility="hiddenOnMobile">
          I am available for hire
        </Status>
      </Side>
      <Side>
        <Settings />
        <Button
          as="a"
          href="mailto:alex@alexperronnet.io"
          icon="atSign"
          visibility="smallOnMobile"
        >
          Get In Touch
        </Button>
      </Side>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  ${tw`flex justify-between items-center py-8 sm:py-10 border-b-2 border-primary`}
`

const Side = styled.div`
  ${tw`flex space-x-5 items-center`}
`

const StyledLink = styled(Link)`
  ${[mixins.link.underline, tw`sm:text-xl text-secondary font-bold uppercase`]}
`
