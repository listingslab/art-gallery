import { getAuth, onAuthStateChanged } from "firebase/auth"
import { setPwaKey } from "../../"
import {store} from "../redux/store"

export const authListener = () => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        console.log("onAuthStateChanged user", user)
        if (user) {
          store.dispatch(setPwaKey({ key: "user", value: "here users"}))
        } else {
          store.dispatch(setPwaKey({ key: "user", value: "no user"}))
        }
      });
    return true
}
