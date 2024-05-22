import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IItens } from '../../interfaces/IItens'
import itensService from '../../services/itens';
import { v4 as uuidv4 } from 'uuid';

const initialState : IItens[] = []

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
) 

const itensSlice = createSlice({
    name: 'itens',
    initialState,
    reducers: {
      mudarFavorito: (state, { payload }) => {
        state.map(item => {
          if(item.id === payload) item.favorito = !item.favorito
          return item
        })
      },
      cadastrarItem: (state, { payload }) => {
        state.push({...payload, id: uuidv4()})
      },
      editarItem: (state, { payload }) => {
        const index = state.findIndex(item => item.id === payload.itemId)
        Object.assign(state[index], payload.item)
      },
      deleteItem: (state, { payload }) => {
        const index = state.findIndex(item => item.id === payload)
        state.splice(index, 1)
      },
    },
    extraReducers: builder => {
      builder.addCase(
        buscarItens.fulfilled,
        (_, { payload })=> {
          return payload
        }
      )
    }
})

export const { mudarFavorito, cadastrarItem, editarItem, deleteItem } = itensSlice.actions

export default itensSlice.reducer