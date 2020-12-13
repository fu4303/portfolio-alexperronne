import React from "react"
import tw, { styled } from "twin.macro"

export const Status = props => (
  <StyledStatus {...props}>
    <Ping {...props}>
      <span />
      <span />
    </Ping>
    <Message {...props}>{props.children}</Message>
  </StyledStatus>
)

const StyledStatus = styled.div`
  ${tw`flex items-center space-x-3`}
  ${props => props.visibility === "hiddenOnMobile" && tw`hidden md:flex`}
`

const Ping = styled.span`
  ${tw`flex`}

  span {
    ${tw`w-2 h-2 rounded-full`}
    ${props => props.color === "success" && tw`bg-success`}
    ${props => props.color === "warning" && tw`bg-warning`}
    ${props => props.color === "danger" && tw`bg-danger`}

    &:nth-of-type(1) {
      ${tw`animate-ping`}
    }

    &:nth-of-type(2) {
      ${tw`absolute`}
    }
  }
`

const Message = styled.span`
  ${tw`text-sm font-normal`}
  ${props => props.color === "success" && tw`text-success`}
  ${props => props.color === "warning" && tw`text-warning`}
  ${props => props.color === "danger" && tw`text-danger`}
  ${props => props.visibility === "pingOnly" && tw`sr-only`}
`
