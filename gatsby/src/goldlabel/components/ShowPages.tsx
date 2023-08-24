import * as React from "react"
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Rating,
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
                stars,
                bookSlug,
                image,
                path,
                icon,
              } = frontmatter
              if (bookSlug === "home") return null
              
              return <Grid
                        item xs={12} md={6}
                        key={`${i}`}>
                          <CardActionArea onClick={(e: React.MouseEvent) => {
                              e.preventDefault()
                              window.open(path, "_self")
                            }}>
                            <CardHeader  
                              avatar={<Icon icon={icon} color="primary" />}
                              title={<Font>{title}</Font>}
                              subheader={stars ? <Rating value={stars} readOnly /> : null }
                            />
                            {image ? <CardMedia 
                                sx={{mx:1}}
                                height={120}
                                src={image}
                                component={"img"}
                              /> : null }
                              
                          </CardActionArea>
                      </Grid>
            })}
          </Grid>
  );
}


/*

avatar={<Icon icon={icon} color="primary" />}

*/