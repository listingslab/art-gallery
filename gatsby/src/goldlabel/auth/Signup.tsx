import React from "react"
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import slugify from "slugify"
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  firebaseLogin,
  usePwaDispatch,
  InputEmail,
  InputPassword,
  InputString,
} from "../../"


export function Signup() {
  const dispatch = usePwaDispatch()
  // const pwa = usePwaSelect(selectPWA)
  // const theme = useTheme()
  // const titleCol = theme.palette.primary.main
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [displayName, setDisplayName] = React.useState<string>("")

  const doLogin = () => {
    dispatch(firebaseLogin(email, password))
  }
  // let title = "Sign up"
  let cta = "SIGN UP"

  return (<>
              <Card sx={{my:1}}>
                    
                    <CardContent>
                      <Box sx={{my:2}}>
                        <Font>
                        All Users need a human readable name (non unique Name)
                        and a slug which works well if sent as a URL parameter
                        </Font>
                      </Box>
                      
                      <InputString 
                        label={"Name"}
                        onChange={setDisplayName}
                        value={displayName}
                        required={true}
                        // helperText="(Display name doesn't have to be unique)"
                      />

                      <Font>
                        {slugify(displayName, {
                                  replacement: '-',  // replace spaces with replacement character, defaults to `-`
                                  remove: undefined, // remove characters that match regex, defaults to `undefined`
                                  lower: true,      // convert to lower case, defaults to `false`
                                  strict: true,     // strip special characters except replacement, defaults to `false`
                                  locale: 'vi',      // language code of the locale to use
                                  trim: true         // trim leading and trailing replacement chars, defaults to `true`
                                })}
                      </Font>
                  

                  </CardContent>
                  
                  <CardActionArea sx={{}}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      console.log("authMode", authMode)
                      // doLogin()
                    }}>
                      <CardContent>
                    <CardHeader 
                      title={<Font>
                              {cta}
                            </Font>}
                      action={<Icon icon="right" />}
                    />
                    <Box sx={{flexGrow:1}} />
                    </CardContent>
                  </CardActionArea>
              </Card>
        </>
  )
}
