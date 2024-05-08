import styles from './Input.module.scss'

interface InputProps {
    placeholder?: string
    isLabel?: boolean
    title?: string
    setValue: (e: string) => void
    value: string
    type: string
    id: string
}

const Input = ({ type, placeholder, isLabel, title, value, setValue, id } : InputProps) => {
    return(
        <>
            {isLabel && <label htmlFor={id}>{title}</label>}
            <div className={styles.input__container}>
                <input className={styles.input__item} id={id} type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        </>
    )
}
export default Input