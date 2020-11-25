import React from "react"
import tw, { styled } from "twin.macro"
import { mixins } from "@styles"
import { socials } from "@data"
import { useSfx } from "@hooks"
import { logOutbound } from "@utils"
import { Icon, CustomTooltip, Settings } from "@components"

export const Footer = () => {
  const { playPlunger, playPop } = useSfx()

  return (
    <StyledFooter>
      <FlexCol>
        <Hidden>
          <Settings />
        </Hidden>
        <StyledLink href="https://github.com/alexperronnet/personal-website-v2" onMouseEnter={playPop}>
          Designed &amp; Built by Alex Perronnet
        </StyledLink>
      </FlexCol>
      <SocialList>
        {socials.map(social => (
          <CustomTooltip key={social.title} title={social.title} placement="top">
            <SocialButton
              href={social.url}
              onMouseEnter={playPlunger}
              onClick={() => logOutbound(`${social.title} website`)}
            >
              <Icon name={social.icon} />
            </SocialButton>
          </CustomTooltip>
        ))}
      </SocialList>
    </StyledFooter>
  )
}

const StyledLink = styled.a`
  ${[mixins.link.underline, tw `text-secondary text-sm`]}
`

const FlexCol = tw.div`flex flex-col sm:space-y-5`

const Hidden = tw.div`hidden sm:block`

const StyledFooter = tw.footer`py-12 flex flex-col-reverse sm:flex-row space-y-8 sm:space-y-0 space-y-reverse sm:justify-between items-center border-t-2 border-primary`

const SocialList = tw.div`flex space-x-5`

const SocialButton = styled.a`
  ${tw `bg-secondary p-3 sm:p-4 rounded-full transform hover:-translate-y-1 hover:text-tertiary duration-200`}

  svg {
    ${tw `w-4 h-4`}
  }
`