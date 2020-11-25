import tw, { css } from "twin.macro"

export const global = css`
  .light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F3F4F6;

    --text-primary: #4B5563;
    --text-secondary: #1F2937;

    --color-primary: #DB2777;
    --color-success: #16A34A;
    --color-warning: #CA8A04;
    --color-danger: #DC2626;

    --color-primary-rgb: 219, 39, 119;
  }

  .dark {
    --bg-primary: #111827;
    --bg-secondary: #1F2937;
    
    --text-primary: #D1D5DB;
    --text-secondary: #FFFFFF;

    --color-primary: #A855F7;
    --color-success: #22C55E;
    --color-warning: #EAB308;
    --color-danger: #EF4444;

    --color-primary-rgb: 168, 85, 247;
  }

  * {
    ${tw `m-0 p-0 box-border focus:outline-none`}
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--bg-primary);

    &::-webkit-scrollbar {
      ${tw `w-3`}
    }

    &::-webkit-scrollbar-track {
      background: var(--bg-primary);
    }

    &::-webkit-scrollbar-thumb {
      ${tw `bg-tertiary rounded-full`}
      border: 3px solid var(--bg-primary);
    }
  }

  html,
  body {
    ${tw `h-screen bg-primary text-primary text-justify font-sans antialiased transition-all duration-100`}
  }

  button {
    ${tw `focus:outline-none`}
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    ${tw `h-full`}
  }

  ::selection {
    ${tw `bg-tertiary text-white`}
  }
`