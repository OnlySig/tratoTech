import Header from '../../components/Header'
import styles from './Anunciar.module.scss'
import { useSelector } from 'react-redux'
import { ICategoria } from 'interfaces/ICategoria'
import Button from '../../components/Button'
import { FieldValues, useForm } from 'react-hook-form'

interface categoriasProps {
    categorias: ICategoria[]
}

const Anunciar = () => {
    // const [nome, setNome] = useState('')
    // const [descricao, setDescricao] = useState('')
    // const [url, setUrl] = useState('')
    // const [categoria, setCategoria] = useState('')
    // const [preco, setPreco] = useState('')
    const { register, handleSubmit } = useForm()
    const categorias = useSelector((state:categoriasProps)=>state.categorias.map(({ nome, id })=> ({ nome, id })))
    const submitarForm = (data:FieldValues) => {
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <Header title='Anuncie Aqui!' descricao='Anuncie seu produto no melhor site do Brasil!' className={styles.anunciarHeader}/>
            <form onSubmit={handleSubmit(submitarForm)} className={styles.formulario}>
                <input id='nome' placeholder='Nome do produto' {...register('nome')}/>
                <input id='descricao' placeholder='Descrição do produto' {...register('descricao')}/>
                <input id='url' placeholder='URL da imagem do produto' {...register('url')}/>
                <select {...register('categoria')} >
                    <option disabled>Selecione a cetegoria</option>
                    {categorias.map(categoria=><option key={categoria.id} value={categoria.id} >{categoria.nome}</option>)}
                </select>
                <input id='preco' type='number' placeholder='Preço do produto' {...register('preco')}/>
                <Button>Cadastrar produto</Button>
            </form>
        </div>
    )
}
export default Anunciar