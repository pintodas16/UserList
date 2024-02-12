import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import AddUserFormContainer from "./components/users/AddUser/AddUserFormContainer.jsx";
import { useUserContext } from "./contexts/userContext.jsx";
function App() {
  const { userFormModal } = useUserContext();
  return (
    <>
      <Header />
      {userFormModal && <AddUserFormContainer />}
      <Outlet />
      <Footer />
    </>
  );
}
// onOpenModal={handleUserFormModal}
export default App;
