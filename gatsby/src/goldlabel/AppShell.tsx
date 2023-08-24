import React from "react"
import "./theme/default.css"
import {
  SEO,
  WrapRedux,
  MuiTheme,
  App,
} from "../"
import { CssBaseline } from "@mui/material"

export default function AppShell(props: any) {
  const {
    appData,
    type,
    book,
    children,
    location,
  } = props

  return (<>
            <SEO appData={appData} type={type} book={book}/>
            <WrapRedux>
              <MuiTheme>
                <CssBaseline />
                <App location={location} appData={appData} type={type} book={book} >
                  {children}
                </App>
              </MuiTheme>
            </WrapRedux>
          </>)
}
