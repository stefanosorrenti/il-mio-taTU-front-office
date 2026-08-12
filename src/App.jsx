//IMPORTS

import { Route, BrowserRouter, Routes } from "react-router-dom"
import AppInfoPage from "./pages/AppInfoPage"
import AppHomePage from "./pages/AppHomePage"
import DefaultLayout from "./layouts/DefaultLayout"
import AppSingleTattooPage from "./pages/AppSingleTattooPage"
import AppNotFoundPage from "./pages/AppNotFoundPage"

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<AppHomePage />} />
          <Route path="/tattoos/:id" element={<AppSingleTattooPage />} />
          <Route path="/info" element={<AppInfoPage />} />
          <Route path="*" element={<AppNotFoundPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
