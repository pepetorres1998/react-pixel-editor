import Grid from './components/Grid';
import Toolbar from './components/Toolbar';
import Header from './components/Header.jsx';
import { UrlEncoder } from './lib/UrlEncoder.js';
import { useEffect } from 'react';
import { useGrid } from './contexts/GridContext.jsx';

const App = () => {
  const { setGridColors } = useGrid();

  const params = new URLSearchParams(window.location.search);
  const token = params.get("g") || "";

  useEffect(() => {
    let cancelled = false;

    Promise.resolve(UrlEncoder.decode(token))
      .then(grid => {
        if (cancelled || grid.length === 0) return;     // ignore late/stale result
        setGridColors(grid);
      })
      .catch(err => {
        if (cancelled) return;     // ignore late errors too
        console.error(err);
      });

    return () => { cancelled = true; };
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <Toolbar />
      <Grid />
    </div>
  );
};

export default App;
