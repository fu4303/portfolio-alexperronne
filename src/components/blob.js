import React from "react"
import tw, { styled } from "twin.macro"

export const Blob = props => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    {...props}
  >
    <path d="M148.284 17.6387C160.013 26.8755 165.214 45.7839 172.659 63.4969C180.104 81.3186 189.793 97.7276 189.997 114.463C190.201 131.198 180.818 148.15 168.478 161.082C156.137 174.013 140.839 183.033 124.725 187.271C108.612 191.509 91.6818 190.965 77.6076 184.554C63.5335 178.034 52.213 165.754 39.8726 153.149C27.6343 140.434 14.376 127.286 10.9085 111.746C7.54292 96.2062 13.9681 78.2759 22.9429 63.2796C31.8157 48.1746 43.2382 36.0037 56.3944 27.5275C69.6527 19.0514 84.8487 14.2699 101.574 11.6619C118.3 9.05383 136.556 8.51049 148.284 17.6387Z" />
  </StyledSvg>
)

const StyledSvg = styled.svg`
  ${tw`w-84 h-84 fill-tertiary`}

  @media(min-width: 1440px) {
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
