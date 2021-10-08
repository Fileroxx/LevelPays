import { Container } from 'react-bootstrap'
import styles from './styles.module.css'
import Link from 'next/link'

export default function TopoCadastro(){
    return(
        <div id={styles.topoCadastro}>
            <Container>
                <Link href="/">
                  <img src="logo.png" alt="" style={{ cursor: 'pointer'}}/>               
                </Link>


            </Container>
        </div>
    )
}