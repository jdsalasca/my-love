import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PrimeReactProvider } from 'primereact/api';

// Import PrimeReact styles
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <PrimeReactProvider>
        <App />
    </PrimeReactProvider>
  </React.StrictMode>,
) 