import Input from '../../components/Input'
import Header from '../../components/Header'
import styles from './Anunciar.module.scss'
import { useSelector } from 'react-redux'
import { ICategoria } from 'interfaces/ICategoria'
import Button from '../../components/Button'

interface categoriasProps {
    categorias: ICategoria[]
}

const Anunciar = () => {
    const categorias = useSelector((state:categoriasProps)=>state.categorias.map(({ nome, id })=> ({ nome, id })))
    const submitarForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    console.log(categorias)
    return (
        <div className={styles.container}>
            <Header title='Anuncie Aqui!' descricao='Anuncie seu produto no melhor site do Brasil!' className={styles.anunciarHeader}/>
            <form onSubmit={submitarForm} className={styles.formulario}>
                <Input id='nome' isBusca={false} placeholder='Nome do produto'/>
                <Input id='descricao' isBusca={false} placeholder='Descrição do produto'/>
                <Input id='url' isBusca={false} placeholder='URL da imagem do produto'/>
                <select>
                    <option disabled>Selecione a cetegoria</option>
                    {categorias.map(categoria=><option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
                </select>
                <Input id='preco' isBusca={false} type='number' placeholder='Preço do produto'/>
                <Button>Cadastrar produto</Button>
            </form>
        </div>
    )
}
export default Anunciar