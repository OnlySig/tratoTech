import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./pages/PaginaPadrao"

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<p>faz o l</p>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes
