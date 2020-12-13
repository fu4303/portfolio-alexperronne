import React from "react"

export const useOutbound = () => {
  const handleOutbound = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  React.useEffect(() => {
    handleOutbound()
  }, [])
}
