import React from "react"
import tw from "twin.macro"
import { useSfx } from "@hooks"
import { useSettings } from "@context"
import { Icon, CustomTooltip } from "@components"

export const Settings = () => {
  const { darkMode, toggleDarkMode, soundEnabled, toggleSound } = useSettings()
  const { playSoundOn, playSoundOff, playSwitchOn, playSwitchOff } = useSfx()
  
  return (
    <StyledSettings>
      <Button
        handleClick={toggleDarkMode}
        clickSound={darkMode ? playSwitchOff : playSwitchOn}
        title={`Switch to ${darkMode ? "LIGHT" : "DARK"} mode`}
      >
        {darkMode ? <Icon name="toggleRight" /> : <Icon name="toggleLeft" />}
      </Button>
      <Button
        handleClick={toggleSound}
        forceSoundEnabled={true}
        clickSound={soundEnabled ? playSoundOff : playSoundOn}
        title={`Turn ${soundEnabled ? "OFF" : "ON"} sound`}
      >
        {soundEnabled ? <Icon name="volumeOn" /> : <Icon name="volumeOff" />}
      </Button>
    </StyledSettings>
  )
}

const Button = ({
  children,
  handleClick,
  title,
  clickSound = () => {},
  forceSoundEnabled = false,
  ...props
}) => {
  return (
    <CustomTooltip title={title} placement="top">
      <StyledButton
        onKeyPress={event => {
          if (event.key !== "Enter") return
          handleClick(event)
          clickSound({ forceSoundEnabled })
        }}
        onMouseDown={event => {
          event.preventDefault()
          event.stopPropagation()
          handleClick(event)
          clickSound({ forceSoundEnabled })
        }}
        {...props}
      >
        {children}
      </StyledButton>
    </CustomTooltip>
  )
}

const StyledSettings = tw.div`flex items-center space-x-5`

const StyledButton = tw.button`hover:text-secondary`