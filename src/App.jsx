import Grid from './components/Grid';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Pixel Editor</h1>
      <Grid />
    </div>
  );
};

export default App;
