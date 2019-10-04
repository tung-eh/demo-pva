import React from "react"

const ImagePreview = ({ image, fallback, style, imageProps, ...props }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: 4,
      backgroundColor: "white",
      border: "1px solid #c4c4c4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...style,
    }}
    {...props}
  >
    {!image && fallback ? (
      fallback
    ) : (
      <img
        src={image}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        {...imageProps}
      />
    )}
  </div>
)

export default ImagePreview
