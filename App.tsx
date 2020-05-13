import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import themes, { Theme, Themes } from "./src/constants/theme";
import { useBrowserTheme } from "./src/hooks/useBrowserTheme";
import Hello from "~/components/hello/Hello";

const StyledRootView = styled.View`
  ${({ theme }) => {
    const {
      colorSet: { background },
    } = theme as Theme;
    return `
    flex:1;
    align-items:center;
    justify-content:center;
    background-color: ${background};
  }
  `;
  }}
`;
export default function App() {
  const browserTheme = useBrowserTheme();
  const [theme, setTheme] = useState<Themes>(browserTheme);

  return (
    <ThemeProvider
      theme={themes[theme] || themes[browserTheme] || themes.light}
    >
      <StyledRootView>
        <Hello> This is Miong's Boilerplate</Hello>
      </StyledRootView>
    </ThemeProvider>
  );
}
