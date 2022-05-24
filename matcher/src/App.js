import './App.css';
import Mcard from './components/Mcard';
import Header from './components/Header';
import Mbuttons from './components/Mbuttons';
function App() {
  return (
    <div className="container">
      <Header/>
      <Mcard/>
      <Mbuttons/>
    </div>
  );
}

export default App;
