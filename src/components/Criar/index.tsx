import { Button } from '@material-ui/core'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Criar(){
    return(
        <div id={styles.criar}>
        <Container>

        <Row>

        <Col lg={8}>
            <p>
                Uma conta é o suficiente para ter um mundo de facilidades para pagamentos, controle e gestão das transações financeiras do seu negócio
            </p>
        </Col>


        <Col lg={4}>
        
            <Link href="/cadastro">

            <Button className={styles.botao}>Criar conta</Button>         
           
            </Link>
                 </Col>

        </Row>

        </Container>

        </div>
    )
}