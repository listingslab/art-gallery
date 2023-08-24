import * as React from "react"
import { AppShell } from "../"
import {
  Alert,
  Container,
} from "@mui/material"
import {
  Font,
} from "../"

export default function NotFoundPage(data: any) {

  console.log("{...data}", {...data})
  return <AppShell appData={{...data}}>
            <Container maxWidth="md">
            <Alert
              sx={{m:1, mt:3}}
              severity="warning">
                <Font>404. Nothing found the path {data.location.pathname}</Font>
            </Alert>
            </Container>
          </AppShell>
}
