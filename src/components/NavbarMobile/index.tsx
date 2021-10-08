import styles from './styles.module.css'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Fade, Modal } from '@material-ui/core'
import { ExpandMore, ExpandMoreOutlined } from '@material-ui/icons'



export default function NavbarMobile(){

    const [open, setOpen] = React.useState(false)


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(

    <div id={styles.navbarMobile}>
        <Container>

        <Row>

        <Col>
            <img width="90%" src="logo.png" alt=""/>
        </Col>

        <Col>
            <Button endIcon={<ExpandMoreOutlined />} onClick={handleOpen} className={styles.botao}>
               MENU 
            </Button>


        </Col>

        </Row>


        <Modal
        className={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
                
        <Fade in={open}>


        <div className={styles.links} style={{ textAlign: 'center', paddingTop: '6rem', display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem'}}>
            <Button  fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo' ,background: 'linear-gradient(93.3deg, #2161FF 28.21%, #224EC8 62.91%, #1236A4 102.25%)' }}>Qual é o seu business?</Button>
            <br />
            <Button fullWidth  style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(93.3deg, #2161FF 28.21%, #224EC8 62.91%, #1236A4 102.25%)' }}>O que fazemos?</Button>
            <br />
            <Button  fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(93.3deg, #2161FF 28.21%, #224EC8 62.91%, #1236A4 102.25%)' }}>Educação</Button>
            <br />
            <Button fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(93.3deg, #2161FF 28.21%, #224EC8 62.91%, #1236A4 102.25%)' }}>Blog</Button>


        </div>
        </Fade>
    



        </Modal>

        </Container>
       

    </div>

    )
}
