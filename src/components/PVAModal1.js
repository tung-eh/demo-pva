import React, { useState } from "react"
import styled from "styled-components"

import RadioButtons from "./RadioButtons"

const Wrapper = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 5px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PVAModal1 = ({ image }) => {
  const [pvaType, setPvaType] = useState(0)

  return (
    <Wrapper>
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
        <RadioButtons value={pvaType} onChange={setPvaType} />
        <div
          style={{
            width: 200,
            height: 240,
            padding: 4,
            border: "1px solid #c4c4c4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} style={{ maxWidth: "100%", maxHeight: "100%" }} />
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

export default PVAModal1
