const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--color-primary)"
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--color-primary)"
      },
      borderColor: {
        primary: "var(--bg-secondary)",
        secondary: "var(--bg-primary)",
        tertiary: "var(--color-primary)"
      },
      divideColor: {
        primary: "var(--bg-secondary)",
        secondary: "var(--bg-primary)",
        tertiary: "var(--color-primary)"
      },
      fill: {
        primary: "var(--bg-secondary)",
        secondary: "var(--bg-primary)",
        tertiary: "var(--color-primary)"
      },
      spacing: {
        "84": "21rem"
      }
    }
  }
}