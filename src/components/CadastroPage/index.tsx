import { Container } from 'react-bootstrap'
import CadastroView from '../cadastroView'
import FooterCadastro from '../FooterCadastro'
import TopoCadastro from '../TopoCadastro'
import styles from './styles.module.css'


export default function CadastroPage(){
    return(
        <div id={styles.cadastroPage}>

         <TopoCadastro />

        <CadastroView />
        
        <FooterCadastro />

        </div>
    )
}