
import Title from './components/Title';
import POPOSList from './components/POPOSList';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
