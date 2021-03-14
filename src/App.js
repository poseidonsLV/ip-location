import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { UseAddressProvider } from "./context/userAddressContext";

function App() {
  return (
    <UseAddressProvider>
      <div className="App">
        <Header />
        <Map />
      </div>
    </UseAddressProvider>
  );
}

export default App;
