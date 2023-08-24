import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { 
  setPwaKey,
  notify,
  toggleAccount,
} from "../../"

export const firebaseLogin = (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "authing", value: true}))
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          if (!user){
            dispatch(setPwaKey({ key: "user", value: null}))
            dispatch(notify("warning", `Signed out. Goodbye`))
          } else {
            dispatch(setPwaKey({ key: "user", value: user.user}))
          }
            dispatch(notify("success", `Welcome back ${user.user.email}`))
            dispatch(toggleAccount(false))
        })
        dispatch(setPwaKey({ key: "authing", value: false}))
      .catch((error) => {
        let message = error.message
        if (message.includes("auth/invalid-email")) message = `Invalid Email`
        if (message.includes("auth/user-not-found")) message = `${email} not found`
        if (message.includes("auth/wrong-password")) message = "Wrong password"
        dispatch(notify("info", message))
      });
    } catch (error: any) {
      console.log("Action error: firebaseLogin", error)
    }
}
