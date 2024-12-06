import { Suspense, useEffect } from "react";
import { Preloading, Layout, Menu, PicturesModal, PicturesGallery } from "./components/shared";
import { Home, Tours, Travel, NotFound, ProtectedRoute } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Overlay, Modal, BookingModal, ScrollButton } from "./components/ui";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ToastContainer } from 'react-toastify';
import i18n from "./components/i18n/i18next";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";

function App() {
  const state = useSelector((state: RootState) => state.main)
  const { modal, bookingModal, picturesModal, picturesGallery } = state
  useEffect(() => {
    let lastLn = localStorage.getItem('lng') 
    if(lastLn){
      i18n.changeLanguage(lastLn)
    }else{
      i18n.changeLanguage('eng')
    }
  }, [])

  useEffect(() => {
    if(picturesModal || picturesGallery){
      document.body.classList.add('unscrollable')
    }else{
      document.body.classList.remove('unscrollable')
    }
  }, [picturesModal, picturesGallery])

  return (
    <>
      <ToastContainer/>
      {picturesModal && <PicturesModal/>}
      {picturesGallery && <PicturesGallery/>}
      <Suspense fallback={<Preloading />}>
        {modal && <Modal/>}
        {bookingModal && <BookingModal/>}
        <Overlay />
        <Menu/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/tours" element={<Tours />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/tours/:id" element={<Travel />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ScrollButton/>
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;
