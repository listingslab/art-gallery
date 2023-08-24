import * as React from "react"
import {
  Box,
  Grid,
  CardActionArea,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePagesByBookslug,
} from "../../"


export default function ShowPages(props: any) {
  const {frontmatter} = props
  if (!frontmatter) return null
  const {
    bookSlug,
  } = frontmatter
  const pages = usePagesByBookslug(bookSlug)
  const dispatch = usePwaDispatch()

  return (<Grid container spacing={1}>
            {pages.map((item: any, i: number) => {
              const {frontmatter} = item
              const {
                title,
                description,
                icon,
                path,
                bookSlug,
              } = frontmatter
              if (bookSlug === "home") return null
              
              return <Grid
                        item xs={12}
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
  );
}
