import { ReactElement } from "react"
import styles from "./Button.module.scss"

interface buttonProps {
    children: ReactElement | string
    onClick?: ()=>void
}

const Button = ({ children, onClick } : buttonProps ) => {
    return (
        <button onClick={onClick} className={styles.botao}>
            {children}
        </button>
    )
}
export default Button