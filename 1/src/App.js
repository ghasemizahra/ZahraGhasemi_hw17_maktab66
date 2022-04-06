import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";
import ItemContextProvider from "./components/ItemContextProvider";
function App() {
  return (
    
    <div className="container">
    <header>
      <ItemContextProvider>
        <AllItems/>
        <SelectedItems/>
      </ItemContextProvider>
    </header>
  </div>

  );
}

export default App;
