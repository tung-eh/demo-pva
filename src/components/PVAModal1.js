import React from "react"
import styled, { keyframes } from "styled-components"

import ImagePreview from "./ImagePreview"
import PVAModal from "./PVAModal"

const flipKf = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`

const FlipContainer = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  :hover {
    > div {
      transform: rotateY(180deg);
    }
  }
`

const FlipBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  animation: ${flipKf} 0.8s;
`

const FlipableImagePreview = styled(ImagePreview)`
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
`

const PVAModal1 = props => (
  <PVAModal
    renderPreview={(image, publicImage) => (
      <FlipContainer>
        <FlipBox>
          <FlipableImagePreview image={publicImage} />
          <FlipableImagePreview
            image={image}
            style={{
              transform: "rotateY(180deg)",
            }}
          />
        </FlipBox>
      </FlipContainer>
    )}
    {...props}
  />
)

export default PVAModal1
