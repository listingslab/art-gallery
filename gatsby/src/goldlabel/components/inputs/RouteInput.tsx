import React from "react"
import {
  Alert,
} from "@mui/material"
import {Font} from "../../../../"
import {EditableNumber} from "./EditableNumber"
import {EditableString} from "./EditableString"
import {EditableMultiline} from "./EditableMultiline"
import {EditableImage} from "./EditableImage"
import {EditableBoolean} from "./EditableBoolean"


export function RouteInput(props: any) {
  
  const {field, fieldData, mode} = props
  const {uiType} = field

  if (uiType === "EditableNumber") return <EditableNumber mode={mode} field={field} fieldData={fieldData} />
  if (uiType === "EditableString") return <EditableString mode={mode} field={field} fieldData={fieldData} />
  if (uiType === "EditableMultiline") return <EditableMultiline mode={mode} field={field} fieldData={fieldData} />
  if (uiType === "EditableImage") return <EditableImage mode={mode} field={field} fieldData={fieldData}  />
  if (uiType === "EditableBoolean") return <EditableBoolean mode={mode} field={field} fieldData={fieldData}  />  
  
  return <Alert severity="error">
          <Font color="black">
            UI Type "{uiType}" missing
            <pre>
              {JSON.stringify(field, null, 2)}
            </pre>
          </Font>
        </Alert>
}
