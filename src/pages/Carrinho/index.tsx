import { useSelector } from "react-redux"
import Header from "../../components/Header"
import styles from "./Carrinho.module.scss"
import { IItens } from "interfaces/IItens"
import Item from "../../components/Item"
import { ICarrinho } from "interfaces/ICarrinho"


interface carrinhoProps {
    carrinho: ICarrinho[]
    itens: IItens[]
    busca: string
}

const Carrinho = () => {
    const { compras, totalCompra } = useSelector((state : carrinhoProps)=> {
        let totalCompra = 0
        const carrinhoReduce = state.carrinho.reduce((itensCategoria : IItens[] , itemCarrinho) => {
            const regexp = new RegExp(state.busca, 'i')
            const item = state.itens.find(item => item.id === itemCarrinho.id)
            if(item?.titulo.match(regexp)){
                itensCategoria.push({
                    id: item.id,
                    foto: item.foto,
                    preco: item.preco,
                    titulo: item.titulo,
                    categoria: item.categoria,
                    descricao: item.descricao,
                    favorito: item.favorito,
                    quantidade: itemCarrinho.quantidade,
                })
            }
            if(item)totalCompra += (item.preco * itemCarrinho.quantidade)
            return itensCategoria
        }, [])
        return {
            compras: carrinhoReduce,
            totalCompra
        }
    })
    return (
        <div >
            <Header title="Carrinho de compras" descricao="Confira os produtos que você adicionou ao carrinho." className={styles.carrinhoHeader}/>
            <div className={styles.carrinho}>
                {compras.length > 0 ? compras.map(compra =>
                    <Item key={compra.id} item={{...compra}} noCarrinho/>
                ) : <h1>Carrinho vazio</h1>}
                <div className={styles.total}>
                    <strong>Resumo da compra</strong>
                    <span>Subtotal: <strong>RS {totalCompra.toFixed(2)}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Carrinho