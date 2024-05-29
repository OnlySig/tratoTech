import { useDispatch, useSelector } from 'react-redux'
import styles from './Input.module.scss'
import { mudarBusca, resetBusca } from '../../store/reducers/busca'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

interface InputProps {
    placeholder?: string
    type?: string
    id: string
}

interface buscaProps {
    busca: string
}

const Input = ({ type = 'text', placeholder, id} : InputProps) => {
    const { pathname } = useLocation()
    const busca = useSelector((state:buscaProps)=>state.busca)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetBusca())
    }, [pathname, dispatch])
    return(
        <>
            <div className={styles.input__container}>
                <input 
                    className={styles.input__item} 
                    id={id} 
                    type={type}
                    placeholder={placeholder} 
                    value={busca}
                    onChange={e => dispatch(mudarBusca(e.target.value))}/>
            </div>
        </>

    )
}
export default Input