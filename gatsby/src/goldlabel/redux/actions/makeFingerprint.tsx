import { 
  store, 
  setPwaKey,
} from "../../../"
import FingerprintJS from "@fingerprintjs/fingerprintjs"

export const makeFingerprint =
(): any =>
async (dispatch: any) => {
  try {
    const {tings} = store.getState()
    // console.log ("makeFingerprint, tings", tings)
    const getVisitorId = async () => {
      const fp = await FingerprintJS.load()
      const { visitorId } = await fp.get()
      dispatch(setPwaKey({ key: "tings", value: {
                ...tings, 
                fingerprint: visitorId,
                done: true,
              }}))
    }
    getVisitorId()
  } catch (error: any) {
    console.log("Action error: makeFingerprint", error)
  }
}
