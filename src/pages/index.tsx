import Apresentacao from '../components/Apresentacao'
import Criar from '../components/Criar'
import Ferramentas from '../components/Ferramentas'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'
import Main from '../components/Main'
import Dicas from '../Dicas'
import Head from 'next/head'


export default function Home() {
  

  
  return (


   <div>

   <Head>
    <title>LevelPays - Tudo que você precisa para automatizar suas operações financeiras</title>
    </Head>

        <Main />

        <Apresentacao />

        <Ferramentas />

        <Dicas />

        <Criar />

        <Formulario />

        <Footer />

   </div>
  )
}
