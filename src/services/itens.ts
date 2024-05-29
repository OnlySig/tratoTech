import { IItens } from "../interfaces/IItens"
import instance from "../http/api"

const itensService = {
    buscar: async () => {
        const resp = await instance.get<IItens[]>('/itens')
        return resp.data
    },
    buscarDeCategorias: async (payload: string) => {
        const resp = await instance.get<IItens[]>(`/itens?categoria=${payload}`)
        return resp.data
    },
}

export default itensService