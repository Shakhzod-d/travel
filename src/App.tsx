import { Suspense } from 'react'
import { Preloading, Layout, Header, Menu } from './components/shared'
import { Home } from './pages';
import { Route, Routes, useLocation  } from "react-router-dom";
import { Overlay } from './components/ui';
import './App.css'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname == '/login' || location.pathname == '/sign-in';

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
          <Route path='/' element={<Home/>}></Route>
        </Route>
      </Routes>
      
    </Suspense>
  )
}

export default App
