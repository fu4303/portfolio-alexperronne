import React from "react"
import Tilt from "react-tilt"
import tw, { styled } from "twin.macro"

import { mixins } from "@styles"
import { projects } from "@data"
import { useSfx } from "@hooks"

export const Projects = () => {
  const { playPop, playPlunger } = useSfx()

  return (
    <StyledSection>
      <Title>Projects</Title>
      <ProjectsList>
        {projects.map(project => (
          <Tilt
            key={project.title}
            options={{
              max: 20,
              scale: 1,
              transition: true
            }}
          >
            <ProjectItem onMouseEnter={playPlunger}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.description}</p>
              <ProjectLinks>
                {project.links.map(link => (
                  <StyledLink
                    key={link.label}
                    href={link.url}
                    onMouseEnter={playPop}
                  >
                    {link.label}
                  </StyledLink>
                ))}
              </ProjectLinks>
              <BadgesList>
                {project.badges.map(badge => (
                  <Badge key={badge.title}>{badge.title}</Badge>
                ))}
              </BadgesList>
            </ProjectItem>
          </Tilt>
        ))}
      </ProjectsList>
    </StyledSection>
  )
}

const StyledSection = tw.section`mb-20 space-y-12 sm:space-y-16`

const Title = styled.h3`
  ${mixins.typography.sectionTitle}
`

const ProjectsList = tw.div`space-y-12`

const ProjectItem = tw.div`space-y-5 bg-secondary p-5 duration-100 rounded-lg hover:shadow-xl`

const ProjectTitle = tw.h4`text-xl font-bold text-secondary`

const ProjectLinks = tw.div`flex items-center space-x-5`

const StyledLink = styled.a`
  ${mixins.link.underline}
  ${tw`text-base text-tertiary`}
`

const BadgesList = tw.div`flex space-x-3 overflow-auto`

const Badge = styled.span`
  ${tw`px-2 py-1 font-medium text-xs text-tertiary whitespace-nowrap cursor-not-allowed rounded`}
  background-color: rgba(var(--color-primary-rgb), .1);
`
