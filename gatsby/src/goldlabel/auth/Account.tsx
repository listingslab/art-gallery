import * as React from "react"
import {goldlabelConfig} from "../goldlabelConfig"
import {
  useTheme,
  useMediaQuery,
  Avatar,
  Box,
  CardHeader,
  Dialog,
  Button,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleAccount,  
  Icon,
  Font,
  Signin,
  firebaseSignout,
  AddListing,
} from "../../"

export default function Account() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const {
    account, 
    authing,
  } = pwa
  const {contexts, siteType} = goldlabelConfig
  const context = contexts[siteType]
  const {
    backofficeText,
  } = context
  const {user} = pwa
  let verified = false
  if (user){
    verified = user.emailVerified
  }
  
  const avatarSrc = "/svg/characters/punk.svg" 
  // console.log ("providerData", providerData[0])

  const signoutOfFirebase = () => {
    dispatch(firebaseSignout())
  }

  const closeAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleAccount(false))
  }

  const openAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch (toggleAccount(true))
  }


  return <>
  <Box sx={{ display: "block"}}>
    
      <IconButton  onClick={openAccount}>
        <Icon icon="backoffice" color="primary" /> 
      </IconButton>
      
      <Dialog 
          open={account}
          fullWidth
          fullScreen={!isBig}
          maxWidth={!user ? "xs" : "md" }
          onClose={closeAccount}>

            <DialogTitle>
              {}
              <CardHeader 
                avatar={<Icon icon="backoffice" color="primary"/>}
                action={<IconButton
                          onClick={closeAccount}>
                          <Icon icon={"close"} color="primary" />
                        </IconButton>}
                title={<Font variant="title">
                  {backofficeText}
                  
              </Font>}
              />
            </DialogTitle>
             
            
            <DialogContent>
                  {user ? <Font>Signed in as {user.email}</Font> : null }
              
          
              <Grid container spacing={1}>
                {!user ? <Grid item xs={12}>
                  <Signin />
                </Grid> : null }   

                {user ? <Grid item xs={12}>
                  <AddListing /> 
                </Grid> : null}                 
              </Grid>
          
            </DialogContent>
            
            <DialogActions sx={{mx:2}}>
              {user ? <>
              <Button
                color="secondary"
                onClick={signoutOfFirebase}
              >
                <Icon icon="exit" color="primary"/>
              </Button>
              </> : null }
            </DialogActions>
            
      </Dialog>  
    </Box>
  </>
}
