import { Button, ButtonBase } from '@material-ui/core';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import styles from './styles.module.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'


export default function CadastroView(){
    return(
        <div id={styles.cadastroView}>
            <Container>

                <div className={styles.titulo}>
                    <h3>Iniciar Cadastro:</h3>
                </div>


            <Form>


                <Row>

                    <Col lg={6}>
                             <Form.Control type="text" size="lg" placeholder="Nome" required />           
                    </Col>  


                    <Col lg={6}>
                             <Form.Control type="text" size="lg" placeholder="CPF" required/>             
                    </Col>





                    <Col lg={6}>
                             <Form.Control type="number" size="lg" placeholder="Telefone" required/>           
                    </Col>  


                    <Col lg={6}>
                             <Form.Control type="email" size="lg" placeholder="Email" required/>             
                    </Col>




                    <Col lg={6}>
                             <Form.Control type="text" size="lg" placeholder="Endereço" required/>           
                    </Col>  


                    <Col lg={6}>
                             <Form.Control type="number" size="lg" placeholder="CEP:" required/>             
                    </Col>


                    <Col lg={6}>

                    </Col>


                    <Col lg={6}>
                        <div className={styles.botaoContinuar}>
                            <Button type="submit" endIcon={<ArrowRightAltIcon />} className={styles.botao}>Continuar</Button>
                        </div>
                    </Col>


                </Row>



                </Form>


            </Container>
        </div>
    )
}