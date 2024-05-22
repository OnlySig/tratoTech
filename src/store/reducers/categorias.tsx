import categoriasService from '../../services/categorias';
import { ICategoria } from './../../interfaces/ICategoria';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : ICategoria[] = []

export const buscarCategorias = createAsyncThunk(
  'categoria/buscar',
  categoriasService.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(
      buscarCategorias.fulfilled,
      (_, { payload })=> {
        return payload
      }
    )
  }
})

export default categoriasSlice.reducer