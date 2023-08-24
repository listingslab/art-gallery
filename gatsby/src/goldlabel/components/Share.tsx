import * as React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import {
  Box,
  IconButton,
  Collapse,
  useTheme,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  useSiteMetadata,
  selectPWA,
  setShare,
} from "../../"

export default function Share(props: any) {
  const {title} = props
  const meta = useSiteMetadata()
  const theme = useTheme()
  const iconColor = theme.palette.primary.main
  const {siteUrl} = meta
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {route, sharing} = pwa
  if (!route) return null
  const {href} = route

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch (setShare(!sharing))
  }
  
  return (
    <Box sx={{ display: "flex"}}>
      <Box>
        <IconButton
          color="primary"
          sx={{m:0.5}}
          id="btnShare"
          onClick={handleClick}>
          <Icon icon={sharing ? "right" : "share"}/>
        </IconButton>
      </Box>
      <Collapse in={sharing} timeout="auto" unmountOnExit>
        <Box sx={{mt: 0.5}}>
          <FacebookShareButton 
            url={href || siteUrl}
            quote={title}>
            <FacebookIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </FacebookShareButton>

          <TwitterShareButton 
            title={title}
            url={href || siteUrl}
          >
            <TwitterIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </TwitterShareButton>

          <LinkedinShareButton 
            url={href || siteUrl}
          >
            <LinkedinIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </LinkedinShareButton>

          <EmailShareButton
            url={href || siteUrl}
            subject={title}
            body={title}
          >
            <EmailIcon
              bgStyle={{ fill: "none" }}
              iconFillColor={iconColor}
              size={40}
              round
            />
          </EmailShareButton>


        </Box>
      </Collapse>
    </Box>
  );
}

/*
<pre>{JSON.stringify(href, null, 2)}</pre>
*/