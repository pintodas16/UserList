import { SortSearchContextProvider } from "./contexts/SortContext.jsx";
import { UserContextProvider } from "./contexts/userContext.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <UserContextProvider>
      <SortSearchContextProvider>
        <HomePage />
      </SortSearchContextProvider>
    </UserContextProvider>
  );
}

export default App;
