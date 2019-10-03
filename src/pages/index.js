import React, { useState } from "react"
import PVAModal1 from "../components/PVAModal1"

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const IndexPage = () => {
  const [image, setImage] = useState(null)

  const handleChange = async e => {
    const { files } = e.target
    if (files.length === 0) return

    const file = files.item(0)

    setImage(await toBase64(file))
  }

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "100vh" }}>
      <div style={{ marginBottom: 30, backgroundColor: "white" }}>
        <input type="file" onChange={handleChange} />
      </div>
      <div>
        <PVAModal1 image={image} />
      </div>
    </div>
  )
}

export default IndexPage
