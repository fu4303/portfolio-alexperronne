import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

import { Button } from "@components"

export const Error = () => (
  <StyledSection>
    <Title>404 &mdash; Page Not Found</Title>
    <Text>This is one-page website. How did you get there?</Text>
    <Flex>
      <Button as={Link} to="/" icon="home">
        Back To Safety
      </Button>
    </Flex>
  </StyledSection>
)

const StyledSection = tw.section`my-20 sm:my-32 space-y-12 text-center`

const Title = tw.h1`text-2xl sm:text-4xl text-tertiary font-bold`

const Text = tw.p`sm:text-lg`

const Flex = tw.div`flex justify-center`
