import * as React from "react"
import {goldlabelConfig} from "../goldlabelConfig"
import {
  useTheme,
  useMediaQuery,
  Box,
  Grid,
  CardActionArea,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  navigate,
  usePwaSelect,
  useBookCovers,
  selectPWA,
  toggleBooks,
} from "../../"

export default function ShowBooks() {
  // const meta = useSiteMetadata()
  const allBooks = useBookCovers()
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {
    books,
  } = pwa
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {contexts, siteType} = goldlabelConfig
  const context = contexts[siteType]
  const {
    booksNames,
  } = context

  React.useEffect(() => {
    if (!isBig){
      dispatch(toggleBooks(false))
    } else {
      dispatch(toggleBooks(true))
      
    }
  }, [isBig, dispatch])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleBooks(!books))
  }
  
  return (
    <Box sx={{ display: "block"}}>
      <Box sx={{mx: 0}}>        
          <Grid container spacing={1}>
            {allBooks.map((item: any, i: number) => {
              const {frontmatter} = item
              const {
                title,
                icon,
                path,
                bookSlug,
              } = frontmatter
              if (bookSlug === "home") return null
              
              return <Grid 
              item xs={12} md={6} lg={4}
              key={`${i}`}>
              <CardActionArea onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                window.open(path, "_self")
              }}>
                <CardHeader 
                  avatar={<Icon icon={icon} color="primary" />}
                  title={<Font>{title}</Font>}
                  // subheader={<Font variant="small">{description}</Font>}
                />
              </CardActionArea>
            </Grid>
            })}
          </Grid>

      </Box>
    </Box>
  );
}

/*
<pre>{JSON.stringify(href, null, 2)}</pre>
*/