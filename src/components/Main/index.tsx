import { Button } from '@material-ui/core'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar'
import NavbarMobile from '../NavbarMobile'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Main(){
    return (
        <div id={styles.main}>
            
            <Navbar />
            <NavbarMobile />

            <Container>

            <Row>

            <Col xs={12} lg={6}>

                <h1>
                Tudo que você precisa 
                para automatizar suas 
                operações financeiras
                </h1>

                <p>
                Um passo para otimizar as suas transações
                e gerenciamento do seu negócio
                </p>

                <Link href="/cadastro">
                     <Button className={styles.botao}>Criar conta</Button>
                </Link>
          

            </Col>


            <Col></Col>


            </Row>


            </Container>

          

        </div>
    )
}