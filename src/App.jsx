import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Layout shell. When routing is added, <Home /> becomes an <Outlet /> / route element.
export default function App() {
  return (
    <>
      <Navbar />
      <main><Home /></main>
      <Footer />
    </>
  );
}
