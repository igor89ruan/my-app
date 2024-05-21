import { Container, Card, Button, Row, Col, Form, FloatingLabel, Alert} from "react-bootstrap";
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './AgendarCss/AgendarServicos.css';


function AgendarServicos() {
    const [showMensagem, setShowMensagem] = useState(false);
    const [validated, setValidated] = useState(false);
    const [nomeCadastro, setNome] = useState('');
    const [cpfCadastro, setCpf] = useState('');
    const [contatoCadastro, setContato] = useState('');
    const [dataCadastro, setData] = useState('');
    const [errors, setErrors] = useState({});

    const handleNomeChange = (event) => {
        const value = event.target.value;
        setNome(value);
        if(value && value.length <= 100) {
            setErrors((prev) => ({...prev, nome: ''}));
        }else {
            if(value === '') {
                setErrors((prev) => ({...prev, nome: 'O campo precisam ser preenchido'}));
            }else {
                setErrors((prev) => ({...prev, nome: 'Nome inválido'}));
            }
        }
    }

    const handleCpfChange = (event) => {
        const value = event.target.value;
        setCpf(value);
        if(value && value.length <= 11) {
            setErrors((prev) => ({...prev, cpf: ''}));
        }else {
            if(value === '') {
                setErrors((prev) => ({...prev, cpf: 'O campo precisam ser preenchido'}));
            }else {
                setErrors((prev) => ({...prev, cpf: 'CPF inválido'}));
            }
        }
    }

    const handleContatoChange = (event) => {
        const value = event.target.value;
        setContato(value);
        if(value && value.length <= 11) {
            setErrors((prev) => ({...prev, contato: ''}));
        }else {
            if(value === '') {
                setErrors((prev) => ({...prev, contato: 'O campo precisam ser preenchido'}));
            }else {
                setErrors((prev) => ({...prev, contato: 'Contato inválido'}));
            }
        }
    }

    const handleDataChange = (event) => {
        const value = event.target.value;
        setData(value);
        if(value && value.length <= 11) {
            setErrors((prev) => ({...prev, data: ''}));
        }else {
            if(value === '') {
                setErrors((prev) => ({...prev, data: 'O campo precisam ser preenchido'}));
            }else {
                setErrors((prev) => ({...prev, data: 'Data inválida'}));
            }
        }
    }


    

    function handleSalvar(event) {
        event.preventDefault();
        const form = event.currentTarget;
        let newErrors = {};

        if(form.checkValidity() === false) {
            event.stopPropagation();
        }

        if(!nomeCadastro) {
            newErrors.nomeCadastro = 'O campo precisam ser preenchido';
        }else if(nomeCadastro.length > 100) {
            newErrors.nomeCadastro = 'Nome inválido';
        }

        if(!cpfCadastro) {
            newErrors.cpfCadastro = 'O campo precisam ser preenchido';
        }else if(cpfCadastro.length > 11) {
            newErrors.cpfCadastro = 'CPF inválido';
        }

        if(!contatoCadastro) {
            newErrors.contatoCadastro = 'O campo precisam ser preenchido';
        }else if(contatoCadastro.length > 11) {
            newErrors.contatoCadastro = 'Contato inválido';
        }

        if(!dataCadastro) {
            newErrors.dataCadastro = 'O campo precisam ser preenchido';
        }else if(new Date(dataCadastro) < new Date()) {
            newErrors.dataCadastro = 'Não pode ser uma data passada';
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }else {
            const agendamento = {
                id: 0,
                nome: nomeCadastro,
                cpf: cpfCadastro,
                contato: contatoCadastro,
                data: dataCadastro
            }

            console.log(agendamento);
        }
        setShowMensagem(true);
    }


    
    return ( <>
        <Container className="container">
            <Card className="mt-4">
                <h1 id="titulo">Agendar Serviços</h1>
                
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSalvar}>
                        <h5>Dados Pessoais</h5>
                        <Row className="espaco">
                            <Col lg='1'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="id">
                                        <Form.Label>ID:</Form.Label>
                                        <Form.Control type="text" placeholder="ID"/>
                                        
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='4'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="nomeCadastro"> 
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="text" placeholder="Nome"
                                        required
                                        value={nomeCadastro}
                                        onChange={handleNomeChange}
                                        isInvalid={!!errors.nomeCadastro}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.nome}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='3'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="cpfCadastro">
                                        <Form.Label>CPF:</Form.Label>
                                        <Form.Control type="text" placeholder="CPF"
                                        required
                                        value={cpfCadastro}
                                        onChange={handleCpfChange}
                                        isInvalid={!!errors.cpfCadastro}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.cpf}
                                        </Form.Control.Feedback>
                                        
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='3'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="contatoCadastro">
                                        <Form.Label>Contato:</Form.Label>
                                        <Form.Control type="text" placeholder="Contato"
                                        required
                                        value={contatoCadastro}
                                        onChange={handleContatoChange}
                                        isInvalid={!!errors.contatoCadastro}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.contato}
                                        </Form.Control.Feedback>
                                        
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='4'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Endereço:</Form.Label>
                                        <Form.Control type="text" placeholder="Endereço"/>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='1'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Número:</Form.Label>
                                        <Form.Control type="text" placeholder="Número" style={{width: '85px'}}/>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='3'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Bairro:</Form.Label>
                                        <Form.Control type="text" placeholder="Bairro"/>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='3'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cidade:</Form.Label>
                                        <Form.Control type="text" placeholder="Cidade"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg='5'>
                                <div id="barra"></div>
                            </Col>
                        </Row>

                        <h5>Detalhes do Serviço</h5>

                        <Row className="espaco">
                            
                            <Col lg='4'>
                                <Form.Label>Tipo de Serviços</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Selecione</option>
                                    <option value="1">Opcao 1</option>
                                    <option value="2">Opcao 2</option>
                                    <option value="3">Opcao 3</option>
                                </Form.Select>
                            </Col>

                            <Col lg='2'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="dataCadastro">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control type="DATE"
                                        required
                                        value={dataCadastro}
                                        onChange={handleDataChange}
                                        isInvalid={!!errors.dataCadastro}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.data}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='2'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Horário</Form.Label>
                                        <Form.Control type="time"/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                        <Row className="espaco">
                            <Col lg='2' className="mb-3" id="divisao">
                                <Form.Label>Referencias Especiais</Form.Label>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Observações"
                                    className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{
                                            width: '500px',
                                            height: '200px'}}/>
                                </FloatingLabel>
                            </Col> 
                            
                            <Col lg='2'>
                                <Form.Label>Descrição do Serviço</Form.Label>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Observações"
                                    className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{
                                            width: '500px',
                                            height: '200px'}}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                            
                        <Row className="espaco" id="flex" style={{display: 'flex', justifyContent: 'center'}}>
                            <Form.Check >
                                <Form.Check.Input type="checkbox" id="checkbox"/>
                                <Form.Check.Label id="label">
                                    Aceito os <a href="#">Termos e Condições</a>
                                </Form.Check.Label>
                            </Form.Check>

                            <Alert variant="success" id="alerta" show={showMensagem}><FaCheckCircle /> Agendamento Realizado com Sucesso!</Alert>
                        </Row>

                        <Button variant="success" type="submit" className="mt-3" id="botao">
                            Agendar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </>
    );
}

export default AgendarServicos;