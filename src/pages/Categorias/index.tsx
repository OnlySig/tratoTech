/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/Header"
import { ICategoria } from "interfaces/ICategoria"
import { IItens } from "interfaces/IItens"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styles from "./categorias.module.scss"
import Item from "../../components/Item"
import { useEffect } from "react"
import { carregarUmaCategoria } from "../../store/reducers/categorias"
import { carregarItens } from "../../store/reducers/itens"
interface itensProps {
    itens?: IItens[]
    categorias?: ICategoria[]
    busca: string
}

const Categorias = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    //const categoria = useSelector((state : itensProps) => state.itens?.filter(item=> item.categoria === id))
    const { categoriaHeader, itens } = useSelector((state : itensProps) => {
        const regexp = new RegExp(state.busca, 'i')
        return {
            categoriaHeader: state.categorias?.find(item => item.id === id),
            itens: state.itens?.filter(item=> item.categoria === id && item.titulo.match(regexp))
        }
    })

    useEffect(()=> {
        dispatch(carregarUmaCategoria(id))
        dispatch(carregarItens(id))
    },[dispatch, id])
    
    if(!categoriaHeader) return <h1>tem nada aqui po</h1>
    return(
        <>
            <Header img={categoriaHeader.header} title={categoriaHeader.nome} descricao={categoriaHeader.descricao} className=""/>
            <div className={styles.itens}>
                {itens?.map(item=> 
                    <div key={item.id}>
                        <Item item={{...item}}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Categorias