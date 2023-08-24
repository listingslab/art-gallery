import * as React from "react"
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CardHeader,
  CardActionArea,
  Collapse,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleSettings,
  resetRedux,
  SelectTheme,
} from "../../"


export default function Settings() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {settings} = pwa
  const themeSelector = false

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleSettings(!settings))
  }
  
  return (
    <Box sx={{ display: "block"}}>
      <CardActionArea onClick={handleClick}>
        <CardHeader 
          avatar={<Icon icon="settings" />}
          title={<Font>
                    Settings
                  </Font>}
        />
      </CardActionArea>
      <Box>
        <Collapse in={settings} timeout="auto" unmountOnExit>
          {themeSelector ? <SelectTheme /> : null }
          <List>
              <ListItemButton 
                onClick={() => {
                  dispatch(resetRedux())
                }}>
                
                <ListItemText 
                  primary={<Font>
                            Reset
                          </Font>}
                />
                <ListItemIcon>
                  <Icon icon="refresh"/>
                </ListItemIcon>
              </ListItemButton>
          </List>
          
        </Collapse>
      </Box>
    </Box>
  );
}

/*
<pre>{JSON.stringify(href, null, 2)}</pre>
*/