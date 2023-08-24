import React from "react"
import "./fonts/gotham.css"
import { useTheme, Typography } from "@mui/material"

export function Font(props: any) {
  const textFont = "GothamBold"
  const theme = useTheme()
  const { variant, fontSize, color, children, align, width } = props  
  let textAlign = "left"
  let w: any = "100%"
  let c = theme.palette.text.primary
  if (color) c = color
  if (color === "primary") c = theme.palette.text.primary
  if (color === "secondary") c = theme.palette.text.secondary
  if (width) w = width
  let textfontSize: any = "0.9rem"
  // let lineHeight: any = "1.1rem"
  if (align) textAlign = align
  if (variant === "title") {
    textfontSize = "1.1rem"
    // c = theme.palette.primary.main
    // lineHeight = "1rem"
  }
  if (variant === "small") {
    textfontSize = "0.8rem"
    // lineHeight = "1rem"
  }
  if (variant === "subheader") {
    textfontSize = "0.9rem"
    // lineHeight = "1rem"
  }
  if (variant === "giant") {
    textfontSize = "1.3rem"
    // lineHeight = "1.6rem"
  }

  if (fontSize) {
    // lineHeight = fontSize
    textfontSize = fontSize
  }
  return (
    <Typography
      // noWrap={true}
      component="span"
      sx={{
        // border: "1px solid red",
        display: "block",
        overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        // lineHeight,
        color: c,
        width: w,
      }}
    >
      {children}
    </Typography>
  )
}
