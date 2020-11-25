import React from "react"
import tw, { styled } from "twin.macro"
import { useSfx } from "@hooks"
import { Icon } from "@components"

export const Button = (props) => {
  const { playPlunger } = useSfx()

  return (
    <StyledButton onMouseEnter={playPlunger} {...props}>
      <Icon name={props.icon} />
      <span>
        {props.children}
      </span>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${tw `px-3 py-2 sm:px-4 sm:py-3 flex items-center space-x-3 text-sm font-medium text-tertiary border-2 border-tertiary transform hover:-translate-y-1 duration-200 rounded-lg`}

  &:hover {
    background-color: rgba(var(--color-primary-rgb), .15);
  }

  span {
    ${props => props.visibility === "smallOnMobile" && tw `sr-only md:not-sr-only`}
  }
`