import Header from '../../components/Header'
import styles from './Anunciar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ICategoria } from 'interfaces/ICategoria'
import Button from '../../components/Button'
import { FieldValues, useForm } from 'react-hook-form'
import { cadastrarItem } from '../../store/reducers/itens'
import InputGeral from '../../components/InputGeral'

interface categoriasProps {
    categorias: ICategoria[]
}

type Inputs = {
    titulo: string
    categoria: string
    descricao: string
    foto: string
    preco: number
  }

const Anunciar = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState } = useForm<Inputs>({
        defaultValues: {
            categoria: '',
        }
    })
    const { errors } = formState
    const categorias = useSelector((state:categoriasProps)=>state.categorias.map(({ nome, id })=> ({ nome, id })))
    const submitarForm = (data:FieldValues) => {
        dispatch(cadastrarItem(data))
    }
    return (
        <div className={styles.container}>
            <Header title='Anuncie Aqui!' descricao='Anuncie seu produto no melhor site do Brasil!' className={styles.anunciarHeader}/>
            <form onSubmit={handleSubmit(submitarForm)} className={styles.formulario}>
                <div className={styles.container__input}>
                    <InputGeral 
                        className={errors.titulo && styles['input-erro']}
                        placeholder='Nome do produto' 
                        id='titulo'
                        {...register('titulo', {required: 'O campo nome é obrigatório', minLength: 4})} 
                    />
                    {errors.titulo && <span className={styles['mensagem-erro']}>{errors.titulo?.type === 'minLength' ? 'O mínimo de caracteres são 4!' : errors.titulo.message}</span>}
                </div>
                <div className={styles.container__input}>
                    <InputGeral
                        className={errors.descricao && styles['input-erro']} 
                        id='descricao' 
                        placeholder='Descrição do produto' 
                        {...register('descricao', {required: 'O campo descricao é obrigatório'})}/>
                    {errors.descricao && <span className={styles['mensagem-erro']}>{errors.descricao.message}</span>}
                </div>
                <div className={styles.container__input}>
                    <InputGeral
                        className={errors.foto && styles['input-erro']} 
                        id='imagem' 
                        placeholder='URL da imagem do produto' 
                        {...register('foto', {required: 'O campo url é obrigatório'})}
                    />
                    {errors.foto && <span className={styles['mensagem-erro']}>{errors.foto.message}</span>}
                </div>
                <div className={styles.container__input}>
                    <select {...register('categoria', {required: 'O campo categoria é obrigatório'})} className={errors.categoria && styles['input-erro']}>
                        <option disabled value=''>Selecione a cetegoria</option>
                        {categorias.map(categoria=><option key={categoria.id} value={categoria.id} >{categoria.nome}</option>)}
                    </select>
                    {errors.categoria && <span className={styles['mensagem-erro']}>{errors.categoria.message}</span>}
                </div>
                <div className={styles.container__input}>
                    <InputGeral
                        className={errors.preco && styles['input-erro']} 
                        id='preco' 
                        type='number' 
                        placeholder='Preço do produto' 
                        {...register('preco', {required: 'O campo preco é obrigatório', valueAsNumber: true})}
                    />
                    {errors.preco && <span className={styles['mensagem-erro']}>{errors.preco.message}</span>}
                </div>
                <Button>Cadastrar produto</Button>
            </form>
        </div>
    )
}
export default Anunciar