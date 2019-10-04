import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  margin-bottom: 20px;
  width: 150px;
  color: ${props => props.color};
  border: 1px solid;
  border-color: ${props => props.color};
  border-radius: 4px;
  padding: 7px;
  font-size: 14px;
  display: flex;
  align-items: center;
`

const Circle = styled.div`
  width: ${props => props.d}px;
  height: ${props => props.d}px;
  border: 1px solid;
  border-radius: 50%;
  border-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RadioButton = ({ active, onClick, children }) => {
  const color = active ? "black" : "rgba(0,0,0,0.5)"
  return (
    <Button color={color} onClick={onClick}>
      <Circle d={18} style={{ marginRight: 10, borderColor: color }}>
        {active && <Circle d={10} style={{ backgroundColor: "black" }} />}
      </Circle>
      {children}
    </Button>
  )
}

const options = ["Original", "Black & white", "Customized"]

const RadioButtons = ({ value, onChange }) => {
  return (
    <Wrapper>
      {options.map((label, index) => (
        <RadioButton
          key={index}
          active={index === value}
          onClick={() => onChange(index)}
        >
          {label}
        </RadioButton>
      ))}
    </Wrapper>
  )
}

export default RadioButtons
