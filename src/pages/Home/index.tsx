/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/Header"
import styles from "./Home.module.scss"
import ImgInicial from "../../assets/inicial.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ICategoria } from "interfaces/ICategoria";
import { useEffect } from "react";
import { carregarCategorias } from "../../store/reducers/categorias";

interface homeCategoria {
  categorias: ICategoria[]
}
const Home = () => {
  const nav = useNavigate()
  const categorias : ICategoria[] = useSelector((state : homeCategoria) => state.categorias)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(carregarCategorias())
  },[dispatch])
  
  return (
    <div>
      <Header 
          title="Classificados Tech" 
          descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
          img={ImgInicial}
          className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categoria</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((item, index) => 
            <div key={index} onClick={()=>nav(`/categoria/${item.id}`)}>
              <img src={item.thumbnail} alt={item.nome} />
              <h1>{item.nome}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Home