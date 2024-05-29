/* eslint-disable @typescript-eslint/no-unused-vars */
import categoriasService from '../../services/categorias';
import { ICategoria } from './../../interfaces/ICategoria';
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : ICategoria[] = []

export const carregarCategorias = createAction('categorias/carregarCategorias')
export const carregarUmaCategoria = createAction<string | undefined>('categorias/carregarUmaCategoria')

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addAllCategorias: (_, { payload })=> {
      return payload
    },
    addOneCategoria: (state, { payload }) => {
      state.push(payload)
    }
  },
})

export const { addAllCategorias, addOneCategoria } = categoriasSlice.actions

export default categoriasSlice.reducer