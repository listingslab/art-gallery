import * as React from "react"
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,  
  CardActionArea,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePagesByBookslug,
  navigate,
  usePwaSelect,
  selectPWA,
  togglePages,
} from "../../"

export default function Pages(props: any) {
  const {frontmatter} = props
  const pwa = usePwaSelect(selectPWA)
  const {pages} = pwa
  const dispatch = usePwaDispatch()
  const {
    bookSlug,
    bookcover,
  } = frontmatter
  const pageList: Array<any> = usePagesByBookslug(bookSlug)

  
  
  React.useEffect(() => {
    if(pageList.length) {
      dispatch(togglePages(true))
    }
    if (!bookcover) dispatch(togglePages(true))
    // if (bookcover) dispatch(togglePages(false))
  }, [bookcover, dispatch])

  if (!pageList.length) return null
  
  return (
    <Box sx={{ display: "block"}}>
        <Collapse in={pages} timeout="auto" unmountOnExit>
            <List>
              {pageList.map((item: any, i: number) => {
                const {frontmatter} = item
                const {
                  title,
                  icon,
                  path,
                } = frontmatter
                return <ListItemButton 
                          key={`listing_${i}`}
                          onClick={(e) => {
                            dispatch(navigate(path, "_self"))
                        }}>
                          <ListItemIcon>
                            <Icon icon={icon} color="primary"/>
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Font variant="small">{title}</Font>}
                          />
                      </ListItemButton>
              })}
            </List>
      </Collapse>
    </Box>
  );
}







