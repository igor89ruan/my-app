import './AgendarCss/VisualizarAgendamentos.css';
import { Card, Container,Form, Table, Button} from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function VisualizarAgendamentos() {

    const listaAgendamentos = [
        {id:1, nome:'Igor',cpf:'123456789',contato:'123456789',data:'01/01/2022'},
        {id:2, nome:'Igor',cpf:'123456789',contato:'123456789',data:'01/01/2022'},
        {id:3, nome:'Igor',cpf:'123456789',contato:'123456789',data:'01/01/2022'}
    ]
    return (
        <Container className="container">
            <Card className="mt-4"> 
                <h1 id="titulo">Visualizar Agendamento</h1>

                <Card.Body>
                    <div className="pesquisa">
                        <Form.Control type="text" placeholder="Pesquisar Agendamento" id='input'/>
                        <Button>PESQUISAR</Button>
                    </div>
                        
                                
                            
                        
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CPF</th>
                            <th>CONTATO</th>
                            <th>DATA</th>
                            <th>ACAO</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listaAgendamentos.map((agendamento) => (
                                <tr>
                                    <td>{agendamento.id}</td>
                                    <td>{agendamento.nome}</td>
                                    <td>{agendamento.cpf}</td>
                                    <td>{agendamento.contato}</td>
                                    <td>{agendamento.data}</td>
                                    <td>
                                        <Link className='ml-2 btn btn-warning'> <FaEdit/> Editar</Link>
                                        <Link className= 'ml-2 btn btn-danger'> <FaTrash/> Excluir</Link>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </Table>

                    <div className='barra'></div>

                    
                </Card.Body>
            </Card>
        </Container> 
    );
}

export default VisualizarAgendamentos;