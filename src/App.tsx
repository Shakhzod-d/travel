
import { Suspense } from 'react'
import { Preloading, Layout, Header, Menu } from './components/shared'
import { Home } from './pages';
import { Route, Routes, useLocation  } from "react-router-dom";
import { Overlay } from './components/ui';
import './App.css'

function App() {
  return (
    <Suspense fallback={<Preloading />}>

      <Overlay/>
      <Menu/>
      {!isLoginPage && <Header/>}
      <Routes>
        <Route
          path='/'
          element={<Layout/>}
        >
          <Route path='/' element={<Home/>}>
          </Route>

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
