import ProcessImage from "react-imgpro"
import React, { useState } from "react"
import styled from "styled-components"

import ImageInput from "./ImageInput"
import ImagePreview from "./ImagePreview"
import RadioButtons from "./RadioButtons"
import loadingIcon from "../images/animated_logo.gif"

const Wrapper = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 5px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HiddenProcessImage = styled(ProcessImage)`
  display: none;
`

const PVAModal = ({ image, renderPreview, ...props }) => {
  const [pvaType, setPvaType] = useState(0)
  const [bnwImage, setBnwImage] = useState(null)
  const [customImage, setCustomImage] = useState(null)

  return (
    <Wrapper {...props}>
      {image && (
        <HiddenProcessImage
          image={image}
          greyscale
          processedImage={(src, err) => setBnwImage(src)}
          storage={false}
        />
      )}
      <h2
        style={{
          margin: "0 40px",
          fontSize: 20,
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        How would you like people to see your artwork?
      </h2>
      <div
        style={{
          display: "flex",
          margin: "40px 0",
          justifyContent: "space-between",
          alignSelf: "stretch",
        }}
      >
        <div>
          <RadioButtons value={pvaType} onChange={setPvaType} />
          {pvaType === 2 && (
            <ImageInput onChange={setCustomImage} style={{ width: 170 }} />
          )}
        </div>
        <div style={{ width: 200, height: 240 }}>
          {pvaType === 0 ? (
            <ImagePreview image={image} />
          ) : pvaType === 1 && !bnwImage ? (
            <ImagePreview image={loadingIcon} imageProps={{ width: 50 }} />
          ) : pvaType === 2 && !customImage ? (
            <ImagePreview fallback="Please choose image" />
          ) : (
            renderPreview(image, pvaType === 1 ? bnwImage : customImage)
          )}
        </div>
      </div>
      <button
        style={{
          width: 160,
          border: "3px solid black",
          fontSize: 14,
          padding: "10px 20px",
        }}
      >
        Mint
      </button>
      <a
        style={{
          textDecoration: "underline",
          fontSize: 14,
          color: "rgba(0,0,0,0.5)",
          marginTop: 10,
        }}
      >
        Go back
      </a>
    </Wrapper>
  )
}

export default PVAModal
