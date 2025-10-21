import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GridProvider } from "./contexts/GridContext.jsx";
import { ToolbarProvider } from "./contexts/ToolbarContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridProvider>
      <ToolbarProvider>
        <App />
      </ToolbarProvider>
    </GridProvider>
  </StrictMode>,
)
