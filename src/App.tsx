
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import RoutesList from './Routes/Routes';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Header />
      <RoutesList />
      <Footer />

    </ThemeProvider>

  );
}

export default App;
