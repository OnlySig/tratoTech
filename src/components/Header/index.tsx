import styles from "./Header.module.scss"

interface HeaderProps {
    title: string
    descricao: string
    className?: string
    img?: string
}

const Header = ({ title, className = '', descricao, img } : HeaderProps) => {
    return(
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{title}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img src={img} alt={title} />
            </div>
        </header>
    )
}

export default Header