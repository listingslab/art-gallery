import * as React from "react"
import { graphql } from "gatsby"
import {
  useTheme,
  useMediaQuery,
  Alert,
  Box,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material"
import {
  AppShell,
  Font,
  Books,
  ShowPages,
} from "../"

export default function MarkdownPage(data:any) {
  const { markdownRemark } = data.data
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  if(!markdownRemark) return <>
    <Alert
      severity="error"
      sx={{m:2}}
      onClose={() => {
        window.open("/", "_self")
      }}>
      You'll need to clean and rebuild gatsby
    </Alert></>
  const { frontmatter, html } = markdownRemark
  if (!frontmatter) return null
  const {
    image,
    bookcover,
    book
  } = frontmatter  

  return (
    <AppShell appData={{...data}}>
      <Grid container spacing={1}>

        <Grid item xs={12} md={4}>
          <Books frontmatter={frontmatter}/>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Box sx={{mb:2}}>
            
              
              <CardContent>
                <Grid container spacing={1}>
                    {!bookcover ? 
                    <Grid item xs={12}>
                      <CardMedia
                        height={isBig ? 320 : 150}
                        component={"img"}
                        src={image}
                      />
                    </Grid> 
                    : null }

                    {bookcover ? <>
                      <ShowPages frontmatter={frontmatter}/>
                    </> : null}
                
                    <Grid item xs={12}>
                      <Font>
                        <span dangerouslySetInnerHTML={{ __html: html }}/>
                      </Font>
                    </Grid>
                    
                </Grid>
              </CardContent>
                        
          </Box>         
        </Grid>
        
      </Grid>
    </AppShell>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        order
        bookSlug
        bookcover
        title
        description
        path
        keywords
        image
        icon
      }
    }
  }
`
