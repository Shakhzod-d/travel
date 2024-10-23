import { Suspense } from "react";
import { Preloading, Layout, Menu } from "./components/shared";
import { Home, Travel, Login, Register } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Overlay } from "./components/ui";
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";

function App() {

  return (
    <Suspense fallback={<Preloading />}>
      <Overlay />
      <Menu/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tours" element={<Travel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
