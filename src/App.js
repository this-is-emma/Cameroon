
import Title from './components/Title';
import POPOSList from './components/POPOSList';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <main className="App">
      <Title />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
