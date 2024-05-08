import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styles from './NavBar.module.scss'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import Input from '../../components/Input'
import { useState } from 'react'

const NavBar = () => {
  const [test, setTest] = useState<string>('')

  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="logo do trato tech" />
      <div className={styles.links}>
        <div>
          <Link to={'/'} className={window.location.pathname === '/' ?`${styles.selected} ${styles.link}` : `${styles.link}`}>
            Pagina Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca} >
        <Input type="text" placeholder="placeholder test" value={test} setValue={setTest} id="test" />
      </div>
      <div className={styles.icones}>
        <Link to={'/carrinho'}>
          {window.location.pathname === '/carrinho' ? <RiShoppingCart2Fill color='#FFF' size='24px'/> : <RiShoppingCart2Line color='#FFF' size='24px'/>}
        </Link>
      </div>
    </nav>
  )
}

export default NavBar