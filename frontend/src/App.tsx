import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ marginBlock: '30px' }}>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
