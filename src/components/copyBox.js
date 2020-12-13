import React from "react"
import copy from "copy-to-clipboard"
import tw from "twin.macro"

import { useSfx } from "@hooks"
import { logCopy } from "@utils"
import { Icon, CustomTooltip } from "@components"

export const CopyBox = ({ value }) => {
  const [isCopied, setCopied] = React.useState(false)
  const { playPlunger, playAirhorn } = useSfx()

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isCopied])

  return (
    <Box>
      <CustomTooltip title={isCopied ? "COPIED" : "COPY"} placement="top">
        <ButtonCopy
          value={value}
          onMouseEnter={playPlunger}
          onMouseDown={playAirhorn}
          onKeyPress={playAirhorn}
          onClick={() => {
            copy(value)
            setCopied(true)
            logCopy("Copy email")
          }}
        >
          {isCopied ? (
            <Icon color="success" name="check" />
          ) : (
            <Icon name="fileCopy" />
          )}
        </ButtonCopy>
      </CustomTooltip>
      <Placeholder>{value}</Placeholder>
    </Box>
  )
}

const Box = tw.div`flex items-center space-x-5 bg-secondary py-4 px-6 whitespace-pre overflow-x-auto rounded-lg text-sm`

const ButtonCopy = tw.button`hover:text-secondary`

const Placeholder = tw.div`select-all`
