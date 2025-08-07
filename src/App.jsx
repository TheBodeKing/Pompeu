import { useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Portfolio from "./components/Portfolio";

function App() {
  const [luz, setLuz] = useState(false);
  const [pt, setPt] = useState(true);

  return (
    <main
      className={`${luz ? "bg-blue-900" : "cinza-escuro ouro"} min-h-screen`}
    >
      <Header luz={luz} setLuz={setLuz} pt={pt} setPt={setPt} />
      <Inicio />
      <Portfolio />
    </main>
  );
}

export default App;
