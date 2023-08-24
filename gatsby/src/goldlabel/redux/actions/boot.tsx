import { AppThunk } from "../store"
import { setPwaKey } from "../../.."
import {
  store,
  notify,
} from "../../../"

export const boot = (): any => async (dispatch: any) => {
    try {
      const sinceBoot = Date.now() - store.getState().bootTime
      if (sinceBoot > 750) { 
        dispatch(setPwaKey({ key: "bootTime", value: Date.now() }))
      }
    } catch (error: any) {
      console.log("Action error: boot", error)
    }
  }
