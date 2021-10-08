import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Dicas(){
    return(
        <div id={styles.dicas}>
            <Container>

            <h4>Dicas de como automatizar seu negócio</h4>


            <Row>

            <Link href="/multiplas-contas">

                <Col xs={12} lg={4}>
                        <div className={styles.card1} style={{cursor: 'pointer'}}>
                            <h3>Múltiplas contas</h3>
                            <img src="setaDireita.png" alt=""/>
                        </div>
                    </Col>           
            </Link>
 



            <Link href="/multiplas-contas">
                <Col xs={12} lg={4}>

                <div className={styles.card2} style={{cursor: 'pointer'}}>
                    <h3>Enviar pagamentos</h3>
                    <img src="setaDireita.png" alt=""/>
                </div>

                </Col>
            </Link>



            <Link href="/multiplas-contas">

                <Col xs={12} lg={4}>

                <div className={styles.card3} style={{cursor: 'pointer'}}>
                    <h3>Gerar relatórios</h3>
                    <img src="setaDireita.png" alt=""/>
                </div>    

                </Col>

            </Link>

            </Row>



            </Container>
        </div>
    )
}