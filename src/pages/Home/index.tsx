import Header from "../../components/Header"
import styles from "./Home.module.scss"
import ImgInicial from "../../assets/inicial.png"

import automotivoThumb from '../../assets/categorias/thumbnail/automotivoThumb.png';
import eletronicosThumb from '../../assets/categorias/thumbnail/eletronicosThumb.png';
import escritorioThumb from '../../assets/categorias/thumbnail/escritorioThumb.png';
import jogosThumb from '../../assets/categorias/thumbnail/jogosThumb.png';
import somThumb from '../../assets/categorias/thumbnail/somThumb.png';
import automotivoHeader from '../../assets/categorias/header/automotivoHeader.png';
import eletronicosHeader from '../../assets/categorias/header/eletronicosHeader.png';
import escritorioHeader from '../../assets/categorias/header/escritorioHeader.png';
import jogosHeader from '../../assets/categorias/header/jogosHeader.png';
import somHeader from '../../assets/categorias/header/somHeader.png';
import { ICategoria } from "interfaces/ICategoria";
import { useNavigate } from "react-router-dom";

const categorias : ICategoria[] = [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
  }, {
    nome: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
  }, {
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
  }, {
    nome: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: 'Tudo para o que escritório ficar incrível!'
  }, {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
  }
]

const Home = () => {
  const nav = useNavigate()
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
          <h1>Categorias</h1>
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