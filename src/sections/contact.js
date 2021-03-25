import React from "react"
import tw, { styled } from "twin.macro"

import { useSfx } from "@hooks"
import { mixins } from "@styles"
import { Status, CustomTooltip, CopyBox, Button } from "@components"

export const Contact = () => {
  const { playPop } = useSfx()

  const useToTop = () =>
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })

  return (
    <StyledSection>
      <Title>
        <span>Contact</span>
        <Status color="success" visibility="hiddenOnMobile">
          I am available for hire
        </Status>
      </Title>
      <p>
        I am open to lots of new opportunities, freelance or a fulltime
        position. You can contact me by trying to send a homing pigeon but
        honestly the best is still to send me an {""}
        <StyledLink href="mailto:me@alexperronnet.io" onMouseEnter={playPop}>
          email
        </StyledLink>
        .
      </p>
      <FlexCopy>
        <CopyBox value="me@alexperronnet.io" />
        <CopyBox value="@alexperronnet" />
      </FlexCopy>
      <CustomTooltip title="BTW it's better than scroll" placement="top">
        <Button icon="arrowCircleUp" onClick={useToTop}>
          Back To Top
        </Button>
      </CustomTooltip>
    </StyledSection>
  )
}

const StyledSection = tw.section`mb-20 space-y-12 sm:space-y-16`

const Title = styled.h3`
  ${mixins.typography.sectionTitle}
  ${tw`space-x-5`}
`

const FlexCopy = tw.div`flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5`

const StyledLink = styled.a`
  ${[mixins.link.underline, tw`text-tertiary`]}
`
