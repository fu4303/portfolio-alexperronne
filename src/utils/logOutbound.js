export const logOutbound = (label) => {
  if (typeof window.ga === "function") {
    window.ga("send", "event", {
      eventCategory: "outbound link",
      eventAction: "click",
      eventLabel: label
    })
  }
}