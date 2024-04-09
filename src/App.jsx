import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../utils/Themes";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {routes} from "./routes/routes"

import './App.css';
import { TrackingProvider } from '../conetxt/track';
import "./index.css";


const router = createBrowserRouter(routes)
function App() {
  const [darkMode, setDarkMode] = useState(true);
 
  return (
    <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <TrackingProvider>
    <RouterProvider router={router}/>
    </TrackingProvider>
    </ThemeProvider>
    </>
  )
}

export default App;
