import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Footer(){
    return(
        <div id={styles.footer}>
        <Container>

        <Row>
          
          <Col xs={12} lg={6}>
            <img src="logo.png" alt=""/>
          </Col>


          <Col xs={12} lg={6}>
            <p>Todos os direitos reservados </p>
          </Col>


        </Row>

        </Container>
        </div>
    )
}