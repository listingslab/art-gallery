// import {
//     AlertColor,
// } from "@mui/material"
// import { setPwaKey } from "../../../"
// import { NotifyShape } from "../../../types"
export const navigate =
  (url: string, target: string): any =>
  async (dispatch: any) => {
    try {
      setTimeout(() => {
        window.open(url, target)
      }, 100)
    } catch (error: any) {
      console.log("Action error: navigate", error)
    }
  }

