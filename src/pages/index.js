import React, { useState } from "react"

import ImageInput from "../components/ImageInput"
import PVAModal1 from "../components/PVAModal1"
import PVAModal2 from "../components/PVAModal2"

const IndexPage = () => {
  const [image, setImage] = useState(null)

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "100vh" }}>
      <div style={{ marginBottom: 30, backgroundColor: "white" }}>
        <ImageInput onChange={setImage} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PVAModal1 image={image} />
        <PVAModal2 image={image} />
      </div>
    </div>
  )
}

export default IndexPage
