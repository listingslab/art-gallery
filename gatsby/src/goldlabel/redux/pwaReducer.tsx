import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../../types"

const initialState: PwaReduxShape = {
  bootTime: Date.now(),
  darkmode: false,
  books: true,
  pages: true,
  route: { href:null},
  authing: false,
  sharing: false,
  navOpen: true,
  settings: false,
  account: false,
  addListing: false,
  user: null,
  
}

export const pwaSlice = createSlice({
  name: "goldlabel",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
