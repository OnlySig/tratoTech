import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styles from './NavBar.module.scss'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import Input from '../../components/Input'

const NavBar = () => {
  const { pathname } = useLocation()
  const nav = useNavigate()
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="logo do trato tech" onClick={()=>nav('/')}/>
      <div className={styles.links}>
        <div>
          <Link to={'/'} className={pathname === '/' ?`${styles.selected} ${styles.link}` : `${styles.link}`}>
            Pagina Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca} >
        <Input placeholder="O que você procura?" id="inputBusca" isBusca/>
      </div>
      <div className={styles.icones}>
        <Link to={'/carrinho'}>
          {pathname === '/carrinho' ? <RiShoppingCart2Fill color='#FFF' size='24px'/> : <RiShoppingCart2Line color='#FFF' size='24px'/>}
        </Link>
      </div>
    </nav>
  )
}

export default NavBar