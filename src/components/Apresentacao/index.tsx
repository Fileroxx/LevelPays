import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Apresentacao(){
    return(
        <div id={styles.apresentacao}>

            <Container>

                <div className={styles.titulo}>

                    <img src="react.png" alt=""/>

                    <h3>A LevelPays</h3>

                </div>


                <div className={styles.texto}>
                    <p>
                        Muito mais que pensar em uma plataforma de 
                        pagamento a LevelPays conhece de perto a
                        necessidade em atender de forma rápida e
                        objetiva aos pequenos e médios empresários
                        que precisam receber e efetuar pagamentos 
                        aos seus clientes e colaboradores.
                    </p>
                </div>


                <Row>

                <Col>
                
                <div className={styles.card}>


                <div className={styles.titulo}>

                    <h4>Split de Pagamentos</h4>

                    <img src="qr.png" alt=""/>

                </div>
                

                <div className={styles.texto}>

                    <p>
                    em minutos uma conta com todos os recursos para
                    automatizar basicamente todo o processo financeiro
                    de uma empresa desde o recebimento até o SPLIT de
                    pagamentos.
                    </p>

                </div>

                

                </div>


                </Col>





                <Col>
                

                <div className={styles.card}>


                <div className={styles.titulo}>

                    <h4>Pay with Crypto</h4>

                    <img src="cripto.png" alt=""/>

                </div>


                <div className={styles.texto}>

                    <p>
                    somos pioneira no Brasil em validar
                    transaçoes financeiras como um modelo
                    seguro de pagamentos via criptomoedas
                    24h / 7 dia por semana
                    </p>

                <br/>
                </div>



                </div>


                
                </Col>





                <Col>

                
                <div className={styles.card}>


                <div className={styles.titulo}>

                    <h4>Feito para todos</h4>

                    <img src="negocio.png" alt=""/>

                </div>


                <div className={styles.texto}>

                    <p>
                    permitimos que qualquer estabelecimento consiga
                    criar a sua conta independente do volume de 
                    transações e sua carteira de clientes
                    </p>

                    <br/>

                </div>



                </div>


                
                </Col>



                </Row>


                
                <Row>


                <Col>

                    <div className={styles.titulo2}>
                        <img src="qrWhite.png" alt=""/>
                        <h4>Tipo de pagamentos</h4>
                    </div>


                    <div className={styles.texto2}>
                        <p>
                            Acreditamos que podemos tornar mais prático
                            e integrado os recebimentos de seus negócios,
                            nao importa o tamanho e o tipo ou modelo da
                            sua empresa, tudo é definido diante a sua
                            necessidade. 
                        </p>
                    </div>


                    <div className={styles.cardPagamentos}>



                        <div className={styles.boleto}>
                            <h5>Boleto</h5>
                            <p>Definir benefícios para esta modalidade</p>
                            <img src="check.png" alt=""/>
                        </div>

                        <div className={styles.boleto}>
                            <h5>Cartão de Crédito</h5>
                            <p>Definir benefícios para esta modalidade</p>
                            <img src="check.png" alt=""/>
                        </div>

                        <div className={styles.boleto}>
                            <h5>Moedas Digitais</h5>
                            <p>Definir benefícios para esta modalidade</p>
                            <img src="check.png" alt=""/>
                        </div>


                    </div>

                </Col>


                <Col md={5}>
                
                    <div className={styles.imagem}>
                        <img width="100%" src="reuniao.png" alt=""/>
                    </div>

                </Col>


                </Row>
                



            </Container>

        </div>
    )
}