import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router.jsx';
import SetContext from './ContextApi/SetContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SetContext>
      <RouterProvider router={router} />
    </SetContext>
  </StrictMode>,
)
