/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeEvery } from "redux-saga/effects"
import { buscarCategorias } from "../../store/reducers/categorias"

function* observarCategorias() {
    yield console.log('Redux Saga dahora :)')
}

export function* categoriasSaga() {
    yield takeEvery<any>(buscarCategorias, observarCategorias)
}