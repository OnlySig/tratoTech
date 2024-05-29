import { createSlice } from "@reduxjs/toolkit"
import { ICarrinho } from "interfaces/ICarrinho"
const initialState : ICarrinho[] = []
const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload } ) => {
            const temItem = state.some(item => item.id === payload)
            if(!temItem) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            return state.filter(item => item.id !== payload)
        },
        mudarQuantidade: (state, { payload }) => {
            state.map(itemCarrinho => {
                if(itemCarrinho.id === payload.id) {
                    if(payload.quantidade === +1) ++itemCarrinho.quantidade
                    if(payload.quantidade === -1) --itemCarrinho.quantidade
                }
                return itemCarrinho
            })
        },
        dellCarrinho: (state, { payload }) => {
            return state.filter(item => item.id !== payload)
        }
    }
})

export const { mudarCarrinho, mudarQuantidade, dellCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer