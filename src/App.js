import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import FullCalendarPage from "./FullcalendarPage";
import AsyncAutoComplete from "./AsyncAutoComplete";
import "./main.css";
const fontSize = 14;
const htmlFontSize = 12;
const coef = fontSize / 14;
const theme = createMuiTheme({
  typography: {
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <AsyncAutoComplete /> */}
      <FullCalendarPage />

      {/* <AutocompleteTextField />
      <Select />
      <TextField />
      <TimePicker />
      <DatePicker />
      <MultiSelector />
      <DragablePopup /> */}
    </MuiThemeProvider>

    // <TextField />
    // <Select />
  );
}

export default App;
