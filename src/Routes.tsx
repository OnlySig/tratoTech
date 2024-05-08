import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./pages/PaginaPadrao"
import Home from "./pages/Home"

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes
