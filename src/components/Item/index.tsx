import { IItens } from "interfaces/IItens"
import styles from "./Item.module.scss"
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md";
import { mudarFavorito } from "../../store/reducers/itens"
import { useDispatch, useSelector } from "react-redux"
import { dellCarrinho, mudarCarrinho, mudarQuantidade } from "../../store/reducers/carrinho"

interface ItemProps {
    item: IItens
    noCarrinho?: boolean
}

interface carrinhoProps {
    carrinho: IItens[]
}

const qtdProps = {
    size: 32,
    color:'#1875E8'
}

const iconeProps = {
    size: '24px',
    color: '#041833'
}

const Item = ({ item, noCarrinho } : ItemProps ) => {
    const dispatch = useDispatch()
    const alterarFavo = () => dispatch(mudarFavorito(item.id))
    const addCarrinho = () => dispatch(mudarCarrinho(item.id))
    const carrinho = useSelector((state : carrinhoProps) => state.carrinho.some((itemCarrinho) => itemCarrinho.id === item.id))
    const precoComQtd = item.preco * (item.quantidade ?? 1)
    if(item.quantidade === 0 ) dispatch(dellCarrinho(item.id))
    return(
        <div className={noCarrinho ? styles.itemNoCarrinho : styles.item }>
            <div className={styles['item-imagem']}>
                <img src={item.foto} alt={item.titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                </div>
                {noCarrinho &&
                    <div className={styles.iconDell}>
                        <MdDeleteOutline {...iconeProps} onClick={()=>dispatch(dellCarrinho(item.id))}/>
                    </div>
                }
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                    R$ {noCarrinho ? precoComQtd.toFixed(2) : item.preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {item.favorito
                            ? <AiFillHeart {...iconeProps} color="#ff0000" className={styles['item-acao']} onClick={alterarFavo}/> 
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={alterarFavo}/>
                        }
                        {noCarrinho
                            ? (
                                <div className={styles.quantidade}>
                                    Quantidade:
                                    <AiFillMinusCircle {...qtdProps} onClick={()=>dispatch(mudarQuantidade({ id: item.id, quantidade: -1 }))}/>
                                    <span>{String(item.quantidade).padStart(2, '0')}</span>
                                    <AiFillPlusCircle {...qtdProps} onClick={()=>dispatch(mudarQuantidade({ id: item.id, quantidade: +1 }))}/>
                                </div> 
                            )
                            :  (<FaCartPlus 
                                {...iconeProps} 
                                color={carrinho ? "#1875E8" : iconeProps.color} 
                                className={styles['item-acao']} 
                                onClick={addCarrinho}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
