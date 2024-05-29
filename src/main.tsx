import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.tsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
