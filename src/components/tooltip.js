import React from "react"
import tw, { styled } from "twin.macro"
import Tooltip from "@material-ui/core/Tooltip"
import { StylesProvider } from "@material-ui/core/styles"

const StyledTooltip = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  ${tw `bg-tertiary text-white text-xs rounded-sm`}
`
export const CustomTooltip = (props) => (
  <StylesProvider injectFirst>
    <StyledTooltip {...props} />
  </StylesProvider>
)