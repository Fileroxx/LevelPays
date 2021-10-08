import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Ferramentas(){
    return(
        <div id={styles.ferramentas}>
            <Container>

                <Row>

                    <Col xs={12} lg={6}>
                        <div className={styles.celular}>
                             <img src="celular.png" />
                        </div>
 
                    </Col>

                    <Col>
                    
                    <div className={styles.titulo}>
                        <img src="ferramentas.png" alt=""/>

                        <h4>Ferramentas para o seu negócio</h4>
                    </div>

                    <p>
                        Estamos um Level a frente, onde nossa visão esta em 
                        antecipar as necessidades as suas necessidades e te 
                        entregar diariamente uma solução completa, conte com
                        a LevelPays. 
                    </p>



                    <div className={styles.cardFerramentas}>



                    <div className={styles.card}>
                        
                    <p>Relatório de pagamentos</p>

                    <p>Definir benefícios para esta modalidade </p>

                    <img src="check.png" alt=""/>

                    </div>




                    <div className={styles.card}>
                        
                        <p>Agendamento</p>
    
                        <p>Definir benefícios para esta modalidade </p>
    
                        <img src="check.png" alt=""/>
    
                        </div>





                        <div className={styles.card}>
                        
                        <p>Múltiplos acessos</p>
    
                        <p>Definir benefícios para esta modalidade </p>
    
                        <img src="check.png" alt=""/>
    
                        </div>







                        <div className={styles.card}>
                        
                        <p>Relatório de pagamentos</p>
    
                        <p>Definir benefícios para esta modalidade </p>
    
                        <img src="check.png" alt=""/>
    
                        </div>




                        <div className={styles.card}>
                        
                        <p>Checkout personalizado</p>
    
                        <p>Definir benefícios para esta modalidade </p>
    
                        <img src="check.png" alt=""/>
    
                        </div>




                    </div>

                    </Col>

                </Row>

            </Container>
        </div>
    )
}