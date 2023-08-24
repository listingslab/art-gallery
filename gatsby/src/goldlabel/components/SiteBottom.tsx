import * as React from "react"
import {
  useTheme,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Container,
} from "@mui/material"
import {
  usePwaDispatch,
  resetRedux,
  Icon,
  usePwaSelect,
  selectPWA,
  toggleDarkmode,
} from "../../"

export default function SiteBottom(props: any) {
  const {children} = props
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const pwa = usePwaSelect(selectPWA)
  const {darkmode} = pwa
  return (
    <>
      
      <Box sx={{ pt: "90px", pb:"90px" }}>
        {children}
      </Box>
      
      <AppBar 
        position="fixed" 
        color="secondary" 
        sx={{ 
          top: "auto", 
          bottom: 0,
          boxShadow: "none",
          background: theme.palette.background.default,
        }}>
           <Container maxWidth="md">
              <Toolbar>
                  <Box sx={{flexGrow:1}} />

                  

                  
                  <IconButton 
                    onClick={() => {
                      dispatch(toggleDarkmode(!darkmode))
                    }}
                    color="primary">
                    <Icon icon={darkmode ? "light" : "dark"} />
                  </IconButton>

                  {/* <Account /> */}

                  <IconButton 
                    onClick={() => {
                      dispatch(resetRedux())
                    }}
                    color="primary">
                    <Icon icon="refresh" />
                  </IconButton>
                  
                  <Box sx={{flexGrow:1}} />
                </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
