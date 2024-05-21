import logo from './image/arvore.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Card id='card'>
      <h1 id="titulo">ECOGEST</h1>
      <p id='sub-titulo'>Inovando o Presente, Preservando o Futuro</p>
      </Card>
      <img src={logo} className="App-logo" alt="logo" />
      
    </div>
  );
}

export default App;
