import styles from './Input.module.scss'

interface InputProps {
    type: string
    placeholder?: string
    isLabel?: boolean
    title?: string
    value: string
    setValue: (e: string) => void
    id: string
}

const Input = ({ type, placeholder, isLabel, title, value, setValue, id } : InputProps) => {
    return(
        <>
            <div className={styles.input__container}>
            {isLabel && <label id={id}>{title}</label>}
                <input className={styles.input__item} id={id} type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        </>
    )
}
export default Input