/* eslint-disable @typescript-eslint/no-explicit-any */
import { toastDefault } from "./toast"

export const createTarefa = async ({ dispatch, fork, action, service, textoLoading, textoSuccess, textoErro } : any) => {
    toastDefault({ description: textoLoading, status: 'loading', title: 'Carregando' })
    const tarefa = fork(async (api : any) => {
        await api.delay(500)
        return await service() 
    })
    const resposta = await tarefa.result
    if(resposta.status === "ok") {
        toastDefault({ description: textoSuccess, status: 'success', title: 'Sucesso!' })
        dispatch(action(resposta.value))
    }
    if(resposta.status === "rejected") {
        toastDefault({ description: textoErro, status: 'error', title: 'Erro' })
    }
    return resposta
}