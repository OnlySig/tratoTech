import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "./pages/PaginaPadrao"
import Home from "./pages/Home"
import Categorias from "./pages/Categorias"
import Carrinho from "./pages/Carrinho"

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path="/categoria/:id" element={<Categorias/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes
