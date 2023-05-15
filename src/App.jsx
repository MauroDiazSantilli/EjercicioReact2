import "./App.css";
import Titulos from "./components/Titulos";
import Contador from "./components/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui vamos a escribir logica

  return (
    //aqui va el maquetado y un poco de logica
    //<> es un Fragment
    <section className="container my-4">
     <Titulos/>
     <Contador/>
     
  </section>
  );
}

export default App;
