import tw, { css } from "twin.macro"

export const global = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f3f4f6;

    --text-primary: #4b5563;
    --text-secondary: #1f2937;

    --color-primary: #c026d3;
    --color-success: #16a34a;
    --color-warning: #ca8a04;
    --color-danger: #dc2626;

    --color-primary-rgb: 192, 38, 211;
  }

  .dark {
    --bg-primary: #1f2937;
    --bg-secondary: #111827;

    --text-primary: #d1d5db;
    --text-secondary: #ffffff;

    --color-primary: #3b82f6;
    --color-success: #22c55e;
    --color-warning: #eab308;
    --color-danger: #ef4444;

    --color-primary-rgb: 37, 99, 235;
  }

  * {
    ${tw`m-0 p-0 box-border focus:outline-none`}
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--bg-primary);

    &::-webkit-scrollbar {
      ${tw`w-3`}
    }

    &::-webkit-scrollbar-track {
      background: var(--bg-primary);
    }

    &::-webkit-scrollbar-thumb {
      ${tw`bg-tertiary rounded-full`}
      border: 3px solid var(--bg-primary);
    }
  }

  html,
  body {
    ${tw`h-screen bg-primary text-primary text-justify font-sans antialiased transition-all duration-100`}
  }

  button {
    ${tw`focus:outline-none`}
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    ${tw`h-full`}
  }

  ::selection {
    ${tw`bg-tertiary text-white`}
  }
`
