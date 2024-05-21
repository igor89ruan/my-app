import { Container } from 'react-bootstrap';
import './NavBar.css';
import { FcViewDetails, FcFolder, FcMenu, FcAssistant } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';



function NavBar() {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(!show);
    return ( <>
            <div className={`side-navbar ${show ? 'active-nav' : ''}`} id="sidebar">
                <h1 id="logo">ECOGEST</h1>
                <p id="slogan">Inovando o Presente,<br/>Preservando o Futuro</p>
                <div>
                    <FcViewDetails id='icon' /><span id='titulo-menu'>Agendar</span>
                    <ul className='links'>
                        <Link to="/AgendarServicos" id='link-span'><span id='pagina'>Agendar Serviços</span></Link>
                        <Link to="/PersonalizarAgendamentos" id='link-span'><span id='pagina'>Personalizar Agendamento</span></Link>
                        <Link to="/VisualizarAgendamentos" id='link-span'><span id='pagina'>Visualizar Agendamentos</span></Link>
                    </ul>
                </div>

                <div>
                    <FcFolder id='icon'/><span id='titulo-menu'>Cadastro</span>
                    <ul className='links'>
                        <Link to="/" id='link-span'><span id='pagina'>Cadastro de Beneficiários</span></Link>
                        <Link to="/" id='link-span'><span id='pagina'>Cadastro de Colaboradores</span></Link>
                    </ul>
                </div>
            </div>
            <div className={`p-1 my-container ${show ? 'active-cont' : ''}`}>
                <nav onClick={handleShow} className='navbar top-navbar navbar-light bg-light px-1'>
                    <FcMenu id='iconHamburger'/>
                    <p id='perfil'><FcAssistant id='iconAssist'/> Olá Igor</p>
                </nav>
            </div>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}

export default NavBar;