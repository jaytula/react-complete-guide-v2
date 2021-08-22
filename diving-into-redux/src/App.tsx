import Counter from "./components/Counter";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
}

export default App;
