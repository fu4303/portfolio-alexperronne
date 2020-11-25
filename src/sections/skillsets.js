import React from "react"
import tw, { styled } from "twin.macro"
import { mixins } from "@styles"
import { skills, tools } from "@data"
import { useSfx } from "@hooks"
import { Icon, Status, CustomTooltip } from "@components"

export const Skillsets = () => {
  const { playPlunger, playNotAllowed } = useSfx()

  return (
    <StyledSection>
      <Title>
        Skillsets
      </Title>
      <Skills>
        <SkillsGrid>
          {skills.map(skill =>(
           <CustomTooltip key={skill.title} title={skill.title} placement="top">
            <SkillCard onClick={playNotAllowed}>
              <Icon name={skill.icon} />
              {skill.level.includes("high") && (
                <Ping color="success" visibility="pingOnly" />
              )}
              {skill.level.includes("mid") && (
                <Ping color="warning" visibility="pingOnly" />
              )}
              {skill.level.includes("low") && (
                <Ping color="danger" visibility="pingOnly" />
              )}
            </SkillCard>
          </CustomTooltip>
          ))}
        </SkillsGrid>
        <Caption>
          <Status color="success">High</Status>
          <Status color="warning">Mid</Status>
          <Status color="danger">Low</Status>
        </Caption>
      </Skills>
      <SubSection>
        <Subtitle>
          Languages
        </Subtitle>
        <p>I speak perfectly French because it’s my mother tongue (I come from New Caledonia), I also speak English, not perfectly but enough for work but I stammer when i am stressed. I can say some love words in at least 10 different languages, it’s useless but it can help during a date.</p>
      </SubSection>
      <SubSection>
        <Subtitle>
          Tools I use
        </Subtitle>
        <ToolsGrid>
          {tools.map(tool => (
            <ToolCard key={tool.title} href={tool.url} onMouseEnter={playPlunger}>
              <h5>
                {tool.title}
              </h5>
              <Icon name="arrowRight" />
            </ToolCard>
          ))}
        </ToolsGrid>
      </SubSection>
    </StyledSection>
  )
}

const StyledSection = tw.section`mb-20 space-y-12 sm:space-y-16`

const Title = styled.h3`
  ${mixins.typography.sectionTitle}
`

const Subtitle = tw.h4`text-xl sm:text-2xl text-tertiary font-bold`

const Skills = tw.div`space-y-6 sm:space-y-8`

const SkillsGrid = tw.div`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 justify-center`

const SkillCard = styled.div`
  ${tw `flex justify-center py-10 bg-secondary rounded-lg relative cursor-not-allowed`}

  svg {
    ${tw `w-8 h-8`}
  }
`

const Ping = tw(Status)`absolute right-0 top-0 p-3`

const Caption = tw.div`flex items-center space-x-5 justify-center sm:justify-start`

const SubSection = tw.div`flex flex-col space-y-6 sm:space-y-8`

const ToolsGrid = tw.div`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5`

const ToolCard = styled.a`
  ${tw `flex items-center p-5 bg-secondary rounded-lg hocus:text-tertiary`}

  svg {
    ${tw `w-4 h-4 text-tertiary opacity-0`}
  }

  &:hover > svg,
  &:focus > svg {
    ${tw `opacity-100 transform translate-x-4 duration-200`}
  }
`