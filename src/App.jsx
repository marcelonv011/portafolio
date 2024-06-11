import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Bienvenida } from "./components/Bienvenida/Bienvenida";
import { Contacto } from "./components/Contacto/Contacto";
import { Navbar } from "./components/navbar/Navbar";
import { Tecnologias } from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Bienvenida />
      <About />
      <Tecnologias />
      <Contacto />
    </div>
  );
}

export default App;
