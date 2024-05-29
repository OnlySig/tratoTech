/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategoria } from './../../interfaces/ICategoria';
import { createListenerMiddleware } from "@reduxjs/toolkit"
import { addAllCategorias, addOneCategoria, carregarCategorias, carregarUmaCategoria } from "../../store/reducers/categorias"
import categoriasService from "../../services/categorias"
import { createTarefa } from "../../hooks/createTask"

export const listenerCategorias = createListenerMiddleware()
listenerCategorias.startListening({
    actionCreator: carregarCategorias,
    effect: async (_, { dispatch, fork, unsubscribe })=> {
        const resp = await createTarefa({ 
            action: addAllCategorias, 
            dispatch, 
            fork, 
            service: categoriasService.buscar, 
            textoLoading: 'carregando categorias', 
            textoSuccess: 'Categorias carregadas com sucesso!',
            textoErro: 'Erro na busca de categorias!',
        })
        if(resp.status === 'ok'){
            unsubscribe()
        } 
    }
})

listenerCategorias.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async ({ payload }, { fork, dispatch, getState, unsubscribe }: { getState: any, dispatch: any, unsubscribe: any, fork: any }) =>{
        const { categorias }:{ categorias: ICategoria[] } = getState()
        const categoriaLoaded = categorias.some(item => item.id === payload)
        if(categoriaLoaded) return
        if(categorias.length === 5) unsubscribe()
        await createTarefa({
            action: addOneCategoria, 
            dispatch, 
            fork, 
            service: ()=>categoriasService.buscarUmaCategoria(payload!), 
            textoLoading: `carregando categoria ${payload}`, 
            textoSuccess: `Categoria ${payload} carregada com sucesso!`,
            textoErro: `Erro na busca da categoria ${payload}!`,
        })
    }
})