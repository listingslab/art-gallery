import React from "react"
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import {
  usePwaDispatch,  
} from "../../../"
// import {
//   updateEditDoc,
//   updateNewDoc,
// } from "../../../Backoffice"

export function EditableBoolean(props: any) {
  let fieldValue = null
  const dispatch = usePwaDispatch()
  const {
    field,
    fieldData,
    mode,
  } = props
  const {title, name} = field
  if (fieldData[field.name]) fieldValue = fieldData[field.name]
  
  return (<Box sx={{my:1}}>
            <FormGroup>
            <FormControlLabel 
                labelPlacement="start" 
                control={<Checkbox 
                            checked={fieldValue || false}
                        />} 
                label={title} 
                onChange={(e:any) => {
                    // if (mode === "edit") dispatch(updateEditDoc(name, !fieldValue))
                    // if (mode === "create") dispatch(updateNewDoc(name, !fieldValue))
                }}
            />
            </FormGroup>
          </Box>)
}
