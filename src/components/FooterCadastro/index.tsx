import { Container } from 'react-bootstrap';
import styles from './styles.module.css';

export default function FooterCadastro(){
    return(
        <div id={styles.footerCadastro}>
           <Container>
               <p>Todos os seus dados estão protegidos por criptografia de ponta.</p>
           </Container>
        </div>
    )
}