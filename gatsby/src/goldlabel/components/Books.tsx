import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePagesByBookslug,
  navigate,
  usePwaSelect,
  useBookCovers,
  selectPWA,
  toggleBooks,
} from "../../"

export default function Books(props: any) {
  const {frontmatter} = props
  const {
    bookSlug,
  } = frontmatter
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const pageList: Array<any> = usePagesByBookslug(bookSlug)
  const allBooks = useBookCovers()
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {
    books,
  } = pwa

  React.useEffect(() => {
    // if(!isBig && books) dispatch(toggleBooks(false))
    if(isBig && !books) dispatch(toggleBooks(true))
  }, [isBig, books, dispatch])
  
  return (
    <Box sx={{ display: "block"}}>
      
        <Collapse in={books} timeout="auto" unmountOnExit>
          <List>
            {allBooks.map((item: any, i: number) => {
              const {frontmatter} = item
              const {
                title,
                icon,
                path,
              } = frontmatter
              const itemBookSlug = frontmatter.bookSlug
              return <Box key={`book_${i}`}>
                        <ListItemButton
                          onClick={() => {
                            dispatch(toggleBooks(false))
                            dispatch(navigate(path, "_self"))
                          }}>
                          <ListItemIcon>
                            <Icon icon={icon} color="primary"/>
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Font variant="small">
                                      {title}
                                    </Font>}
                          />
                        </ListItemButton>
                        {bookSlug === itemBookSlug ? <>
                          {pageList.length ? <>
                            {pageList.map((item: any, i: number) => {
                              const {
                                frontmatter,
                              } = item
                              const {
                                title,
                                icon,
                                path,
                              } = frontmatter
                              return <Box key={`page_${i}`} sx={{ml:2}}>
                                      <ListItemButton
                                        onClick={() => {
                                          dispatch(navigate(path, "_self"))
                                        }}>
                                          <ListItemIcon>
                                            <Icon icon={icon} color="primary"/>
                                          </ListItemIcon>
                                        <Font variant="small">
                                          {title}
                                         </Font>
                                      </ListItemButton>
                                    </Box>
                            })}
                          </> : null }
                        </> : null}
                      </Box>
            })}
          </List>
        </Collapse>
      </Box>
  );
}

/*
<pre>{JSON.stringify(href, null, 2)}</pre>
*/