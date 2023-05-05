import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Teams from './components/Teams';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <ProductGrid />
        <Teams />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
