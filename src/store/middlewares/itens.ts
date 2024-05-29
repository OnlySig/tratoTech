/* eslint-disable @typescript-eslint/no-explicit-any */
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addAllItens, carregarItens } from "../../store/reducers/itens";
import { createTarefa } from "../../hooks/createTask";
import itensService from "../../services/itens";
import { IItens } from "interfaces/IItens";

export const listenerItens = createListenerMiddleware()

listenerItens.startListening({
    actionCreator: carregarItens,
    effect: async ({ payload }, { dispatch, fork, unsubscribe, getState } : { getState: any, dispatch: any, unsubscribe: any, fork: any }) => {
        if(!payload) payload = 'jogos'
        const { itens } : { itens: IItens[] } = getState()
        const itensCarregados = itens.some(item=>item.categoria===payload)
        if(itens.length === 25) unsubscribe()
        if(itensCarregados) return
        await createTarefa({
            action: addAllItens,
            dispatch,
            fork,
            service: ()=>itensService.buscarDeCategorias(payload),
            textoLoading: `carregando itens da categoria ${payload}`, 
            textoSuccess: `itens da categoria ${payload} carregadas com sucesso!`,
            textoErro: 'Erro na busca de itens!',
        })
        
    }
})