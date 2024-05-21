import Header from './componentes/Header'
import styled from 'styled-components'
import Manutencao from './componentes/SiteManutencao';
import WhatsappButtonlza from './componentes/WhatsappButtonLza';
import WhatsappButtonvgo from './componentes/WhatsappButtonVgo';
import LocationLinklza from './componentes/LocalizacaoLza';
import LocationLinkvgo from './componentes/LocalizacaoVgo';
import Footer from './componentes/Rodape';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    

    li {
        list-style: none;
    }
`

function App() {
    return (
      <AppContainer>
        <Header />
        <Manutencao />
        <WhatsappButtonlza />
        <WhatsappButtonvgo />
        <LocationLinklza />
        <LocationLinkvgo />
        <Footer />
        
        
    </AppContainer>
  );
}

export default App