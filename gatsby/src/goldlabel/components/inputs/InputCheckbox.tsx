import React from "react"
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material"

export function InputCheckbox(props: any) {
  const {
    label,
    checked,
    onClick,
  } = props

  return (<>
            <FormGroup>
              <FormControlLabel 
                label={label}
                control={
                  <Checkbox
                    onClick={onClick}
                    checked={checked}
                    color="secondary"
                  />
                }
            />
            </FormGroup>
        </>
  )
}
