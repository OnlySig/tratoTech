import ReactDOM from 'react-dom/client'
import Routes from './Routes.tsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './store/index.ts'
import { createStandaloneToast } from '@chakra-ui/toast'

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Routes />
    <ToastContainer/>
  </Provider>
)
