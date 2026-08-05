import { Route, BrowserRouter, Routes } from "react-router-dom"
import AppHomePage from "./pages/AppHomePage"
import DefaultLayout from "./layouts/DefaultLayout"
import AppSingleTattooPage from "./pages/AppSingleTattooPage"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<AppHomePage />} />
          <Route path="/tattoo/:id" element={<AppSingleTattooPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
