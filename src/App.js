import './App.css';
import Cartao from './Components/Cartao';
import Celular from './Components/Celular';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Nasommet from './Components/Nasommet';
import Vantagens from './Components/Vantagens';
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Cartao />
      <Vantagens />
      <Celular />
      <Nasommet />
      <Footer />
    </div>
  );
}

export default App;
