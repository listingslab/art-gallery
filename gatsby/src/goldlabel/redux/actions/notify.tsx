import {
    AlertColor,
} from "@mui/material"
import { setPwaKey } from "../../../"
// import { NotifyShape } from "../../../types"
export const notify =
  (severity: AlertColor, message: string): any =>
  async (dispatch: any) => {
    try {
        const notifyObj: any = {
            severity, 
            message,
        }
        dispatch(setPwaKey({ key: "notifyer", value: notifyObj }))
    } catch (error: any) {
      console.log("Action error: notify", error)
    }
  }
