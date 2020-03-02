import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ColorProvider } from "./contexts/color";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import SelectColorsClass from "./components/SelectColorsClass";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColorsClass />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
