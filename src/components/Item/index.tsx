import { IItens } from "interfaces/IItens"
import styles from "./Item.module.scss"
import noImage from '../../assets/noImage.png'
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck, AiFillEdit } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { TiDelete } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { deleteItem, editarItem, mudarFavorito } from "../../store/reducers/itens"
import { useDispatch, useSelector } from "react-redux"
import { dellCarrinho, mudarCarrinho, mudarQuantidade } from "../../store/reducers/carrinho"
import { useState } from "react"
import InputGeral from "../../components/InputGeral"

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
    const [modeEdit, setModeEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(item.titulo)
    const dispatch = useDispatch()
    const alterarFavo = () => dispatch(mudarFavorito(item.id))
    const addCarrinho = () => dispatch(mudarCarrinho(item.id))
    const dellItem = () => dispatch(deleteItem(item.id))
    const carrinho = useSelector((state : carrinhoProps) => state.carrinho.some((itemCarrinho) => itemCarrinho.id === item.id))
    const precoComQtd = item.preco * (item.quantidade ?? 1)
    if(item.quantidade === 0 ) dispatch(dellCarrinho(item.id))
    //const [imgDefault, setImgDefault] = useState(item.foto)
    const loadImgDefault = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = noImage
        console.log('a')
    }

    const componentEdit = <>
        {modeEdit 
            ? <AiOutlineCheck {...iconeProps} className={styles['item-acao']} onClick={()=> {
                dispatch(editarItem({ itemId: item.id, item: {titulo: editTitle} }))
                setModeEdit(!modeEdit)
            }}/>
            : <AiFillEdit {...iconeProps} className={styles['item-acao']} onClick={()=>setModeEdit(!modeEdit)}/>
        }
    </>
    console.log(item)
    return(
        <>
            <div className={noCarrinho ? styles.itemNoCarrinho : styles.item }>
            {!noCarrinho && <TiDelete {...iconeProps} className={styles.iconDell} onClick={()=>dellItem()}/>}
                <div className={styles['item-imagem']}>
                    <img src={item.foto} alt={item.titulo} onError={(e)=>loadImgDefault(e)}/>
                </div>
                <div className={styles['item-descricao']}>
                    <div className={styles['item-titulo']}>
                        {modeEdit 
                            ? <InputGeral id="titulo" type="text" value={editTitle} onChange={e=>setEditTitle(e.target.value)} placeholder="Editar titulo do produto"/>
                            : <h2>{item.titulo}</h2> 
                        }
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
                                :  
                                (
                                <>
                                    <FaCartPlus 
                                        {...iconeProps} 
                                        color={carrinho ? "#1875E8" : iconeProps.color} 
                                        className={styles['item-acao']} 
                                        onClick={addCarrinho}
                                    />
                                    {componentEdit}
                                </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item