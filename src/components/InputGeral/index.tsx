import { forwardRef } from 'react'
import styles from './InputGeral.module.scss'

interface propsInput {
    type?: string
    id?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    name?: string
    className?: string
}

const InputGeral = forwardRef<HTMLInputElement, propsInput>(({ name, type='text', id, onChange, placeholder, value, ...rest }, ref) => {
    InputGeral.displayName = 'inputGeral'
    return (
        <input className={styles.input} name={name} type={type} id={id} onChange={onChange} value={value} placeholder={placeholder} ref={ref} {...rest}/>
    )
})

export default InputGeral