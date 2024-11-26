import { Suspense } from "react";
import { Preloading, Layout, Menu } from "./components/shared";
import { Home, Travel, Tours } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Overlay, Modal, BookingModal } from "./components/ui";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";

function App() {
  const state = useSelector((state: RootState) => state.main)
  const { modal, bookingModal } = state
  return (
    <Suspense fallback={<Preloading />}>
      {modal && <Modal/>}
      {bookingModal && <BookingModal/>}
      <Overlay />
      <Menu/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<Tours />} />
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
