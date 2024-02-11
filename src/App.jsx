import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import { SortSearchContextProvider } from "./contexts/SortContext.jsx";
import { UserContextProvider } from "./contexts/userContext.jsx";
function App() {
  return (
    <UserContextProvider>
      <SortSearchContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </SortSearchContextProvider>
    </UserContextProvider>
  );
}
// onOpenModal={handleUserFormModal}
export default App;
