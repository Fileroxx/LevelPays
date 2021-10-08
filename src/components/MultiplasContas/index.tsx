import styles from './styles.module.css';

import Footer from '../Footer';
import Navbar from '../Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import NavbarMobile from '../NavbarMobile';


export default function MultiplasContas(){
    return(

        <div id={styles.multiplasContas}>

        <div className={styles.navbar}>

        <Navbar />

        <NavbarMobile />

        </div>

        <div className={styles.hero}>
        
        <Container>
          <h1>Múltiplas contas</h1>
        </Container>

        </div>



 <div className={styles.detalhes}>
     
 <Container>

    <h3>Você precisa cadastrar multiplas contas?</h3>

    <p>
    Amet minim mollit non deserunt ullamco est sit aliqua dolor
    do amet sint. Velit officia consequat duis enim 
    velit mollit. Exercitation veniam consequat sunt 
    nostrud amet. Amet minim mollit non deserunt ullamco 
    est sit aliqua dolor do amet sint. Velit officia consequat
    duis enim velit mollit. Exercitation veniam consequat sunt
    nostrud amet. Amet minim mollit non deserunt ullamco est sit
    aliqua dolor do amet sint. Velit officia consequat duis enim
    velit mollit. Exercitation veniam consequat sunt nostrud 
    amet. Amet minim mollit non deserunt ullamco est sit 
    aliqua dolor do amet sint. Velit officia consequat duis 
    enim velit mollit. Exercitation veniam consequat sunt
    nostrud amet.
    </p>


    <p>
        Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit 
        officia consequat duis enim velit mollit.  
        Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Amet minim mollit non 
        deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. 
    </p>



    <p>
        Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit 
        officia consequat duis enim velit mollit.  
        Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Amet minim mollit non 
        deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. 
    </p>


    <p>
        Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit 
        officia consequat duis enim velit mollit.  
        Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat
        duis enim velit mollit. Amet minim mollit non 
        deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. 
    </p>




    </Container>
 </div>   



 <div className={styles.adicional}>
    <Container>

        <h3>Dicas de como automatizar seu negócio</h3>

        <Row>


        <Col xs={12} lg={4}>
            <div className={styles.card1}>
                <h3>Múltiplas contas</h3>
                <img src="setaDireita.png" alt=""/>
            </div>
        </Col>


        <Col xs={12} lg={4}>

        <div className={styles.card2}>
            <h3>Enviar pagamentos</h3>
            <img src="setaDireita.png" alt=""/>
        </div>

        </Col>


        <Col xs={12} lg={4}>

        <div className={styles.card3}>
            <h3>Gerar relatórios</h3>
            <img src="setaDireita.png" alt=""/>
        </div>    

        </Col>


        </Row>




    </Container>








        <Footer />

        </div>

    </div>
    )
}