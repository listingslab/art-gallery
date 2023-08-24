import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"
import {
  usePwaDispatch,  
} from "../../../"
// import {
//   updateEditDoc,
//   updateNewDoc,
// } from "../../../Backoffice"

export function InputString(props: any) {

  const {
    value,
    onChange,
    helperText,
    label,
    required,
  } = props

  return (<>
          <Box sx={{my:1}}>
            <TextField 
              label={label}
              required={required}
              value={value}
              fullWidth
              onChange={(e:any) => {
                onChange(e.target.value)
              }}
              helperText={helperText || null}
            />
          </Box>
        </>
  )
}
