import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import { GridProvider } from './contexts/GridContext.jsx';
import Header from './components/Header.jsx';
import { UrlEncoder } from './lib/UrlEncoder.js';
import { ToolbarProvider } from './contexts/ToolbarContext.jsx';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("g") || "";

  return (
    <ToolbarProvider>
      <GridProvider initialGrid={UrlEncoder.decode(token)}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <Header />
          <Toolbar />
          <Grid />
        </div>
      </GridProvider>
    </ToolbarProvider>
  );
};

export default App;
