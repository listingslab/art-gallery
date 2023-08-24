import { 
  setPwaKey,
} from "../../../"

export const toggleDarkmode =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "darkmode", value}))
      // setTimeout(() => {
      //   window.location.reload()
      // }, 100)
    } catch (error: any) {
      console.log("Action error: toggleDarkmode", error)
    }
}
