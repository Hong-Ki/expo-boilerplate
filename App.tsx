import React, { useState } from "react";
import { Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import themes, { Theme, Themes } from "./constants/theme";
import { useBrowserTheme } from "./hooks/useBrowserTheme";

const StyledRootView = styled.View`
  ${({ theme }) => {
    const {
      colorSet: { background, text },
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
        <Text>Hello! Miong's boilerplate</Text>
      </StyledRootView>
    </ThemeProvider>
  );
}
