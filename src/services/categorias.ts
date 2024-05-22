import { ICategoria } from "../interfaces/ICategoria"
import instance from "../http/api"

const categoriasService = {
    buscar: async ()=> {
        const resp = await instance.get<ICategoria[]>('/categorias')
        return resp.data
    }
}

export default categoriasService