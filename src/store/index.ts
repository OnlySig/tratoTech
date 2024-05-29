import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from "./reducers/busca";
import { listenerCategorias } from "./middlewares/categorias";
import { listenerItens } from "./middlewares/itens";
import createSagaMiddleware from 'redux-saga'
import { categoriasSaga } from "./sagas/categorias";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: { 
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(
        listenerCategorias.middleware,
        listenerItens.middleware,
        sagaMiddleware
    ),
});

sagaMiddleware.run(categoriasSaga)

export default store