//IMPORTS

import { Route, BrowserRouter, Routes } from "react-router-dom"
import axios from "axios"
import AppHomePage from "./pages/AppHomePage"
import DefaultLayout from "./layouts/DefaultLayout"
import AppSingleTattooPage from "./pages/AppSingleTattooPage"

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<AppHomePage />} />
          <Route path="/tattoos/:id" element={<AppSingleTattooPage tattoo= 'PASSIAMO ARRAY TATTOO' />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
