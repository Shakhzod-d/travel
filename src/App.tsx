import { Suspense } from "react";
import { Preloading, Layout, Header } from "./components/shared";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/ui/footer";

function App() {
  return (
    <Suspense fallback={<Preloading />}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
