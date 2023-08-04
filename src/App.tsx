import { ThemeProvider } from "styled-components";
import { MatchBreakpointsProvider } from "./contexts/MatchBreakpoints/Provider";
import Home from './views/Home'

import { dark } from "./theme";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <MatchBreakpointsProvider>
        <Home />
      </MatchBreakpointsProvider>
    </ThemeProvider>
  );
}

export default App;
