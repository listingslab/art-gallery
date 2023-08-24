import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
// import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

export default function SelectTheme() {
  const [theme, setTheme] = React.useState("gold")

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
        <InputLabel id="select-theme">
            Theme
        </InputLabel>
        <Select
          labelId="select-theme"
          id="demo-simple-select-helper"
          value={theme}
          label="Theme"
          onChange={handleChange}
        >
          <MenuItem value="gold">
            <em>Gold</em>
          </MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
          <MenuItem value={"hotpink"}>Hot Pink</MenuItem>
        </Select>
        {/* <FormHelperText>
            Learn how to create your own
        </FormHelperText> */}
      </FormControl>
      
    </div>
  )
}
