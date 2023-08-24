import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  setPwaKey,
} from "../../"

export default function Notifyer() {
  
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const { 
    notifyer, 
  } = pwa
  if( !notifyer ) return null
  let { severity, message } = notifyer;
  if ( typeof message !== "string") return null
  const closeSnackbar = () =>  dispatch(setPwaKey({
    key: "notifyer", 
    value: null 
  }))

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"bottom", 
        horizontal:"center" 
      }}
      autoHideDuration={4000}
      onClose={ closeSnackbar }
    >
      <Alert 
        variant="filled"
        onClose={ closeSnackbar } 
        severity={ severity }>
          { message }
      </Alert>
    </Snackbar>
  )
}
