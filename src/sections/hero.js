import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"

import { Blob } from "@components"
import { UseParallax, useSfx } from "@hooks"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { playNotAllowed } = useSfx()

  return (
    <StyledSection>
      <About>
        <Heading>
          <h6>Hi, my name is</h6>
          <h1>Alex Perronnet</h1>
          <h2>I build things for the web</h2>
        </Heading>
        <Description>
          <p>
            I am a french Freelance frontend developer and webdesigner. I am
            also an open source contributor and a the creator of devfont icons.
          </p>
          <p>
            I have the Asperger’s syndrome (AS), so i have some difficulties
            with social interaction, this is why i am a freelancer. In life i
            like to learn new things about many subjects, tattoos, (e)sport and
            animals are my only friends.
          </p>
        </Description>
      </About>
      <BlobAvatar onClick={playNotAllowed}>
        <UseParallax>
          <div data-depth="-0.3">
            <Blob />
          </div>
          <div data-depth="0.6">
            <Avatar>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="avatar"
              />
              <div />
            </Avatar>
          </div>
        </UseParallax>
      </BlobAvatar>
    </StyledSection>
  )
}

const StyledSection = tw.section`my-20 sm:my-32 flex justify-between items-center`

const About = styled.div`
  ${tw`max-w-3xl flex flex-col space-y-8`}

  h1 {
    ${tw`text-3xl sm:text-5xl text-secondary font-bold flex items-start`}

    &:after {
      ${tw`text-xs text-tertiary ml-3`}
      content: "(He / Him)";
    }
  }

  h2 {
    ${tw`text-2xl sm:text-4xl font-bold`}
  }

  h6 {
    ${tw`text-tertiary font-medium`}
  }
`

const Heading = tw.div`space-y-3`

const Description = tw.div`space-y-5`

const BlobAvatar = tw.section`hidden xl:block cursor-not-allowed select-none`

const Avatar = styled.div`
  ${tw`w-84 h-84 flex justify-center items-center`}

  div:nth-of-type(1) {
    ${tw`w-64 h-64 rounded-full shadow-2xl`}
  }

  div:nth-of-type(2) {
    ${tw`w-64 h-64 absolute rounded-full`}
    background-color: rgba(var(--color-primary-rgb), .1);
  }
`
