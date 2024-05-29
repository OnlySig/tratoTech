import { useNavigate } from "react-router-dom"
import styles from "./Header.module.scss"
import Button from "../../components/Button"

interface HeaderProps {
    title: string
    descricao: string
    className?: string
    img?: string
}

const Header = ({ title, className = '', descricao, img } : HeaderProps) => {
    const nav = useNavigate()
    return(
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{title}</h1>
                <h2>{descricao}</h2>
                <Button onClick={()=>nav('/anunciar')}>Quero anunciar</Button>
            </div>
            <div className={styles['header-imagem']}>
                <img src={img} alt={title} />
            </div>
        </header>
    )
}

export default Header