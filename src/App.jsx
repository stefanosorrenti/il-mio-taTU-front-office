import { Route, BrowserRouter, Routes } from "react-router-dom"
import AppHomePage from "./pages/AppHomePage"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<AppHomePage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
