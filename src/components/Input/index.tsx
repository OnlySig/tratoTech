import { useDispatch, useSelector } from 'react-redux'
import styles from './Input.module.scss'
import { mudarBusca, resetBusca } from '../../store/reducers/busca'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

interface InputProps {
    placeholder?: string
    isLabel?: boolean
    title?: string
    value?: string | number
    setValue?: React.Dispatch<React.SetStateAction<string>>
    isBusca?: boolean
    type?: string
    id: string
}

interface buscaProps {
    busca: string
}

const Input = ({ type = 'text', placeholder, isLabel, title, id, isBusca = false, value } : InputProps) => {
    const { pathname } = useLocation()
    const busca = useSelector((state:buscaProps)=>state.busca)
    const dispatch = useDispatch()
    useEffect(() => {
        if(isBusca){
            dispatch(resetBusca())
        }
    }, [pathname, dispatch, isBusca])
    return(
        <>
            {isLabel && <label htmlFor={id}>{title}</label>}
            <div className={styles.input__container}>
                <input 
                    className={styles.input__item} 
                    id={id} 
                    type={type}
                    placeholder={placeholder} 
                    value={isBusca ? busca : value} 
                    onChange={e => isBusca && dispatch(mudarBusca(e.target.value))}/>
            </div>
        </>
    )
}
export default Input