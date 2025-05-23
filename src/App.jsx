import "./App.css";
import { Formulario1 } from "./components/Formulario1";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <header>
        <h1>Formularios</h1>
      </header>
      <main>
        <Formulario1 />
        <Formulario2 />
      </main>
      <footer>
        <p>Derechos reservados &copy; 2025</p>
      </footer>
    </>
  );
}

export default App;
