import { Suspense } from "react";
import { Preloading, Layout, Menu } from "./components/shared";
import { Home, Travel, Login, Register, Tours } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Overlay, Modal } from "./components/ui";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";
// add comment to run this project with 3300 port
function App() {
  const state = useSelector((state: RootState) => state.main)
  const {modal} = state
  return (
    <Suspense fallback={<Preloading />}>
      {modal && <Modal/>}
      <Overlay />
      <Menu/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Travel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <ToastContainer/>
      <Footer />
    </Suspense>
  );
}

export default App;
