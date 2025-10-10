import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderM from "./components/HeaderM";
import Inicio from "./components/Inicio";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

function App() {
  return (
    <main>
      <Header />
      <HeaderM />
      <Inicio />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
