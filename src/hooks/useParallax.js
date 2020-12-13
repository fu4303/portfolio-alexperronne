import React from "react"
import Parallax from "parallax-js"

export const UseParallax = props => {
  const parallaxRef = React.useRef(null)
  const [parallax, setParallax] = React.useState(null)

  React.useEffect(() => {
    setParallax(
      new Parallax(parallaxRef.current, {
        invertX: false,
        invertY: false
      })
    )

    return () => {
      parallax && parallax.destroy()
    }
  }, [parallaxRef])

  return (
    <div ref={parallaxRef} {...props}>
      {props.children}
    </div>
  )
}
