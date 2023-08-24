import { 
  setPwaKey,
} from "../../../"

export const toggleBooks =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "books", value}))
    } catch (error: any) {
      console.log("Action error: toggleBooks", error)
    }
}
