import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import AgendarServicos from './Paginas/Agendar/AgendarServicos';
import VisualizarAgendamentos from './Paginas/Agendar/VisualizarAgendamentos';
import PersonalizarAgendamentos from './Paginas/Agendar/PersonalizarAgendamentos';

const router = createBrowserRouter(
  [
    {
      //raiz
      element: <NavBar></NavBar>,
      children: [
        {
          path: '/',
          element: <App />
        },
        {
          path: '/AgendarServicos',
          element: <AgendarServicos></AgendarServicos>
        },
        {
          path: '/VisualizarAgendamentos',
          element: <VisualizarAgendamentos></VisualizarAgendamentos>
        },
        {
          path: '/PersonalizarAgendamentos',
          element: <PersonalizarAgendamentos></PersonalizarAgendamentos>
        }
      ]
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
