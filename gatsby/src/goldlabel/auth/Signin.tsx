import React from "react"
import {
  Box,
  Button,
  CardContent,
  CardActions,
} from "@mui/material"
import {
  firebaseLogin,
  usePwaDispatch,
  InputEmail,
  InputPassword,
  notify,
} from "../../"

export function Signin() {
  const dispatch = usePwaDispatch()
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const signinToFirebase = () => {
    if (email !== "" && password !== ""){
      dispatch(firebaseLogin(email, password))
    }else{
      dispatch(notify("warning", "Email and password missing"))
    }
  }
  let cta = "Sign in"
  return (<>
              <Box sx={{my:1}}>
                    <Box sx={{my:2}}>
                      <InputEmail onChange={setEmail} />
                    </Box>
                    <Box sx={{my:2}}>
                      <InputPassword  onChange={setPassword} />
                    </Box>
                    <Box sx={{my:2}}>
                      <Button 
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={signinToFirebase}>
                        {cta}
                      </Button>
                    </Box>
              </Box>
        </>
  )
}
