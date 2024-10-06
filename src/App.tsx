import { Suspense } from "react";
import { Preloading, Layout } from "./components/shared";
import { Home, Travel } from "./pages";
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/travel" element={<Travel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
