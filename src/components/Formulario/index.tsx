import { Button } from '@material-ui/core'
import { Col, Container, Form, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Formulario(){
    return(
        <div id={styles.formulario}>
        <Container>

            <Row>

                <Col xs={12} lg={6}>

                <img width="10%" src="seguranca.png" alt=""/>

                <h3>
                    Segurança em todas
                    as suas transações
                </h3>

                <p>
                Levamos a segurança de todos os seus dados
                 a sério e por esse motivo utilizamos os 
                 melhores fundamentos de tecnologia para
                  proteger suas transações, fornecendo 
                  backups de dados e preservando a sua 
                  navegação com autenticação e confirmacação
                  em dois fatores.
                </p>

                </Col>



                <Col xs={12} lg={6}>
                
                <img width="10%" src="conta.png" alt=""/>

                <h3>
                Uma conta única para gerenciar seus negócios 
                </h3>

                <p>
                Isso mesmo! Você precisa apenas de uma unica 
                conta cadastrada e assim, inserir os dados de
                todos os seus negócios/empresas. 
                </p>

                <p>
                O seu painel financeiro entrega 
                informações personalizadas
                e individuais das suas empresas.
                </p>

                </Col>

            </Row>


            <div className={styles.formulario}>
                
                <div className={styles.titulo}>
                    <h3>Crie sua conta</h3>
                </div>

                <Row>

                <Col xs={12} lg={6}>
                    <p>
                     Você está a poucos passos de iniciar 
                     um novo jeito de gerenciar suas 
                     transações financeiras em seu negócio. 
                    </p>

                    <p>
                    Preencha as informações ao lado e você
                    será direcionado a uma nova tela para
                    efetuar o cadastro da sua empresa.  
                    </p>

                    <p>
                    Bem-vindo a LevelPays.
                    </p> 
                </Col>

                <Col xs={12} lg={6}>
                    <Form>
          
                    <Form.Control size="lg" type="text" placeholder="Nome" required/>
                    <br />
                    <Form.Control size="lg" type="text" placeholder="E-mail" required/>
                    <br />
                    <Button type="submit" fullWidth size="large" className={styles.botao}>Começar agora</Button>
            

                    </Form>
    </Col>


                </Row>

            </div>

        </Container>
        </div>
    )
}