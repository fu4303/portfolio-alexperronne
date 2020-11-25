import tw, { css } from "twin.macro"

export const mixins = {
  link: {
    underline: css`
      ${tw `inline-block`}

      &:after {
        ${tw `block border-b border-current duration-100 opacity-0`}
        content: "";
      }
      
      &:hover:after,
      &:focus:after {
        ${tw `opacity-100`}
      }
    `
  },
  typography: {
    sectionTitle: css`
      ${tw `text-2xl sm:text-3xl font-bold text-secondary whitespace-no-wrap flex items-center`}

      &:before,
      &:after {
        ${tw `h-1 rounded-full`}
        content: "";
      }

      &:before {
        ${tw `w-10 mr-5 bg-tertiary`}
      }

      &:after {
        ${tw `w-full ml-5 bg-secondary`}
      }
    `
  }
}