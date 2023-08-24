import * as React from "react"
import {goldlabelConfig} from "../goldlabelConfig"
import {
  Box,
  CardHeader,
  Button,
  Dialog,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,  
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  toggleAddListing,
  toggleAccount,
  selectPWA,
  Icon,
  Font,

} from "../../"

export default function AddListing() {

  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {addListing} = pwa
  const {
    contexts, 
    siteType,
  } = goldlabelConfig
  const context = contexts[siteType]
  const {
    addListingText,
  } = context

  const closeAddListing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleAddListing(false))
  }
  const openAddListing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleAddListing(true))
  }

  return <>
  <Box sx={{ display: "block"}}>
    
    <List>
    
      <ListItemButton onClick={(e) => {
                          openAddListing(e)
                        }}>
        <ListItemIcon>
          <Icon icon="addListing" color="primary"/>
        </ListItemIcon>
      <Font>Add Listing</Font>
      </ListItemButton>
    </List>
      
    <Dialog 
          open={addListing}
          fullWidth
          // fullScreen
          onClose={closeAddListing}>
            <DialogTitle>
              <CardHeader 
                avatar={<Icon icon="addYourself"/>}
                action={<IconButton onClick={closeAddListing}>
                          <Icon icon={"close"} />
                        </IconButton>}
                title={<Font variant="title">
                {addListingText}
              </Font>}
              />
            </DialogTitle>
            <DialogContent>
              <Font variant="title">
                Even if you don't have an account, you can still create a new listing here
              </Font>
              
            </DialogContent>
            <DialogActions>
              <Button
                color="inherit"
                onClick={closeAddListing}
              > 
              Cancel&nbsp;
              
                <Icon icon="close"/>
              </Button>
            </DialogActions>
      </Dialog>  
    </Box>
  </>
}

/*
<pre>addListingText{JSON.stringify(addListing, null, 2)}</pre>
  sign in, sign out, avatar, email, location
*/