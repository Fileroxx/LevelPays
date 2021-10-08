import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import Link from 'next/link'


export default function Navbar() {
    return(
        <div id={styles.navbar}>
            <Container>
                

                <Row>

                    <Col>
                        <Link href="/">
                            <div className={styles.logo} style={{cursor: 'pointer'}}>
                                <img src="logo.png" alt=""/>
                            </div>                  
                        </Link>

                    </Col>


                    <Col>
                        <div className={styles.links}>
                            <a style={{cursor: 'pointer'}}>LevelPays</a>
                            <a style={{cursor: 'pointer'}}>Pagamentos</a>
                            <a style={{cursor: 'pointer'}}>Segurança</a>
                            <a style={{cursor: 'pointer'}}>Minha conta</a>
                        </div>
                    </Col>


                </Row>


            </Container>
        </div>
    )
}