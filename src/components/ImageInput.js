import React from "react"

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const ImageInput = ({ value, onChange, ...props }) => {
  console.log({ onChange })
  const handleChange = async e => {
    const { files } = e.target
    console.log({ files })
    if (files.length === 0) return

    const file = files.item(0)
    console.log({ file })

    onChange(await toBase64(file))
  }

  return <input type="file" onChange={handleChange} {...props} />
}

export default ImageInput
