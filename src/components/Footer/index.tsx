import { Link } from "react-router-dom"
import styles from "./Footer.module.scss"
import { FaFacebook, FaTwitch, FaInstagram } from "react-icons/fa" 

const iconsProps = {
    color: '#fff',
    size: 30
}

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div>
                <Link to={''}><FaFacebook {...iconsProps}/></Link> 
                <Link to={''}><FaTwitch {...iconsProps}/></Link>
                <Link to={''}><FaInstagram {...iconsProps}/></Link>
            </div>
            <span>Desenvolvido com ❤ por <Link to={'https://github.com/OnlySig'} target="_blank">Gabriel Pereira</Link> com ajuda da alura 🔥</span>
        </footer>
    )
}

export default Footer