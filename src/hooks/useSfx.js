import useSound from "use-sound"
import { useSettings } from "@context"

import airhorn from "@assets/sounds/airhorn.mp3"
import notAllowed from "@assets/sounds/not-allowed.mp3"
import plunger from "@assets/sounds/plunger.mp3"
import pop from "@assets/sounds/pop.mp3"
import soundOff from "@assets/sounds/sound-off.mp3"
import soundOn from "@assets/sounds/sound-on.mp3"
import switchOff from "@assets/sounds/switch-off.mp3"
import switchOn from "@assets/sounds/switch-on.mp3"

export const useSfx = () => {
  const { soundEnabled } = useSettings()

  const [playAirhorn] = useSound(
    airhorn, { soundEnabled, volume: .25 }
  )

  const [playNotAllowed] = useSound(
    notAllowed, { soundEnabled, volume: .25 }
  )

  const [playPlunger] = useSound(
    plunger, { soundEnabled, volume: .25 }
  )

  const [playPop] = useSound(
    pop, { soundEnabled, volume: .25 }
  )

  const [playSoundOff] = useSound(
    soundOff, { soundEnabled, volume: .25 }
  )

  const [playSoundOn] = useSound(
    soundOn, { soundEnabled, volume: .25 }
  )

  const [playSwitchOff] = useSound(
    switchOff, { soundEnabled, volume: .25 }
  )

  const [playSwitchOn] = useSound(
    switchOn, { soundEnabled, volume: .25 }
  )

  return {
    playAirhorn,
    playNotAllowed,
    playPlunger,
    playPop,
    playSoundOff,
    playSoundOn,
    playSwitchOff,
    playSwitchOn
  }
}