import { Suspense } from 'react'
import { Preloading, Layout, Header } from './components/shared'
import { Home } from './pages';
import { Route, Routes, useLocation  } from "react-router-dom";
import './App.css'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname == '/login' || location.pathname == '/sign-in';

  return (
    <Suspense fallback={<Preloading />}>
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
