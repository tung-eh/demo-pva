import React from "react"
import styled from "styled-components"

import ImagePreview from "./ImagePreview"
import PVAModal from "./PVAModal"

const StyledImagePreview = styled(ImagePreview)`
  :hover + #topImage {
    opacity: 0;
  }
`

const PVAModal1 = props => (
  <PVAModal
    renderPreview={(image, publicImage) => (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <ImagePreview
          image={publicImage}
          style={{
            position: "absolute",
            width: 160,
            height: 200,
            bottom: 0,
            right: 0,
          }}
        />
        <StyledImagePreview
          image={image}
          style={{
            position: "absolute",
            width: 160,
            height: 200,
            top: 0,
            left: 0,
          }}
        />
        <ImagePreview
          id="topImage"
          image={publicImage}
          style={{
            position: "absolute",
            width: 160,
            height: 200,
            bottom: 0,
            right: 0,
            transition: "opacity 1s",
          }}
        />
      </div>
    )}
    {...props}
  />
)

export default PVAModal1
