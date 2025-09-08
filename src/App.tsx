import "./App.css";
import Section03 from "./Section03/Section03.tsx";
import { Section04 } from "./Section04/Section04.tsx";
import { Section05 } from "./Section05/Section05.tsx";

function App() {
  return (
    <div className="p-8">
      <Section03 />
      <Section04 />
      <Section05 />
    </div>
  );
}

export default App;
