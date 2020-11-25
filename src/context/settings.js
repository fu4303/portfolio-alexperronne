import React from "react"

const SettingsContext = React.createContext()

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState()
  const [soundEnabled, setSoundEnabled] = React.useState()

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        soundEnabled,
        setSoundEnabled
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const {
    darkMode,
    setDarkMode,
    soundEnabled,
    setSoundEnabled
  } = React.useContext(SettingsContext)

  const initializeSetting = ({
    localStorageKey,
    setValue,
    value,
    fallbackValue,
  }) => {
    if (typeof value !== "undefined") return

    const userValue = localStorage.getItem(localStorageKey)
    if (userValue !== null) {
      let newValue
      try {
        newValue = JSON.parse(userValue)
      } catch (_) {
        newValue = userValue
      }

      setValue(newValue)
    } else {
      setValue(fallbackValue)
    }
  }

  React.useEffect(() => {
    initializeSetting({
      localStorageKey: "alexperronnet.io:sound-enabled",
      setValue: setSoundEnabled,
      value: soundEnabled,
      fallbackValue: true
    })

    initializeSetting({
      localStorageKey: "alexperronnet.io:dark-mode",
      setValue: setDarkMode,
      value: darkMode,
      fallbackValue: window.matchMedia("(prefers-color-scheme: dark)").matches
    })
  }, [
    darkMode,
    setDarkMode,
    soundEnabled,
    setSoundEnabled,
  ])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    localStorage.setItem("alexperronnet.io:dark-mode", newMode)
    setDarkMode(newMode)
  }

  const toggleSound = () => {
    const newSetting = !soundEnabled
    localStorage.setItem("alexperronnet.io:sound-enabled", newSetting)
    setSoundEnabled(newSetting)
  }

  return {
    darkMode,
    toggleDarkMode,
    soundEnabled,
    toggleSound
  }
}