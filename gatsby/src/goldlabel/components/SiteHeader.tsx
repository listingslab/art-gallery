import React from "react"
import {
  useTheme,
  useMediaQuery,
  Avatar,
  Box,
  CardHeader,
  Container,
  AppBar,
  Toolbar,
  CardActionArea,
} from "@mui/material"
import {
  // useSiteMetadata,
  usePwaDispatch,
  navigate,
  Font,
  Icon,
  toggleBooks,
  usePwaSelect,
  selectPWA,
} from "../../"

export default function SiteHeader(props:any) {
  
  let pageTitle: string = "No pageTitle :("
  let pageTagline: string = "No pageTagline :("
  let pageIcon: string = "listingslab"
  const {appData} = props
  if(!appData.data) return null
  pageTitle = appData.data.markdownRemark.frontmatter.title
  pageTagline = appData.data.markdownRemark.frontmatter.description
  pageIcon = appData.data.markdownRemark.frontmatter.icon
  
  const dispatch = usePwaDispatch()
  // const siteMeta = useSiteMetadata()
  // const {siteTitle, siteDescription} = siteMeta
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const pwa = usePwaSelect(selectPWA)
  const {books} = pwa
  

  return (<>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar sx={{boxShadow: "none", background: theme.palette.background.default}}>
                  <Toolbar>
                  <Container maxWidth="md">
                    <CardActionArea
                      disableRipple
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        if (isBig){
                          dispatch(navigate("/", "_self"))
                        } else {
                          dispatch(toggleBooks(!books))
                        }
                      }}>
                        <CardHeader 
                          avatar={<Avatar src={"/svg/iOS.svg"} alt={pageTagline} />}
                          title={isBig ? <Font variant="title" >
                                            {pageTitle}
                                          </Font> : <Font variant="small" >
                                            {pageTitle}
                                          </Font>}
                          subheader={ isBig ? <Font variant="small">
                                      {pageTagline}
                                    </Font> : <Font variant="small">
                                      {pageTagline}
                                    </Font> }
                        />
                    </CardActionArea>
                    </Container>
                  </Toolbar>
              </AppBar>
            </Box>
            </>)
}

/*

                    <pre>{JSON.stringify(page, null, 2)}</pre>
*/