import { Suspense } from 'react'
import { Preloading, Layout, Header } from './components/shared'
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <Suspense fallback={<Preloading />}>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={<Layout/>}
        >
        </Route>
      </Routes>
      
    </Suspense>
  )
}

export default App
